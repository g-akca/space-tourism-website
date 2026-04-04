import data from "../data/data.json";

import { useState } from "react";

function TechnologyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tech = data.technology[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6">
      <div className="flex justify-center tablet:justify-start gap-6 uppercase font-barlow-cond text-[16px] tablet:text-[20px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">03</p>
        <p>Space Launch 101</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="h-80.5 tablet:h-105.25 pt-16">
          <img src={tech.images.landscape} alt={tech.name} className="absolute w-screen h-64.5 tablet:h-89.25 left-1/2 -translate-x-1/2 object-cover" />
        </div>
        
        <div className="flex flex-col gap-10 text-center items-center">
          <div className="flex justify-center gap-4 font-bellefair text-[18px] tablet:text-[24px] leading-auto">
            {data.technology.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`h-10 tablet:h-14 aspect-square rounded-full ${selectedIndex === index ? "bg-white text-blue-900" : "text-white border border-[rgba(255,255,255,0.25)]"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 tablet:w-lg">
            <div className="flex flex-col gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] tablet:text-[24px] leading-auto">The terminology...</p>
              <h2 className="text-[24px] tablet:text-[40px] leading-auto">{tech.name}</h2>
            </div>

            <p>{tech.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;