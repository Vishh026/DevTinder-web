import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addFeed } from "../store/reducers/feedSlice";
import ProfileCard from "./ProfileCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector(store => store.feed);

  const fetchFeed = async () => {
    try {
      if (feed?.length) return; // prevent re-fetch
      const { data } = await axios.get(
        BASE_URL + "/user/feed",
        { withCredentials: true }
      );
      dispatch(addFeed(data.users));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feed || feed.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-zinc-400">
        No more profiles
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center my-5">
      <ProfileCard user={feed[0]} />
    </div>
  );
};

export default Feed;
