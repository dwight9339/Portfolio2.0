import Header from "./Header";
import { layout, page } from "../styles/layout.module.scss";

export default ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <div className={page}>
        {children}
      </div>
    </div>
  )
}