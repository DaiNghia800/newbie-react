import { BoxHead } from "../boxhead/boxhead";
import { ItemSection4 } from "./section-4-item";
import BgSection4 from "../../assets/images/bg-section-4.png";
import ThunderSection4 from "../../assets/images/thunder-section-4.png";
export const Section4 = () => {
    return (
        <>
          <div className="p-[120px]">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-[47%]">
                    <BoxHead
                      title="Boost your workflow with Horizon"
                      desc="Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta."
                      className="text-left"
                    />
                    <div className="grid grid-cols-2 gap-[40px]">
                        <ItemSection4
                         number="340+"
                         title="Successful Projects"
                         desc="Urna duis convallis convallis tellus interdum velit laoreet."
                        />
                        <ItemSection4
                         number="$10m"
                         title="Annual Percentage Rate"
                         desc="Urna duis convallis convallis tellus interdum velit laoreet."
                        />
                        <ItemSection4
                         number="2.8k+"
                         title="Clients Worldwide"
                         desc="Urna duis convallis convallis tellus interdum velit laoreet."
                        />
                        <ItemSection4
                         number="7000+"
                         title="Daily Visits"
                         desc="Urna duis convallis convallis tellus interdum velit laoreet."
                        />
                    </div>
                </div>
                <div className="">
                    <div className="relative rounded-[16px] overflow-hidden">
                        <img src={BgSection4} alt="Bg-Section4"></img>
                        <img src={ThunderSection4} alt="Thunder-Section4" className="absolute top-0"></img>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}