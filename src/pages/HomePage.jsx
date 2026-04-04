import CircularButton from "../components/ui/CircularButton";

function HomePage() {
  return (
    <div className="grow flex flex-col tablet:py-22 desktop:py-20 desktop:justify-end">
      <div className="text-center grow flex flex-col items-center desktop:w-277.5 desktop:text-start desktop:grow-0 desktop:grid desktop:grid-cols-2 desktop:gap-7.5">
        <div className="flex flex-col gap-6 tablet:w-lg desktop:w-auto">
          <p className="font-barlow-cond uppercase text-[16px] tablet:text-[28px] leading-auto tracking-[15%] tablet:tracking-[4px]">So, you want to travel to</p>
          <h1 className="font-bellefair uppercase text-[80px] tablet:text-[144px] leading-auto text-white">Space</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className="grow flex justify-center items-center py-8 desktop:justify-self-end">
          <CircularButton className="w-36 tablet:w-68 aspect-square">
            Explore
          </CircularButton>
        </div>
      </div>
    </div>
  )
}

export default HomePage;