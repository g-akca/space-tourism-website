import CircularButton from "../components/ui/CircularButton";

function HomePage() {
  return (
    <div className="text-center grow flex flex-col items-center tablet:py-22">
      <div className="flex flex-col gap-6 tablet:w-lg">
        <p className="font-barlow-cond uppercase text-[16px] tablet:text-[28px] leading-auto tracking-[15%] tablet:tracking-[4px]">So, you want to travel to</p>
        <h1 className="font-bellefair uppercase text-[80px] tablet:text-[144px] leading-auto text-white">Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>

      <div className="grow flex justify-center items-center">
        <CircularButton className="w-36 tablet:w-68 aspect-square">
          Explore
        </CircularButton>
      </div>
    </div>
  )
}

export default HomePage;