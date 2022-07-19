import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { WaterfallSlideshow } from "utils/p5Slideshow";

const Sketch = dynamic(async () => {
  const mod = await import ("react-p5");
  return mod.default;
}, {
  ssr: false
});

const SlideShow = ({ imageUrls, width }) => {
  const myWidth = width * 0.95;
  const aspectRatio = 9/16;
  const [images, setImages] = useState([]);
  let waterfall;

  useEffect(() => {
    console.log(`images: ${images}`);
  }, [images]);

  const preload = (p5) => {
    let imgs = [];

    imageUrls.forEach((url) => {
      p5.loadImage(url, (img) => {
        img.resize(myWidth, 0);
        imgs.push(img);
      });
    });

    setImages(() => imgs);
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
}

export default SlideShow;