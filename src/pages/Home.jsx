import AnimatedContent from '../components/animations/AnimatedContent';
import TextPressure from "../components/text/TextPressure";
import FaultyTerminal from '../components/background/FaultyTerminal';
import TextType from '../components/text/TextType';
import LightRays from '../components/others/LightRays';
import BlurText from '../components/text/BlurText';
import SplitText from '../components/text/SplitText';

export default function Home() {
    return (
        <div className='h-screen scroll-smooth snap-y snap-mandatory overflow-x-hidden bg-black' id="snap-main-container" style={{ overflowY: 'scroll' }}>
            <section className="w-screen h-screen bg-black relative snap-center">
                <div className='fixed inset-0 z-0'>
                    <FaultyTerminal
                        scale={2}
                        gridMul={[2, 1]}
                        digitSize={1.2}
                        timeScale={0.2}
                        pause={false}
                        scanlineIntensity={1}
                        glitchAmount={1}
                        flickerAmount={0.5}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0.3}
                        tint="#ffffff"
                        mouseReact={false}
                        pageLoadAnimation={true}
                        brightness={0.3}
                    />
                </div>

                <div className="relative z-10 w-full h-full">
                    <AnimatedContent
                        distance={350}
                        reverse={true}
                        initialOpacity={0}
                        direction="vertical"
                        duration={1.2}
                        ease="power3.out"
                        animateOpacity
                        scale={1.5}
                        threshold={0.2}
                    >
                        <div className="min-h-screen flex flex-col container mx-auto px-4 py-8 flex-1 items-center justify-center text-center">
                            <div className="my-4 sm:my-8 w-full max-w-4xl mx-auto">
                                <AnimatedContent
                                    distance={150}
                                    initialOpacity={0}
                                    direction="vertical"
                                    duration={1.4}
                                    ease="power3.out"
                                    animateOpacity
                                    scale={1.2}
                                    threshold={0.2}
                                >
                                    <TextPressure
                                        text="DANIEL FREAK"
                                        flex={true}
                                        alpha={false}
                                        stroke={false}
                                        width={true}
                                        weight={true}
                                        italic={true}
                                        textColor="rgba(255, 255, 255, 0.7)"
                                        strokeColor="#ff0000"
                                        className="select-none max-w-full text-balance"
                                        style={{
                                            fontSize: 'max(3rem, min(10rem, 10vw))',
                                        }}
                                    />

                                    <TextType
                                        text={["WEB DEVELOPER", "BACKEND DEVELOPER", "AN AWESOME PERSON (✿◦’ᴗ˘◦)♡"]}
                                        typingSpeed={80}
                                        deletingSpeed={25}
                                        className="mt-4 sm:mt-6 text-white/70 select-none max-w-full"
                                        style={{
                                            fontSize: 'max(1.125rem, min(1.5rem, 3vw))'
                                        }}
                                    />
                                </AnimatedContent>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
            <section className="w-screen h-screen bg-black relative snap-center overflow-hidden">
                <div className="absolute inset-0 z-0 w-full h-full">
                    <AnimatedContent
                        distance={0}
                        scale={1.1}
                        initialOpacity={0}
                        duration={2}
                        ease="power2.out"
                        animateOpacity
                        threshold={0.1}

                        className="w-full h-full"
                    >
                        <div className="w-full h-full">
                            <LightRays
                                raysOrigin="top-center"
                                raysColor="#ffffff"
                                raysSpeed={1.5}
                                lightSpread={0.8}
                                rayLength={1.2}
                                followMouse={true}
                                mouseInfluence={0.1}
                                noiseAmount={0.1}
                                distortion={0.05}
                                className="w-full h-full"
                            />
                        </div>
                    </AnimatedContent>
                </div>

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <AnimatedContent
                        distance={100}
                        initialOpacity={0}
                        direction="vertical"
                        reverse={true}
                        duration={1}
                        ease="power3.out"
                        animateOpacity
                        scale={1.1}
                        threshold={0.5}
                        delay={0.5}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <BlurText
                            text="ABOUT ME"
                            intensity={1.2}
                            color="#ffffff"
                            className="text-5xl font-bold tracking-wider font-sync text-center text-white/80"
                            animateBy="letters"
                            direction="top"
                            delay={100}
                        />
                        <SplitText
                            text="It is ok to share personal information on the internet, right?"
                            className="text-xl font-neucha text-center text-white/50"
                            delay={150}
                            duration={0.5}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            textAlign="center"
                            threshold={0}
                        />
                    </AnimatedContent>
                </div>
            </section>
        </div>
    )
}