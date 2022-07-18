const SlideShow = ({ imageUrls }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrls[0]})`,
        width: "600px",
        height: "338px"
      }}
    ></div>
  )
}

export default SlideShow;