import launchImg from "/assets/technology/image-launch-vehicle-landscape.jpg";

function TechnologyPage() {
  return (
    <div className="grow flex flex-col gap-6">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">03</p>
        <p>Space Launch 101</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="h-80.5 pt-16">
          <img src={launchImg} alt="Launch vehicle" className="absolute w-screen h-64.5 left-1/2 -translate-x-1/2 object-cover" />
        </div>
        
        <div className="flex flex-col gap-10 text-center">
          <div className="flex justify-center gap-4 font-bellefair text-[18px] leading-auto">
            <button type="button" className="h-10 aspect-square rounded-full bg-white text-blue-900">
              1
            </button>

            <button type="button" className="h-10 aspect-square rounded-full text-white border border-[rgba(255,255,255,0.25)]">
              2
            </button>

            <button type="button" className="h-10 aspect-square rounded-full text-white border border-[rgba(255,255,255,0.25)]">
              3
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 uppercase font-bellefair text-white">
              <p className="opacity-50 text-[18px] leading-auto">The terminology...</p>
              <h2 className="text-[24px] leading-auto">Launch Vehicle</h2>
            </div>

            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;