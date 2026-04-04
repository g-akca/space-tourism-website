import moonImg from "/assets/destination/image-moon.png";

function DestinationPage() {
  return (
    <div className="grow flex flex-col gap-6 text-center">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">01</p>
        <p>Pick your destination</p>
      </div>
      
      <div className="flex flex-col gap-8 items-center">
        <img src={moonImg} alt="Moon image" className="w-37.5 aspect-square my-7" />

        <div className="flex flex-col gap-6">
          <div className="flex justify-center gap-8 h-8 font-barlow-cond text-[14px] leading-auto tracking-[15%]">
            <button type="button" className="flex items-start relative after:absolute after:w-full after:h-0.75 after:bg-white after:-left-px after:bottom-0">
              <p className="uppercase">Moon</p>
            </button>
            <button type="button" className="flex items-start relative">
              <p className="uppercase">Mars</p>
            </button>
            <button type="button" className="flex items-start relative">
              <p className="uppercase">Europa</p>
            </button>
            <button type="button" className="flex items-start relative">
              <p className="uppercase">Titan</p>
            </button>
          </div>

          <div className="pb-6 border-b border-[#979797] flex flex-col gap-4">
            <h2 className="font-bellefair text-white uppercase text-[56px] leading-auto">Moon</h2>
            <p className="text-blue-300"> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          </div>

          <div className="flex flex-col gap-6 uppercase">
            <div className="flex flex-col items-center gap-3">
              <p className="text-blue-300 text-[14px] leading-auto font-barlow-cond tracking-[2px]">Avg. Distance</p>
              <p className="text-white text-[28px] leading-auto font-bellefair">384,400 km</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <p className="text-blue-300 text-[14px] leading-auto font-barlow-cond tracking-[2px]">Est. Travel Time</p>
              <p className="text-white text-[28px] leading-auto font-bellefair">3 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage;