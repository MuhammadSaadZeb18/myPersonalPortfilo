export default function Loading() {
  return (
    <div className="p-8 Seccontainer my-[10rem]!">
      <h2 className="gradient">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg animate-pulse"
          >
            <div className="h-40 bg-zinc-700 rounded-md mb-4" />
            <div className="h-6 bg-zinc-700 rounded w-3/4 mb-3" />
            <div className="h-4 bg-zinc-700 rounded w-full mb-2" />
            <div className="h-4 bg-zinc-700 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
