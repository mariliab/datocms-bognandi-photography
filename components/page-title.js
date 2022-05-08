export default function PageTitle({ title = "", subtitle = "" }) {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl mb-2 leading-tight break-words lg:break-normal font-light uppercase">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base 2xl:text-xl font-light max-w-4xl">{subtitle}</p>
      )}
    </div>
  );
}
