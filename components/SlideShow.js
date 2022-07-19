import dynamic from "next/dynamic";
import { useMemo } from "react";
import { WaterfallSlideshow } from "utils/p5Slideshow";

const Sketch = dynamic(async () => {
  const mod = await import ("react-p5");
  return mod.default;
}, {
  ssr: false
});

const SlideShow = ({ imageUrls, width }) => {
  const aspectRatio = 9/16;
  const myWidth = width * 0.9;

  const sketch = useMemo(() => {
    if (!myWidth) return null;

    let images = [];
    let waterfall;

    const preload = (p5) => {
      imageUrls.forEach((url) => {
        p5.loadImage(url, (img) => {
          img.resize(myWidth, 0);
          images.push(img);
        });
      });
    }
  
    const setup = (p5, canvasParentRef) => {
      p5
        .createCanvas(myWidth, myWidth * aspectRatio)
        .parent(canvasParentRef); 
  
      waterfall = new WaterfallSlideshow(images, p5.height, 0.5);
    };
  
    const draw = (p5) => {
      waterfall.draw(p5);
    };

    return (
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
      />
    );
  }, [myWidth]);

  return (
    <>
      {sketch}
    </>
  );
}

export default SlideShow;