import React, { memo, useEffect, useRef } from "react";

const ThemeSwitch = memo(({ dark, setDark, size }) => {
  const ref = useRef(null);
  useEffect(() => {
    dark
      ? ref.current.classList.add("animate-rotate")
      : ref.current.classList.remove("animate-rotate");
  }, [dark]);

  return (
    <button
      ref={ref}
      className={`transition-transform duration-500 self-end hover:scale-110 will-change-transform ${
        size ? `text-[${size}px]` : ""
      }`}
      onClick={() => setDark(!dark)}
    >
      {dark ? <i className="bx bx-moon"></i> : <i className="bx bx-sun"></i>}
    </button>
  );
});

export default ThemeSwitch;
