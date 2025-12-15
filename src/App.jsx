import { BrowserRouter, Outlet } from "react-router-dom";
import MainRoutes from "./components/MainRoutes";
import {Provider} from "react-redux"
import store from "./store/store"


const App = () => {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
