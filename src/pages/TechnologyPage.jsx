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
        
        <div className="flex flex-col gap-10">
          <div>

          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p>The terminology...</p>
              <h2>Launch Vehicle</h2>
            </div>

            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyPage;