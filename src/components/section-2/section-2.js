import { BoxHead } from "../boxhead/boxhead"
import { Section2Item } from "./section-2-item"

export const Section2 = () => {
  return (
    <>
      <div className="py-[120px]">
        <div className="container mx-auto">
          {/* Box Head */}
          <BoxHead
            title="How Horizon works?"
            desc="Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum."
            className="text-center"
          />

          {/* List */}
          <div className="grid grid-cols-3 gap-[40px]">
            {/* Item */}
            <Section2Item
              number={1}
              title="Create your Account"
              desc="Condimentum vit pellemsque habitant morbi at molestie."
            />
            <Section2Item
              number={2}
              title="Setup your Account"
              desc="Condimentum vit pellemsque habitant morbi at molestie."
            />
            <Section2Item
              number={3}
              title="Start creating with Horizon"
              desc="Condimentum vit pellemsque habitant morbi at molestie."
            />
          </div>
        </div>
      </div>
    </>
  )
}
