import Header from "./Header";
import { layout } from "../styles/layout.module.scss";

export default ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <div
        id="page"
      >
        {children}
      </div>
    </div>
  )
}