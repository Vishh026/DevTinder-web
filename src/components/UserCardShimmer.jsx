const UserCardShimmer = () => {
  return (
    <div className="w-1/2 mx-auto bg-zinc-600/50 shadow-lg flex p-2 rounded-lg animate-pulse">
      
      {/* Image */}
      <div className="w-1/4 rounded-lg bg-zinc-600 h-24" />

      {/* Content */}
      <div className="w-3/4 mx-4 flex flex-col justify-between">
        
        <div className="space-y-2">
          <div className="h-5 w-40 bg-zinc-600 rounded" />
          <div className="h-3 w-full bg-zinc-600 rounded" />
          <div className="h-3 w-3/4 bg-zinc-600 rounded" />

          <div className="flex gap-2 mt-2">
            <div className="h-6 w-14 bg-zinc-600 rounded" />
            <div className="h-6 w-14 bg-zinc-600 rounded" />
            <div className="h-6 w-14 bg-zinc-600 rounded" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-3">
          <div className="h-8 w-20 bg-zinc-600 rounded" />
          <div className="h-8 w-20 bg-zinc-600 rounded" />
        </div>

      </div>
    </div>
  );
};

export default UserCardShimmer;
