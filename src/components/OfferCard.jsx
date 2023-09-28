import PropTypes from "prop-types"

function OfferCard({ img, title, rating = "", dis, date, price }) {
  return (
    <>
      <div className="border border-transparent flex flex-col w-[17rem] h-[22rem] hover:cursor-pointer relative">
        <div className="border border-transparent rounded-2xl w-[100%] h-[74.5%]">
          <img
            className="border rounded-xl object-cover w-[100%] h-[100%]"
            src={img}
            alt=""
          />
        </div>
        <div className="absolute top-2 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "rgba(0, 0, 0, 0.3)",
              // border: "solid 1px white",
              height: "24px",
              width: "24px",
              stroke: "transparent",
              overflow: "visible",
            }}
          >
            <path
              style={{ border: "solid 1px white" }}
              d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col text-right mr-2" dir="rtl">
          <div className="flex place-content-between">
            <div className="font-bold">{title}</div>
            {rating != "" ? (
              <div className="flex ml-2" dir="ltr">
                {rating}
                <svg
                  className="mt-1"
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
                </svg>
              </div>
            ) : null}
          </div>
          <div className="text-gray-500">{dis}</div>
          <div className="text-gray-500">{date}</div>
          <div>
            <span className="font-semibold">₪{price}</span> ללילה
          </div>
        </div>
      </div>
    </>
  )
}

OfferCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dis: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.string,
}

export default OfferCard
