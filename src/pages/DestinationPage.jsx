import data from "../data/data.json";

import { useState } from "react";

function DestinationPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const destination = data.destinations[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6 text-center">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">01</p>
        <p>Pick your destination</p>
      </div>
      
      <div className="flex flex-col gap-8 items-center">
        <img src={destination.images.png} alt={`${destination.name} image`} className="w-37.5 aspect-square my-7" />

        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-8 h-8 font-barlow-cond text-[14px] leading-auto tracking-[15%]">
            {data.destinations.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`flex items-start relative ${selectedIndex === index ? "after:absolute after:w-full after:h-0.75 after:bg-white after:left-0 after:bottom-0" : ""}`}
              >
                <p className="uppercase">{item.name}</p>
              </button>
            ))}
          </div>

          <div className="pb-6 border-b border-[#979797] flex flex-col gap-4">
            <h2 className="font-bellefair text-white uppercase text-[56px] leading-auto">{destination.name}</h2>
            <p className="text-blue-300 h-34">{destination.description}</p>
          </div>

          <div className="flex flex-col gap-6 uppercase">
            <div className="flex flex-col items-center gap-3">
              <p className="text-blue-300 text-[14px] leading-auto font-barlow-cond tracking-[2px]">Avg. Distance</p>
              <p className="text-white text-[28px] leading-auto font-bellefair">{destination.distance}</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-blue-300 text-[14px] leading-auto font-barlow-cond tracking-[2px]">Est. Travel Time</p>
              <p className="text-white text-[28px] leading-auto font-bellefair">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage;