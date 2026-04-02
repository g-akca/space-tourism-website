function CircularButton({ children, className }) {
  return (
    <button className={`${className}`}>
      {children}
    </button>
  )
}

export default CircularButton;