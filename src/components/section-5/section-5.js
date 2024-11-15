import { BoxHead } from "../boxhead/boxhead";
import { Section5Item } from "./section-5-item";
import  Ellipe   from "../../assets/images/Ellipse 1.png";
export const Section5 = () => {
    return (
        <>
            <div className="container mx-auto pt-[120px] pb-[120px]">
               <div className="flex justify-center">
                <BoxHead 
                    title="Customer Testimonials"
                    desc="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    className="text-center max-w-2xl"
                    />
               </div>
                <div className="flex flex-wrap justify-between">
                    <Section5Item
                     desc="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                     name="Tiana Schleifer"
                     image={Ellipe}
                     position="CEO & Founder"
                    />
                    <Section5Item
                     desc="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                     name="Tiana Schleifer"
                     image={Ellipe}
                     position="CEO & Founder"
                    />
                </div>
            </div>
        </>
    )
}