import { useState } from "react";
import "./scrolltop.css";

export default function ScrollTop() {
  // window.addEventListener('scroll', function() {
  //     if (this.scrollY > 560) setShowScrollup(true)
  //     else setShowScrollup(false)
  // })

  const [showScrollup, setShowScrollup] = useState(false);
  return (
    <a
      href="#home"
      className={showScrollup ? "scrollup show-scroll" : "scrollup"}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
