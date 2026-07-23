function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#102038]
        border
        border-slate-700
        rounded-3xl
        p-6
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;