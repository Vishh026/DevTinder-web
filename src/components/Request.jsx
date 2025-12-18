import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../store/reducers/requestSlice";
import { useEffect, useState } from "react";
import UserNotificationCart from "./UserNotificationCart";
import RequestShimmer from "./RequestShimmer";

const Request = () => {
  const requests = useSelector((store) => store.requests);
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceivedRequests = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/user/request/received`, {
          withCredentials: true,
        });
        console.log("request",data.data);
        
        dispatch(addRequest(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReceivedRequests();
  }, [dispatch]);

  if (loading) {
    return <div className="text-center text-white"><RequestShimmer /></div>;
  }

  if (requests.length === 0) {
    return <div className="text-center text-white text-xl py-10">No requests found</div>;
  }

  return (
    <div className="text-center my-5">
      <h1 className="text-white font-bold text-3xl">Requests</h1>

      <div className="flex gap-5 flex-col my-10">
        {requests.map((request) => (
          <UserNotificationCart
            key={request._id}
            user={request.fromUserId}
            actions={
              <>
                <button className="bg-[#dfcfec] px-3 py-1 rounded">
                  Accept
                </button>
                <button className="bg-red-400 px-3 py-1 rounded">
                  Reject
                </button>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Request;
