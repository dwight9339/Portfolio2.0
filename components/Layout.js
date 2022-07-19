import Header from "./Header";
import { Canvas, useFrame } from "@react-three/fiber";
import useThreejsBackground from "hooks/useThreejsBackground";
import { 
  layout, 
  page
} from "../styles/layout.module.scss";

const Layout = ({ children }) => {
  useThreejsBackground();

  return (
    <div className={layout}>
      <Header />
      <div className={page}>
        {children}
      </div>
    </div>
  );
}

export default Layout;