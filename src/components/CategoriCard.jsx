import PropTypes from "prop-types"

function CategoriCard({ img, title }) {
  return (
    <>
      <div className=" w-fit h-[4rem] flex flex-col opacity-70 hover:opacity-100 hover:border-b-2 hover:cursor-pointer">
        <div className="grid place-items-center">
          <div className="">
            <img className="" width="24" height="24" src={img} alt="" />
          </div>
          <div className="text-sm mt-2 mb-3 inline " dir="rtl">
            {title}
          </div>
        </div>
      </div>
    </>
  )
}

CategoriCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CategoriCard
