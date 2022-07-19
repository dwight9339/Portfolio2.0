import {
  container
} from "styles/gallery.module.scss";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";

const GalleryPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <capsuleGeometry args={[2, 3, 16, 16]} />
    );
  }, []);

  return (
    <div className={container}>
      <div>
        <h1>Coming soon</h1>
      </div>
    </div>
  )
}

export default GalleryPage;