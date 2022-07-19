import { createRoot, events } from "@react-three/fiber";
import { useEffect } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const useThreejsBackground = () => {
  const mountCanvas = () => {
    const size = { width: window.innerWidth, height: window.innerHeight }

    // Create root with a size, events
    const root = createRoot(document.querySelector('canvas'), {
      events,
      size,
    })

    // Render JSX
    root.render(
      <mesh>
        <coneGeometry args={[2, 3, 6]} />
        <meshStandardMaterial
          wireframe
        />
      </mesh>
    );

    // Can also tweak root root options after creation:
    root.configure({ size })
  }

  useEffect(() => {
    if (typeof window !== "undefined") mountCanvas();
  }, [window]);

  return null;
}

export default useThreejsBackground;