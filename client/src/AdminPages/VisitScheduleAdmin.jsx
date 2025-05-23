import { useAlert } from "react-alert";
import {
       useDeleteEnrollmentMutation,
       useEnrollmentsQuery,
} from "../../Redux/adminAuth";
import HomeEnrollmentsCard from "../components/AdminpanelComponents/AdminCards/HomeEnrollmentsCard";
import VisitScheduleDeleteModal from "../components/AdminpanelComponents/AdminModals/DeleteModalCommon";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import {
       useDeleteVisitScheduleMutation,
       useGetVisitScheduleQuery,
} from "../../Redux/authApi";

const VisitScheduleAdmin = () => {
       const { isLoading, data,refetch } = useGetVisitScheduleQuery();
       const [deleteVisitSchedule, { isLoading: visitScheduleLoading }] =
              useDeleteVisitScheduleMutation();
       const [open, setOpen] = useState(false);
       const alert = useAlert();
       const [id, setId] = useState(null);

       const handleDelete = async (id) => {
              try {
                     const data = await deleteVisitSchedule(id).unwrap();
                     refetch();
                     alert.success(data?.message);
                     setOpen(false);
                     return;
              } catch (e) {
                     alert.error(e?.data?.err);
                     return;
              }
       };

       const handleClose = () => {
              setOpen(false);
              setId(null);
       };

       const handleOpen = (id) => {
              setOpen(true);
              setId(id);
       };

       if (isLoading) {
              return (
                     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary-500 to-teal-400">
                            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
                     </div>
              );
       }

       if (data?.data?.length === 0) {
              return (
                     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-primary-50 to-indigo-100">
                            <div className="text-center p-8 bg-white rounded-lg shadow-xl">
                                   <FaExclamationCircle className="text-6xl text-indigo-500 mx-auto mb-4" />
                                   <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                          No Data Yet
                                   </h2>
                                   <p className="text-gray-600">
                                          There are currently no parent schedule
                                          available.
                                   </p>
                            </div>
                     </div>
              );
       }

       return (
              <div className="min-h-screen bg-gradient-to-br from-primary-50 to-indigo-100 p-6 lg:p-12">
                     <motion.h1
                            className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                     >
                            Visit Schedule
                     </motion.h1>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 w-full p-10">
                            {data?.data?.map((user) => (
                                   <HomeEnrollmentsCard
                                          key={user?._id}
                                          user={user}
                                          handleOpen={handleOpen}
                                          handleClose={handleClose}
                                   />
                            ))}
                     </div>
                     <VisitScheduleDeleteModal
                            handleClose={handleClose}
                            handleOpen={handleOpen}
                            deleteLoading={visitScheduleLoading}
                            handleDelete={handleDelete}
                            id={id}
                            open={open}
                            motion={motion}
                     />
              </div>
       );
};

export default VisitScheduleAdmin;
