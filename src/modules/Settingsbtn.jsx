
export default function Settingsbtn(){
    return(
        <div className="w-[5.5rem] h-[3rem] border rounded-3xl gap-[2rem]  flex place-content-between">
            <div className="flex place-content-between">
            <svg className="w-[2rem] ml-[0.2rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><path fill="gray" d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg>
            <svg className="mt-[0.4rem] ml-[1.3rem]" viewBox="0 0 250 50" width="40" height="30">
                <rect width="100" height="11"></rect>
                <rect y="30" width="100" height="11"></rect>
                <rect y="60" width="100" height="11"></rect>
            </svg>
            </div>
            </div>
    );
}