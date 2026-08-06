export default function Mascot({
  src,
  alt = "",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      className={`pointer-events-none select-none object-contain drop-shadow-[0_12px_26px_rgba(33,27,84,0.18)] motion-safe:animate-[mascot-float_5s_ease-in-out_infinite] ${className}`}
    />
  );
}
