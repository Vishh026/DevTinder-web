import { BrowserRouter, Outlet } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";
import {Provider} from "react-redux"
import store from "./store/store"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <MainRoutes />
         <Toaster position="bottom-left" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
