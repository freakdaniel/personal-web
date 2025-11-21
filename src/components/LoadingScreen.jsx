import { useState, useEffect } from 'react';
import BlurText from './text/BlurText';
import '../index.css';
import AnimatedContent from './animations/AnimatedContent';
import { useSpring, animated } from '@react-spring/web';

const IMAGE_URLS_TO_PRELOAD = [
  '/imgs/riyo.jpg'
];

const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

const LoadingScreen = ({ logoStr, children }) => {
  const [phase, setPhase] = useState('logo');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const logoText = logoStr;
  const logoTextAnimDuration = logoText.length * 100;
  const logoAppearDuration = logoTextAnimDuration / 1000;
  const logoVisibleDuration = logoAppearDuration * 3;
  const logoDisappearDuration = logoAppearDuration;

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(IMAGE_URLS_TO_PRELOAD.map(url => preloadImage(url)));
        setImagesLoaded(true);
      } catch (error) {
        console.error('LoadingScreen: Error occured while preloading assets:', error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  const handleLogoDisappearanceComplete = () => {
    if (imagesLoaded) {
      setPhase('content');
    } else {
      console.log('LoadingScreen: Assets was NOT preloaded. Skipping...');
      setPhase('loading');
    }
  };

  useEffect(() => {
    if (phase === 'loading' && imagesLoaded) {
      setPhase('content');
    }
  }, [phase, imagesLoaded]);

  const loadingScreenAnimation = useSpring({
    opacity: phase === 'loading' ? 1 : 0,
    scale: phase === 'loading' ? 1 : 0.8,
    config: { tension: 250, friction: 20 },
  });

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-black">
      {phase === 'logo' && (
        <AnimatedContent
          distance={150}
          initialOpacity={0}
          direction="vertical"
          duration={logoAppearDuration}
          ease="power3.out"
          animateOpacity
          scale={1.1}
          threshold={0.2}
          className="min-h-screen flex items-center justify-center"
          disappearAfter={logoVisibleDuration}
          disappearDuration={logoDisappearDuration}
          onDisappearanceComplete={handleLogoDisappearanceComplete}
        >
          <BlurText
            text={logoText}
            intensity={1.5}
            color="#ffffff"
            className="text-5xl font-bold tracking-wider font-sync text-neutral-50"
            animateBy="letters"
            direction="top"
            delay={100}
          />
        </AnimatedContent>
      )}

      {phase === 'loading' && (
        <animated.div
          className="flex flex-col items-center justify-center"
          style={loadingScreenAnimation}
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white text-lg font-medium">Caching assets...</p>
        </animated.div>
      )}

      {phase === 'content' && (
        children
      )}
    </div>
  );
};

export default LoadingScreen;