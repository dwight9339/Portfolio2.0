import {
  container
} from "styles/gallery.module.scss";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";
import { Vector2 } from "three";

const GalleryPage = () => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    const points = [
      new Vector2(0, -3), 
      new Vector2(2.5, -0.3),
      new Vector2(3.2, 1.4),
      new Vector2(0.2, 3)
    ];

    setFloaterGeometry(
      <latheGeometry args={[points, 20]} />
    );
  }, [setFloaterGeometry]);

  return (
    <div className={container}>
      <div>
        <h1>Coming soon</h1>
      </div>
    </div>
  )
}

export default GalleryPage;