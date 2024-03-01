import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'

const World = () => {
    return (
        <div className='w-full h-full'>
            <Canvas
                camera={{ fov: 35, near: 0.1, far: 100, position: [0, 0, 8.5] }}>

                <Experience />
            </Canvas>
        </div>
    )
}

export default World