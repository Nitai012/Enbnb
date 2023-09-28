import Navbar from "./Navbar"
import Categories from "./Categories"
function BigNav() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
        <Categories />
      </div>
    </>
  )
}
export default BigNav
