import data from "../data/data.json";

import { useState } from "react";

function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const crew = data.crew[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6 text-center">
      <div className="flex justify-center tablet:justify-start gap-6 uppercase font-barlow-cond text-[16px] tablet:text-[20px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">02</p>
        <p>Meet your crew</p>
      </div>

      <div className="grow flex flex-col items-center justify-between gap-8">
        <div className="pt-10 flex flex-col gap-6 tablet:max-w-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 tablet:gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] tablet:text-[24px] leading-auto">{crew.role}</p>
              <p className="text-[24px] tablet:text-[40px] leading-auto">{crew.name}</p>
            </div>

            <p className="h-41 tablet:h-29.5">{crew.bio}</p>
          </div>

          <div className="flex justify-center gap-4">
            {data.crew.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`h-2.5 bg-white aspect-square rounded-full ${selectedIndex === index ? "" : "opacity-20"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-85 tablet:h-120 w-full flex justify-center">
          <img src={crew.images.png} alt={`Image of ${crew.name}`} className="tablet:h-140 tablet:absolute tablet:top-0 mask-[linear-gradient(to_bottom,black_85%,transparent)]" />
        </div>
      </div>
    </div>
  )
}

export default CrewPage;