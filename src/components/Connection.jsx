import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../store/reducers/ConnectionSlice";
import UserNotificationCart from "./UserNotificationCart"
import RequestShimmer from "./RequestShimmer";



const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log("connections", data.data);
      dispatch(addConnection(data.data));
    } catch (error) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (loading) {
    return <div className="text-center text-white"><RequestShimmer /></div>;
  }

  if (connections.length === 0) {
    return <div className="text-center text-white">No requests found</div>;
  }

  return (
    connections && (
      <div className="text-center my-5">
        <h1 className="text-white text-bold text-3xl">Connections</h1>
        <div className="flex gap-5 flex-col my-10 ">
          {connections?.map((connection) => (
            <UserNotificationCart
              user={connection}
              key={connection._id}
              actions={
                <>
                  <button className="px-3 py-1 text-sm bg-red-400 rounded">
                    Remove
                  </button>
                  <button className="px-3 py-1 text-sm bg-[#dfcfec] rounded">
                    Message
                  </button>
                </>
              }
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Connection;
