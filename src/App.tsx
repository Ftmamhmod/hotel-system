import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Modules/Shared/LandingPage/LandingPage";
import NotFound from "./Modules/Shared/NotFound/NotFound";
import AuthLayout from "./Modules/Shared/AuthLayout/AuthLayout";
import Register from "./Modules/AuthModule/Register/Register";
import ForgotPassword from "./Modules/AuthModule/ForgotPassword/ForgotPassword";
import ResetPassword from "./Modules/AuthModule/ResetPassword/ResetPassword";
import ChangePassword from "./Modules/AuthModule/ChangePassword/ChangePassword";
import MasterLayout from "./Modules/Shared/MasterLayout/MasterLayout";
import Login from "./Modules/AuthModule/Login/Login";
import AdminLayout from "./Modules/Shared/AdminLayout/AdminLayout";
import RoomDetails from "./Modules/UserModule/RoomDetails/RoomDetails";
import Explore from "./Modules/UserModule/Explore/Explore";
import Favourites from "./Modules/UserModule/Favourites/Favourites";
import AdminDashboard from "./Modules/AdminModule/AdminDashboard/AdminDashboard";
import RoomsList from "./Modules/AdminModule/Rooms/RoomsList";
import RoomData from "./Modules/AdminModule/Rooms/RoomData";
import FacilitiesList from "./Modules/AdminModule/Facilities/FacilitiesList";
import ADSList from "./Modules/AdminModule/ADS/ADSList";
import BookingList from "./Modules/AdminModule/Booking/BookingList";

function App() {
const routes = createBrowserRouter([
    {
      path:'',
      element: <MasterLayout/>,
      errorElement: <NotFound/>,
      children: [
        {index: true, element: <LandingPage/>},
        {path: 'landing-page', element: <LandingPage/>},
        {path: 'room-details', element: <RoomDetails/>},
        {path: 'explore', element: <Explore/>},
        {path: 'favourits', element: <Favourites/>},
      ]
    },
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "change-password", element: <ChangePassword />},
      ],
    },

    {
      path:'dashboard',
      element: <AdminLayout/>,
      errorElement: <NotFound/>,
      children: [
        {index: true, element: <AdminDashboard/>},
        {path: 'rooms', element: <RoomsList/>},
        {path: 'add-room', element: <RoomData/>},
        {path: 'edit-room/:id', element: <RoomData/>},
        {path: 'view-room/:id', element: <RoomData/>},
        {path: 'facilities', element: <FacilitiesList/>},
        {path: 'ads', element: <ADSList/>},
        {path: 'booking-list', element: <BookingList/>},
      ]
    },

  ]);
  return (
    <>
    <ToastContainer/>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
