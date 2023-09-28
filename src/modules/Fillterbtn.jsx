import filterimg from "../assets/filter.png"
function Fillterbtn(){
    return(
        <>
        <div className="w-[7rem] h-[3rem] border rounded-xl flex hover:cursor-pointer">
            <div className="grid place-items-center ml-3" dir="rtl">מסננים</div>
            <div className="grid place-items-center">
                <img className="ml-2" height="21" width="21" src={filterimg} alt="" />
            </div>
        </div>
        </>
    );
}
export default Fillterbtn;