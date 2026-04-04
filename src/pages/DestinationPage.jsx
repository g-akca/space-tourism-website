import data from "../data/data.json";

import { useState } from "react";

function DestinationPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const destination = data.destinations[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6 text-center desktop:text-start desktop:w-277.5">
      <div className="flex justify-center tablet:justify-start gap-6 uppercase font-barlow-cond text-[16px] tablet:text-[20px] desktop:text-[28px] leading-auto tracking-[15%] desktop:tracking-[4px] text-white">
        <p className="font-bold opacity-25 desktop:tracking-[4.72px]">01</p>
        <p>Pick your destination</p>
      </div>
      
      <div className="grow flex flex-col justify-center items-center desktop:grid desktop:grid-cols-2 desktop:justify-items-center gap-8">
        <img src={destination.images.png} alt={`${destination.name} image`} className="w-37.5 tablet:w-75 desktop:w-120 aspect-square my-7" />

        <div className="flex flex-col gap-6 desktop:gap-10 tablet:max-w-128.5 desktop:max-w-111.25">
          <div className="flex justify-center desktop:justify-start gap-8 h-8 font-barlow-cond text-[14px] tablet:text-[16px] leading-auto tracking-[15%] tablet:tracking-[2px]">
            {data.destinations.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`flex items-start relative ${selectedIndex === index ? "text-white after:absolute after:w-full after:h-0.75 after:bg-white after:left-0 after:bottom-0" : ""}`}
              >
                <p className="uppercase">{item.name}</p>
              </button>
            ))}
          </div>

          <div className="pb-6 border-b border-[#979797] flex flex-col gap-4">
            <h2 className="font-bellefair text-white uppercase text-[56px] tablet:text-[80px] desktop:text-[96px] leading-auto">{destination.name}</h2>
            <p className="text-blue-300 tablet:text-[16px] desktop:text-[18px]">{destination.description}</p>
          </div>

          <div className="flex flex-col tablet:grid tablet:grid-cols-2 tablet:justify-items-center desktop:justify-items-start gap-6 uppercase">
            <div className="flex flex-col gap-3">
              <p className="text-blue-300 text-[14px] leading-auto font-barlow-cond tracking-[2px]">Avg. Distance</p>
              <p className="text-white text-[28px] leading-auto font-bellefair">{destination.distance}</p>
            </div>

            <div className="flex flex-col gap-3">
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