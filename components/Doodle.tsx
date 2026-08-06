export default function Doodle({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none object-contain ${className}`}
    />
  );
}
