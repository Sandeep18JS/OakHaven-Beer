import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experience from './Experience'
import { Html, Loader, useProgress } from '@react-three/drei'

const World = () => {
    return (
        <div className='w-full h-full'>
            <Canvas
                camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 8.5] }}>
                <Suspense fallback={<LoadingBar />}>
                    <Experience />
                </Suspense>
            </Canvas>

        </div>
    )
}

export default World

function LoadingBar() {
    const { progress } = useProgress()
    return <Html center >
        <div className='w-screen h-screen flex justify-center items-center bg-tertiary'>
            <div className="loader w-12 h-12">
                <div className="circle w-5 h-5 bg-secondary"></div>
                <div className="circle w-5 h-5 bg-secondary"></div>
                <div className="circle w-5 h-5 bg-secondary"></div>
                <div className="circle w-5 h-5 bg-secondary"></div>
            </div>


        </div>
    </Html>
}