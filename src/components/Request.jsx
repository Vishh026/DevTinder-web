import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../store/reducers/requestSlice";
import { useEffect, useState } from "react";
import UserNotificationCart from "./UserNotificationCart";
import RequestShimmer from "./RequestShimmer";
import toast from "react-hot-toast"

const Request = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [loading, setLoading] = useState(true);

  const reviewRequestHandler = async(status,reqId) => {
    try {
      const {data} = await axios.post(`${BASE_URL}/request/review/${status}/${reqId}`,{},{
        withCredentials:true,
      })
      dispatch(removeRequest(reqId))
      toast.success("Request accepted successfully!")
    } catch (error) {
      console.error(error);
      
    }
  }

   const fetchReceivedRequests = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/user/request/received`, {
          withCredentials: true,
        });
        
        dispatch(addRequest(data.data));
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchReceivedRequests();
  }, []);

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
                <button className="bg-[#dfcfec] px-3 py-1 rounded" onClick={()=> reviewRequestHandler("accepted",request._id)}>
                  Accepted
                </button>
                <button className="bg-red-400 px-3 py-1 rounded" onClick= {() => reviewRequestHandler("rejected",request._id)}>
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
