
export default function  Searchbar(){ 
    return(
      <>
        <div className="w-[23rem] h-[3rem] border rounded-3xl  flex">
          <div className="  w-[9.5rem] h-[2rem] mt-[0.4rem] ml-[0.4rem] ">
            <button className="flex items-center">
              <div className="w-[2rem] h-[2rem] border rounded-full bg-[#FF385C]">
                <div className="mt-[20%] ml-[20%]">
                  <svg  width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
                </div>
              </div>
              <div className="text-gray-500  ml-[0.8rem]">הוספת אורחים</div>
            </button>
          </div>
          <div className="flex ">
            <div className=" h-[2rem] mt-[0.3rem] ml-[1rem]">
              <button  className="mt-[6.5%]">
              <div className="text-black font-semibold border-r-[0.1rem] border-l-[0.1rem] px-[1rem]"> כל שבוע</div>
              </button>
            </div>
            <div className=" h-[2rem] mt-[0.4rem] ml-[1rem]">
              <button  className="mt-[6.5%]">
              <div className="text-black font-semibold"> כל מקום</div>
              </button>
            </div>
          </div>
        </div>
      </>
    );

}


//     <div className="w-[20rem] h-[3rem] border rounded-3xl bg-gray-300 items-center   ">
//     <div>
//   <button className="flex items-center  bg-black">
//   <div className="w-[2rem] h-[2rem] border rounded-full bg-[#FF385C] "> 
//     <div className="mt-[20%] ml-[20%]">
//         <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path></svg>
//     </div>
//    </div>
//             <div className="text-gray-500 ml-[15%] ">הוספת אורחים</div>
//     </button>
// </div>
//     <div className="place-content-between flex">
//     <div className="bg-yellow-100" >
//         <button > כל מקום</button>
//     </div>
//     <div className="bg-green-200">
//         <button> כל שבוע</button>
//     </div>
//     </div>
//   </div>
