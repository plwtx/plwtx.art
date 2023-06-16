import "../App.css";
// Do not forget that function name must have capital beginning letter
export default function Date() {
  {
    /* Write your back code here OmO */
  }
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  {
    /* Here it ends oh no */
  }
  return (
    <div className="">
      {/* Write your front code here OmO */}
      <h2>{showTime}</h2>
      {/* Here it ends oh no */}
    </div>
  );
}
