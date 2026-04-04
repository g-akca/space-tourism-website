import douglasImg from "/assets/crew/image-douglas-hurley.png";

function CrewPage() {
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
              <p className="opacity-50 text-[18px]">Commander</p>
              <p className="text-[24px]">Douglas Hurley</p>
            </div>

            <p className="h-41">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>

          <div className="flex justify-center gap-4">
            <button type="button" className="h-2.5 aspect-square rounded-full bg-white" />
            <button type="button" className="h-2.5 aspect-square rounded-full bg-white opacity-20" />
            <button type="button" className="h-2.5 aspect-square rounded-full bg-white opacity-20" />
            <button type="button" className="h-2.5 aspect-square rounded-full bg-white opacity-20" />
          </div>
        </div>

        <img src={douglasImg} alt="Image of Douglas Hurley" className="h-85 mask-[linear-gradient(to_bottom,black_85%,transparent)]" />
      </div>
    </div>
  )
}

export default CrewPage;