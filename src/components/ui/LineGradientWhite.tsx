function LineGradientWhite({
  top = "-0.05rem",
  height = "0.5rem",
  opacity = 1,
}: {
  top?: string;
  height?: string;
  opacity?: string|number;
}) {
  return (
    <div
      className={`w-2/3  animate-fade-in-left animate-delay-300  bg-linear-to-l from-transparent via-white/70 to-transparent absolute left-1/2  -translate-x-1/2 `}
      style={{
        height: height,
        opacity: opacity,
        top: top,
      }}
    ></div>
  );
}

export default LineGradientWhite;
