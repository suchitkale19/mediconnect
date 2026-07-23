import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAdminContext } from "./context/AdminContext";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/admin/Dashboard";
import AllAppointments from "./pages/admin/AllAppointments";
import AddDoctor from "./pages/admin/AddDoctor";
import DoctorsList from "./pages/admin/DoctorsList";

export default function App() {
  const { atoken } = useAdminContext();
  return atoken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<></>} />
          <Route path={"/admin-dashboard"} element={<Dashboard />} />
          <Route path={"/all-appointments"} element={<AllAppointments />} />
          <Route path={"/add-doctor"} element={<AddDoctor />} />
          <Route path={"/doctors-list"} element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}
