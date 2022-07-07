import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}