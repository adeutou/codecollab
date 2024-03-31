import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import Loader from "../components/Loader";

import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { modules } from "../components/moduleToolbar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
//import { images } from "../../constants";





const validationSchema = yup.object({
  title: yup
    .string("Add a post title")
    .min(4, "text content should havea minimum of 4 characters ")
    .required("Post title is required"),
  content: yup
    .string("Add text content")
    .min(10, "text content should havea minimum of 10 characters ")
    .required("text content is required"),
});

const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postAddLike, setPostAddLike] = useState([]);
  const [postRemoveLike, setPostRemoveLike] = useState([]);

  let [isOpen, setIsOpen] = useState(false);
  let [error, setError] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/posts"); // Get posts from API
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchPosts();
    }, []);
    


  const openModal = () => {
    setIsOpen(true);
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: "",
      content: "",
      //  image: null,
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      createNewPost(values);
      //alert(JSON.stringify(values, null, 2));
      actions.resetForm();
      fetchPosts();
      closeModal();
    },
  });

  const createNewPost = async (values) => {
    try {
      const { data } = await axios.post("/api/post/create", values);
      toast.success("post created");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="
   rounded-md 
  
 px-3.5 
   py-2.5 
   text-sm 
 font-semibold 
 text-white 
   shadow-sm 
transition-all 
   duration-300 
   ease-in-out 
   bg-Blueviolet hover:text-black hover:bg-semiblueviolet
   focus-visible:outline 
   focus-visible:outline-2 
  focus-visible:outline-offset-2 
  focus-visible:outline-indigo
"
            onClick={openModal}
          >
            Creer un Post
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <Typography variant="h5" sx={{ pb: 4 }}>
                        Create post
                      </Typography>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          sx={{ mb: 3 }}
                          fullWidth
                          id="title"
                          label="Post title"
                          name="title"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          placeholder="Post title"
                          value={values.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.title && Boolean(errors.title)}
                          helperText={touched.title && errors.title}
                        />

                        <Box sx={{ mb: 3 }}>
                          <ReactQuill
                            theme="snow"
                            placeholder={"Write the post content..."}
                            modules={modules}
                            value={values.content}
                            onChange={(e) => setFieldValue("content", e)}
                          />
                          <Box
                            component="span"
                            sx={{ color: "#d32f2f", fontSize: "12px", pl: 2 }}
                          >
                            {touched.content && errors.content}
                          </Box>
                        </Box>

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          elevation={0}
                          sx={{ mt: 3, p: 1, mb: 2, borderRadius: "25px" }}
                          // disabled={loading}
                        >
                          Create post
                        </Button>
                      </Box>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreatePost;
