import data from "../data/data.json";

import { useState } from "react";
import { motion } from "framer-motion";

function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const crew = data.crew[selectedIndex];

  return (
    <motion.div 
      className="grow flex flex-col gap-6 text-center desktop:text-start desktop:w-277.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-center tablet:justify-start gap-6 uppercase font-barlow-cond text-[16px] tablet:text-[20px] desktop:text-[28px] leading-auto tracking-[15%] desktop:tracking-[4px] text-white">
        <p className="font-bold opacity-25 desktop:tracking-[4.72px]">02</p>
        <p>Meet your crew</p>
      </div>

      <div className="grow flex flex-col desktop:grid desktop:grid-cols-2 items-center justify-between gap-8">
        <div className="pt-10 flex flex-col gap-6 desktop:gap-10 tablet:max-w-lg desktop:max-w-none desktop:h-full desktop:pt-0">
          <div className="flex flex-col gap-6 desktop:grow desktop:justify-center">
            <div className="flex flex-col gap-2 tablet:gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] tablet:text-[24px] desktop:text-[32px] leading-auto">{crew.role}</p>
              <h2 className="text-[24px] tablet:text-[40px] desktop:text-[56px] leading-auto">{crew.name}</h2>
            </div>

            <p className="h-41 tablet:h-29.5 desktop:h-auto">{crew.bio}</p>
          </div>

          <div className="flex justify-center desktop:justify-start gap-4 desktop:gap-10 desktop:pb-12">
            {data.crew.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`h-2.5 desktop:h-3.75 bg-white aspect-square rounded-full cursor-pointer transition-all ${selectedIndex === index ? "" : "opacity-20 hover:opacity-50"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-85 tablet:h-120 desktop:h-auto w-full flex justify-center desktop:self-start">
          <img src={crew.images.png} alt={`Image of ${crew.name}`} className="tablet:h-140 tablet:absolute tablet:top-0 mask-[linear-gradient(to_bottom,black_85%,transparent)] desktop:static desktop:h-150" />
        </div>
      </div>
    </motion.div>
  )
}

export default CrewPage;