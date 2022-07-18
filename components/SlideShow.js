import dynamic from "next/dynamic";

const Sketch = dynamic(async () => {
  const mod = await import ("react-p5");
  return mod.default;
}, {
  ssr: false
});

const SlideShow = ({ imageUrls }) => {
  const setup = (p5, canvasParentRef) => {
		p5.createCanvas(200, 200).parent(canvasParentRef);
	};

  const draw = (p5) => {
    p5.background(0);
    p5.square(100, 100, 50);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
}

export default SlideShow;