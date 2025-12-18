import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/reducers/userSlice";
import Feed from "./Feed";

const AppHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        BASE_URL + "/profile/view",
        { withCredentials: true }
      );

      dispatch(addUser(data.user));
    } catch (err) {
      if (err?.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) fetchUser();
    else setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
        <p className="text-white/60 text-sm">Finding matches...</p>
      </div>
    );
  }

  return <Feed />;
};

export default AppHome;
