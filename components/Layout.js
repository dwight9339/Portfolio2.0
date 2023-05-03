import Header from "./Header";
import { 
  layout, 
  page,
  threeCanvas
} from "../styles/layout.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, createContext } from "react";
import Head from "next/head";

export const ThreejsContext = createContext();

const Floater = ({ geometry }) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh
      ref={mesh}
    >
      {geometry}
      <meshStandardMaterial
        wireframe
        color="#aef900"
      />
    </mesh>
  );
}

const Layout = ({ children }) => {
  const [floaterGeometry, updateFloaterGeometry] = useState(
    <coneGeometry args={[2, 3, 6]} />
  );

  return (
    <div className={layout}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <title>Portfolio - David White</title>
      </Head>
      <Header />
      <ThreejsContext.Provider value={{
        setFloaterGeometry: (geometry) => {
          updateFloaterGeometry(() => geometry);
        }
      }}>
        <div className={page}>
          {children}
        </div>
      </ThreejsContext.Provider>
      <div className={threeCanvas}>
        <Canvas>
          <ambientLight />
          <Floater geometry={floaterGeometry} />
        </Canvas>
      </div>
    </div>
  );
}

export default Layout;