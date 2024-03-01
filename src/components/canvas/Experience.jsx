import { Text, Float, Center, Environment } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";
import { BeerCan } from "../BeerCan";
import { Suspense, useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";


const Experience = () => {
    const textRefL = useRef()
    const textRefR = useRef()

    useGSAP(() => {
        if (textRefL.current) {
            gsap.from(textRefL.current.position, { x: -10, duration: 1.5 });
        }
        if (textRefR.current) {
            gsap.from(textRefR.current.position, { x: 10, duration: 1.5 });
        }
    });

    return (
        <>

            <Environment files={'../photo_studio_01_2k.hdr'} />
            <Text
                ref={textRefL}
                position={[-4, 0.4, 0]}
                maxWidth='5'
                color='#B7D5DF'
                font='/Bangers-Regular.ttf'
                fontSize='1.1'
                lineHeight='1.3'
                letterSpacing="0.03"
                textAlign="right"
            >
                Savor the Classic
            </Text >
            <Text
                ref={textRefR}
                position={[4, 0.4, 0]}
                maxWidth='5'
                color='#B7D5DF'
                font='/Bangers-Regular.ttf'
                fontSize='1.1'
                lineHeight='1.3'
                letterSpacing="0.03"
                textAlign="left"
            >
                Essence of Brewing
            </Text >
            <Text
                position={[0, -1.6, 2]}
                color='#B7D5DF'
                font='/Bangers-Regular.ttf'
                fontSize='0.4'
                letterSpacing="0.07"
                textAlign="center"
            >
                SIP, RELAX, REPEAT
            </Text>
            <Suspense>

                <Float
                    speed={2.2}
                    rotationIntensity={1.1}
                    floatIntensity={1.5}
                >
                    <Center>
                        <BeerCan rotation={[-0.1, 1.35, 0]} />
                    </Center>
                </Float>
            </Suspense>


        </>
    );
};

export default Experience;
