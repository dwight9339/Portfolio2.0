import dynamic from "next/dynamic";
import { useMemo } from "react";
import { WaterfallSlideshow } from "utils/p5Slideshow";
import { Suspense } from "react";
import Image from "next/image";

const Sketch = dynamic(async () => {
  const mod = await import ("react-p5");
  return mod.default;
}, {
  ssr: false
});

const FallbackImage = ({ imageUrl, width, aspectRatio }) => {
  const height = width * aspectRatio;

  return (
    <Image
      src={imageUrl}
      width={width}
      height={height}
    />
  )
}

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
      <Suspense
        fallback={<FallbackImage 
          imageUrl={imageUrls[0]}
          width={myWidth}
          aspectRatio={aspectRatio}
        />}
      >
        <Sketch
          preload={preload}
          setup={setup}
          draw={draw}
        />
      </Suspense>
    );
  }, [myWidth]);

  return (
    <>
      {sketch}
    </>
  );
}

export default SlideShow;