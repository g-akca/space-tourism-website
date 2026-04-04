import data from "../data/data.json";

import { useState } from "react";

function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const crew = data.crew[selectedIndex];

  return (
    <div className="grow flex flex-col gap-6 text-center">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">02</p>
        <p>Meet your crew</p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="pt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px]">{crew.role}</p>
              <p className="text-[24px]">{crew.name}</p>
            </div>

            <p className="h-41">{crew.bio}</p>
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

        <img src={crew.images.png} alt={`Image of ${crew.name}`} className="h-85 mask-[linear-gradient(to_bottom,black_85%,transparent)]" />
      </div>
    </div>
  )
}

export default CrewPage;