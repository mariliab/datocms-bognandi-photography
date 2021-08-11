export default function PageTitle({ title = "", subtitle = "" }) {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl leading-none mb-4 md:mb-8 text-beige-darkest">
        {title}
      </h1>
      <div className="text-current h-1 w-24 border-2 border-current mb-4 lg:mb-8 rounded-full"></div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
