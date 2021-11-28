export default function PageTitle({ title = "", subtitle = "" }) {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-none mb-4 md:mb-8 text-beige-darkest">
        {title}
      </h1>
      <div className="text-current bg-current h-1 w-24 border-2 border-beige mb-4 lg:mb-8 rounded-full"></div>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
