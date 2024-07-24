import Dashboard from "../Components/Dashboard";
import About from "../Components/Admin/Pages/About";
import Sidebar from "../Components/Admin/Sidebar";
import Comment from "../Components/Admin/Pages/Comment";
import Product from "../Components/Admin/Pages/Product";
import ProductList from "../Components/Admin/Pages/ProductList";
import AllProjects from "../Components/Admin/Pages/AllProjects";
import AddProject from "../Components/Admin/Pages/AddProject";
import { ViewProject } from "../Components/Admin/ViewProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDashboard from "../Components/Employee/EmployeeDashboard";
import InactiveEmployee from "../Components/Employee/InactiveEmployeesModal";
import Roles from "../Components/Employee/Roles";
import EmployeeDetails from "../Components/Employee/EmployeeDetails";

export default function AdminRoutes() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/Dashboard/AllProjects" element={<AllProjects />} />
        <Route path="/Dashboard/AddProject" element={<AddProject />} />
        <Route path="/Dashboard/ViewProject" element={<ViewProject />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard/>}/>
        <Route path="/InactiveEmployee" element={<InactiveEmployee/>}/>
        <Route path="/Roles" element={<Roles/>}/>
        <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
      </Routes>
    </Sidebar>
  );
}
