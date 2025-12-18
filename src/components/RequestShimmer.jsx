import UserCardShimmer from "./UserCardShimmer";

const RequestShimmer = () => {
  return (
    <div className="flex flex-col gap-5 my-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <UserCardShimmer key={index} />
      ))}
    </div>
  );
};

export default RequestShimmer;
