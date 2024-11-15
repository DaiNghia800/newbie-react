import logo from"../../assets/images/Horizon UI Logo.svg"
export const Logo = () => {
    return (
        <>
          <div className='inner-image'>
            <a href="/">
             <img src={logo} alt="Logo" className="h-[34px] w-auto"/>
            </a>
          </div>  
        </>
    )
}