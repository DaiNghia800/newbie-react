export const Section2Item = (props) => {
  const { number, title, desc } = props;

  return (
    <>
      <div className="flex items-start">
        <div className="bg-primary w-[48px] h-[48px] rounded-full font-[700] text-[16px] text-white inline-flex items-center justify-center">
          {number}
        </div>
        <div className="flex-1 ml-[18px]">
          <h3 className="text-dark font-[700] text-[16px]">
            {title}
          </h3>
          <p className="text-light font-[500] text-[16px]">
            {desc}
          </p>
        </div>
      </div>
    </>
  )
}
