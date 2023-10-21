export const Clients = ({ clients = [] }) => {
  return (
    <div className="py-12">
      <h2 className="mb-4">I&apos;ve created content for</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
        {clients.map((client, index) => {
          return <p key={index}>{client?.name}</p>;
        })}
      </div>
    </div>
  );
};
