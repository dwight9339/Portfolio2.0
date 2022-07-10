export default ({ slides }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${slides[0]})`,
        width: "600px",
        height: "338px"
      }}
    ></div>
  )
}