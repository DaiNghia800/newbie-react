export const ItemSection4 = (props) => {
    return (
        <>
          <div>
            <h2 className="text-[36px] font-[800] text-dark">{props.number}</h2>
            <h3 className="text-[16px] font-[700] text-dark">{props.title}</h3>
            <p className="text-[16px] font-[500] text-light">{props.desc}</p>
          </div>
        </>
    )
}