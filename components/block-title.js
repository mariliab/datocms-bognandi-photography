export default function BlockTitle({ title = "", subtitle }) {
  return (
    <div className="mb-8">
      <h2
        id={title.toLowerCase()}
        className="text-3xl lg:text-6xl mb-4 leading-tight"
      >
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
