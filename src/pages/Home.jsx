// Home.jsx
import AnimatedContent from '../components/animations/AnimatedContent';
import GlassSurface from '../components/others/GlassSurface';
import TextPressure from "../components/text/TextPressure";
import { PawPrint, Webhook, Frame } from "lucide-react";
import { SiGithub, SiSpotify, SiTelegram, SiInstagram } from "@icons-pack/react-simple-icons"
import AnimatedScale from "../components/animations/AnimatedScale";
import SocialMedia from "../components/SocialMedia";
import FaultyTerminal from '../components/background/FaultyTerminal';
import SplitText from '../components/text/SplitText';
import TextType from '../components/text/TextType';

export default function Home() {
    const socialConfigs = [
        {
            name: 'Telegram',
            url: 'https://t.me/freakdaniel',
            icon: SiTelegram,
            color: 'rgba(42, 171, 238, 0.2)'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/_freakdaniel',
            icon: SiInstagram,
            color: 'linear-gradient(to top right, rgba(64, 93, 230, 0.2), rgba(88, 81, 219, 0.2), rgba(131, 58, 180, 0.2))'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/freakdaniel',
            icon: SiGithub,
            color: 'rgba(245, 100, 40, 0.2)'
        },
        {
            name: 'Spotify',
            url: 'https://open.spotify.com/user/317grjblvlenxyyqv6vdxyg47lvq?si=d9a9690a74a64cd8',
            icon: SiSpotify,
            color: 'rgba(29, 185, 84, 0.2)'
        }
    ];

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
            <div className='fixed inset-0 z-0'>
                <FaultyTerminal
                    scale={2}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={1}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.3}
                    tint="#ffffff"
                    mouseReact={true}
                    mouseStrength={0.5}
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
                    <div className=" text-white">
                        <div className="relative min-h-screen flex flex-col container mx-auto px-4 py-8 flex-1 items-center justify-center text-center"> {/* py-8 вместо py-20 для мобильных */}
                            {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full max-w-2xl">
                                <AnimatedScale>
                                    <GlassSurface className="p-1.5 min-w-[140px] sm:min-w-[180px]">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Webhook size={16} style={{ opacity: 0.7 }} />
                                            <p className="text-white/70 text-base sm:text-lg select-none">Web-Developer</p>
                                        </div>
                                    </GlassSurface>
                                </AnimatedScale>
                                <AnimatedScale>
                                    <GlassSurface className="p-1.5 min-w-[140px] sm:min-w-[180px]">
                                        <div className="flex flex-row gap-2 items-center">
                                            <Frame size={16} style={{ opacity: 0.7 }} />
                                            <p className="text-white/70 text-base sm:text-lg select-none">UI/UX Designer</p>
                                        </div>
                                    </GlassSurface>
                                </AnimatedScale>
                                <AnimatedScale>
                                    <GlassSurface className="p-1.5 min-w-[140px] sm:min-w-[180px]">
                                        <div className="flex flex-row gap-2 items-center">
                                            <PawPrint size={16} style={{ opacity: 0.7 }} />
                                            <p className="text-white/70 text-base sm:text-lg select-none">Cats Enjoyeer</p>
                                        </div>
                                    </GlassSurface>
                                </AnimatedScale>
                            </div> */}

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
                    </div>
                </AnimatedContent>
            </div>
        </div>
    )
}