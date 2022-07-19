import Header from "./Header";
import { 
  layout, 
  page,
  threeCanvas
} from "../styles/layout.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cone = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.z += 0.003;
  });

  return (
    <mesh
      ref={mesh}
    >
      <coneGeometry args={[2, 3, 6]} />
      <meshStandardMaterial
        wireframe
        color="#aef900"
      />
    </mesh>
  );
}

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <div className={page}>
        {children}
      </div>
      <div className={threeCanvas}>
        <Canvas>
          <ambientLight />
          <Cone />
        </Canvas>
      </div>
    </div>
  );
}

export default Layout;