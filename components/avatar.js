export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xs lg:text-base font-bold leading-tight">
        /{name}
      </div>
    </div>
  );
}
