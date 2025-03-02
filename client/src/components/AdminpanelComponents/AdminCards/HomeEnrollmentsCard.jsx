import React from "react";
import {
       FaBirthdayCake,
       FaPhone,
       FaMapMarkerAlt,
       FaIdCard,
       FaTrashAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { MdClass, MdOutlineEmojiPeople } from "react-icons/md";

const InfoItem = ({ icon, label, value }) => (
       <div className="flex items-start space-y-1 mb-4">
              <div className="text-primary-900 w-6 h-6 mt-1">
                     {React.cloneElement(icon, {
                            className: "text-primary-900",
                     })}
              </div>
              <div className="ml-3 flex-1">
                     <p className="text-gray-500 text-sm">{label}</p>
                     <p className="text-gray-800 font-medium break-words">
                            {value || "N/A"}
                     </p>
              </div>
       </div>
);

const HomeEnrollmentsCard = ({ user, index, handleOpen }) => {
       return (
              <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                     <div className="space-y-2">
                            <InfoItem
                                   icon={<FaIdCard />}
                                   label="ID"
                                   value={user?._id}
                            />

                            <InfoItem
                                   icon={<MdOutlineEmojiPeople />}
                                   label="Name"
                                   value={user?.name}
                            />

                            <InfoItem
                                   icon={<FaBirthdayCake />}
                                   label="DOB"
                                   value={user.dob}
                            />

                            <InfoItem
                                   icon={<FaPhone />}
                                   label="Phone"
                                   value={user?.phone}
                            />

                            <InfoItem
                                   icon={<MdClass />}
                                   label="Class"
                                   value={user?.class}
                            />
                     </div>

                     <button
                            onClick={() => handleOpen(user?._id)}
                            className="w-full mt-6 bg-primary-900 hover:bg-primary-950 text-white py-3 px-4 rounded-md transition-colors duration-200"
                     >
                            Delete Entry
                     </button>
              </motion.div>
       );
};

export default HomeEnrollmentsCard;
