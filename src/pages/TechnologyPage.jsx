import data from "../data/data.json";

import { useState } from "react";

function TechnologyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tech = data.technology[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6 desktop:w-277.5">
      <div className="flex justify-center tablet:justify-start gap-6 uppercase font-barlow-cond text-[16px] tablet:text-[20px] desktop:text-[28px] leading-auto tracking-[15%] desktop:tracking-[4px] text-white">
        <p className="font-bold opacity-25 desktop:tracking-[4.72px]">03</p>
        <p>Space Launch 101</p>
      </div>

      <div className="grow flex flex-col gap-8 desktop:flex-row desktop:items-center desktop:justify-between">
        <div className="h-80.5 tablet:h-105.25 desktop:h-auto pt-16 desktop:p-0 desktop:w-152 desktop:absolute desktop:right-0 desktop:top-1/2 desktop:-translate-y-11/30">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={tech.images.portrait}
            />
            <img
              src={tech.images.landscape}
              alt={tech.name}
              className="absolute w-screen h-64.5 tablet:h-89.25 left-1/2 -translate-x-1/2 object-cover desktop:h-150 desktop:static desktop:translate-x-0"
            />
          </picture>
        </div>
        
        <div className="flex flex-col desktop:flex-row gap-10 desktop:gap-16 text-center desktop:text-start items-center desktop:w-158.75">
          <div className="flex desktop:flex-col justify-center gap-4 desktop:gap-8 font-bellefair text-[18px] tablet:text-[24px] desktop:text-[32px] leading-auto">
            {data.technology.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`h-10 tablet:h-14 desktop:h-20 aspect-square rounded-full cursor-pointer transition-colors ${selectedIndex === index ? "bg-white text-blue-900" : "text-white border border-white/25 hover:border-white"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 desktop:gap-6 tablet:max-w-lg desktop:max-w-none">
            <div className="flex flex-col gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] tablet:text-[24px] desktop:text-[32px] leading-auto">The terminology...</p>
              <h2 className="text-[24px] tablet:text-[40px] desktop:text-[56px] leading-auto">{tech.name}</h2>
            </div>

            <p>{tech.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;