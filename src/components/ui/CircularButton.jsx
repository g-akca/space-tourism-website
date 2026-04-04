function CircularButton({ children, className }) {
  return (
    <button 
    className={`
        bg-white rounded-full cursor-pointer uppercase text-blue-900 hover:text-blue-900/50 
        font-bellefair text-[18px] tablet:text-[32px] leading-auto 
        outline outline-transparent
        hover:outline-60 hover:outline-[rgba(255,255,255,0.08)]
        transition-all duration-300 ease-out
        transform hover:scale-105 active:scale-95 ${className}
      `}
    >
      {children}
    </button>
  )
}

export default CircularButton;