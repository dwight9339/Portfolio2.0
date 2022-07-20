import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Cube = () => {
  const mesh = useRef();
  const maps = useLoader(TextureLoader, [
    "https://i.imgur.com/4tCLfEf.jpg?1",
    "https://i.imgur.com/377Hy7y.jpg?1",
    "https://i.imgur.com/M4aeiJ9.jpg",
    "https://i.imgur.com/PSwsFqo.png?1"
  ]);

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.001;
  });

  return (
    <mesh
      ref={mesh}
    >
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshBasicMaterial
        attach="material-0"
        map={maps[0]}
      />
      <meshBasicMaterial
        attach="material-1"
        map={maps[1]}
      />
      <meshBasicMaterial
        attach="material-2"
        color="DarkRed"
      />
      <meshBasicMaterial
        attach="material-3"
        color="Dark Orange"
      />
      <meshBasicMaterial
        attach="material-4"
        map={maps[2]}
      />
      <meshBasicMaterial
        attach="material-5"
        map={maps[3]}
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