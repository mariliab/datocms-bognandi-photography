export default function BlockTitle({ title = "", subtitle }) {
  return (
    <div className="mb-8">
      <h2 id={title.toLowerCase()} className="text-4xl mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-xl">{subtitle}</p>}
    </div>
  );
}
