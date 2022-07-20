import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Cube = () => {
  const mesh = useRef();
  const loader = new TextureLoader();

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh
      ref={mesh}
    >
      <boxGeometry args={[4, 4, 4]} />
      <meshBasicMaterial
        map={loader.load("https://i.imgur.com/M4aeiJ9.jpg")}
      />
    </mesh>
  )
}

const PhotoCube = () => {
  return (
    <Canvas>
      <ambientLight />
      <Cube />
    </Canvas>
  )
}

export default PhotoCube;