const SvgScroll = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    viewBox="0 0 247 390"
  >
    <path
      d="M123.359 79.775v72.843"
      className="animate-scroll stroke-text-clr"
      style={{
        fill: "none",
        strokeWidth: 20,
      }}
    />
    <path
      className="stroke-text-clr"
      d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10S10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359s113.358-50.794 113.358-113.359z"
      style={{
        fill: "none",
        strokeWidth: 20,
      }}
    />
  </svg>
);
export default SvgScroll;
