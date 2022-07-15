import Header from "./Header";
import { layout, page } from "../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <div className={page}>
        {children}
      </div>
    </div>
  )
}

export default Layout;