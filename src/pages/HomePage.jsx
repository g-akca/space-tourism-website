import CircularButton from "../components/ui/CircularButton";

function HomePage() {
  return (
    <div className="text-center grow flex flex-col">
      <div className="flex flex-col gap-6">
        <p className="font-barlow-cond uppercase text-[16px] leading-auto tracking-[15%]">So, you want to travel to</p>
        <h1 className="font-bellefair uppercase text-[80px] leading-auto text-white">Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>

      <div className="grow flex justify-center items-center">
        <CircularButton className="w-36 aspect-square">
          Explore
        </CircularButton>
      </div>
    </div>
  )
}

export default HomePage;