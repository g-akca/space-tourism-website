import launchImg from "/assets/technology/image-launch-vehicle-landscape.jpg";

function TechnologyPage() {
  return (
    <div className="grow flex flex-col gap-6">
      <div className="flex justify-center gap-6 uppercase font-barlow-cond text-[16px] leading-auto tracking-[15%] text-white">
        <p className="font-bold opacity-25">03</p>
        <p>Space Launch 101</p>
      </div>

      <div className="flex flex-col gap-8 pt-16">
        <img src={launchImg} alt="Launch vehicle" className="absolute w-screen h-64.5 left-1/2 -translate-x-1/2 object-cover" />
        
        <div className="flex flex-col gap-10">
          <div>

          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p></p>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;