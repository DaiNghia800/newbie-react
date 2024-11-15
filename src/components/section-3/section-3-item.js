export const Section3Item = (props) => {
    console.log(props);
    return (
        <>
        <div className="">
            <div className="flex items-center justify-center py-[22px]">
                <div className="w-[64px] h-[64px] rounded-[16px] bg-primary text-center flex items-center justify-center text-[#FFFFFF] text-[20px]">{<props.icon/>}</div>
            </div>
            <div className="">
                <h3 className="text-[24px] font-[800] text-dark text-center">{props.title}</h3>
                <p className="text-light text-center">{props.desc}</p>
            </div>
        </div>
        </>
    )
}