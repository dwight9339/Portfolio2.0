import { createRoot, events } from "@react-three/fiber";

let root

const handleResize = () => {
  const size = { width: window.innerWidth, height: window.innerHeight }

  // Create root with a size, events
  root = createRoot(document.querySelector('canvas'), {
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

  // Or to unmount and dispose of memory:
  root.unmount()
}
handleResize()

if (typeof window !== "undefined") window.addEventListener('resize', handleResize);

// to unmount
root.unmount()