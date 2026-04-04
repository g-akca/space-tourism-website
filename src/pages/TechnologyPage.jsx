import data from "../data/data.json";

import { useState } from "react";

function TechnologyPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tech = data.technology[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">03</p>
        <p>Space Launch 101</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="h-80.5 pt-16">
          <img src={tech.images.landscape} alt={tech.name} className="absolute w-screen h-64.5 left-1/2 -translate-x-1/2 object-cover" />
        </div>
        
        <div className="flex flex-col gap-10 text-center">
          <div className="flex justify-center gap-4 font-bellefair text-[18px] leading-auto">
            {data.technology.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`h-10 aspect-square rounded-full ${selectedIndex === index ? "bg-white text-blue-900" : "text-white border border-[rgba(255,255,255,0.25)]"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] leading-auto">The terminology...</p>
              <h2 className="text-[24px] leading-auto">{tech.name}</h2>
            </div>

            <p>{tech.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;