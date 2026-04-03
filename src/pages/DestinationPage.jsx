import moonImg from "/assets/destination/image-moon.png";

function DestinationPage() {
  return (
    <div className="grow flex flex-col gap-6 text-center">
      <div className="flex gap-6">
        <p>01</p>
        <p>Pick your destination</p>
      </div>
      
      <div className="flex flex-col gap-8 items-center">
        <img src={moonImg} alt="Moon image" className="w-37.5 aspect-square my-7" />

        <div className="flex flex-col gap-6">
          <div className="flex gap-8 h-8">

          </div>

          <div className="pb-6 border-b border-[#979797] flex flex-col gap-4">

          </div>

          <div className="flex flex-col gap-6">

          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationPage;