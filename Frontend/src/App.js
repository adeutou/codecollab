import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import Home from "./pages/Home";
import CreatePost from "./admin/CreatePost";
import Navbar from './components/Navbar';
import NotFound from "./pages/NotFound";
import Footer from './components/Footer/Footer';
import Forum from "./pages/Forum";
import Layout from "./admin/global/Layout";
import SinglePost from "./pages/SinglePost";
import EditPost from "./admin/EditPost";
import AdminDashboard from "./admin/AdminDashboard";

//HOC
const AdminDashboardHOC = Layout(AdminDashboard);
const CreatePostHOC = Layout(CreatePost);
const EditPostHOC = Layout(EditPost);
//const UserDashboardHOC = Layout(UserDashboard);





function App() {
  return (
    <>
      <ToastContainer />

      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/post/create"
                element={
                  // <AdminRoute>
                  <CreatePost />
                  // </AdminRoute>
                }
              />
              <Route
                path="/admin/post/edit/:id"
                element={
                  <AdminRoute>
                    <EditPostHOC />
                  </AdminRoute>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  );
}

export default App;
