export default function PageTitle({ title = "" }) {
  return (
    <h1 className="text-3xl md:text-6xl leading-none mb-4 md:mb-8">{title}</h1>
  );
}
