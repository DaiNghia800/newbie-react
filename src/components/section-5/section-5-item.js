export const Section5Item = (props) => {
    return (
        <>
          <div className="text-center bg-[#F6F8FD] p-[38px] w-[49%] rounded-[16px]">
            <p className="font-[700] text-[20px] text-dark ">{props.desc}</p>
            <div className="mt-[37px]">
                <div className="text-center">
                    <img src={props.image} alt="Anh-Section-5" className="inline-block"/>
                </div>
                <div className="mt-[16px]">
                    <h3 className="font-[700] text-[18px] text-dark">{props.name}</h3>
                    <p className="font-[600] text-[12px] text-light">{props.position}</p>
                </div>
            </div>
          </div>
        </>
    )
}