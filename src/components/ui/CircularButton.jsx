function CircularButton({ children, className }) {
  return (
    <button className={`bg-white rounded-full cursor-pointer uppercase text-blue-900 font-bellefair text-[18px] leading-auto ${className}`}>
      {children}
    </button>
  )
}

export default CircularButton;