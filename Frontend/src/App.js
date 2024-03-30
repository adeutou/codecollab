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
import Navbar from './components/Navbar';
import NotFound from "./pages/NotFound";
import Footer from './components/Footer/Footer';
import Forum from "./pages/Forum";

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
              <Route path="/forum" element={<Forum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  );
}

export default App;
