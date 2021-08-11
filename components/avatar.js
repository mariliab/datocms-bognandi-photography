export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-14 h-14 rounded-full mr-4"
        alt={name}
      />
      <h6 className="text-base font-bold leading-tight">/{name}</h6>
    </div>
  );
}
