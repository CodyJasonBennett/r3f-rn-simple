import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber/native'
import { useGLTF } from '@react-three/drei/native'
import modelPath from './assets/duck.glb'

function Model(props) {
  const gltf = useGLTF(modelPath)
  return <primitive {...props} object={gltf.scene} />
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  )
}
