import { ButtonGetStarted } from "../buttons/buttonGetStarted"
import { ButtonTryDemo } from "../buttons/buttonTryDemo"

export const Section6 = () => {
    return (
        <>
          <div className="flex flex-wrap justify-between items-center container mx-auto py-[136px]">
            <div>
                <h3 className="font-[800] text-[36px] text-dark">Save time with Horizon</h3>
                <span className="font-[600] text-[36px] text-dark">Turn your visitors into clients</span>
            </div>
            <div>
                <div className="flex flex-wrap justify-between">
                    <ButtonTryDemo/>
                    <ButtonGetStarted/>
                </div>
            </div>
          </div>
        </>
    )
}