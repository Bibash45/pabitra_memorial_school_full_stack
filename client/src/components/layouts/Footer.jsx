import { Link } from "react-router-dom";
import logo from "../../assets/Images/LogoAndOthers/pabitralogo2.png"; // Adjust the path accordingly
import { useState } from "react";
// import Modal from 'react-modal';
// import { useAlert } from "react-alert";
// import { FaEye } from "react-icons/fa";
// import { RiEyeCloseFill } from "react-icons/ri";
// import Partner from "../../assets/Images/Fotter/Partner1.jpg"
// import { IoMdClose } from "react-icons/io";



const Footer = () => {


  const links = [
    { title: "About Us", to: "/OurTeam" },
    { title: "Admissions", to: "/admissions" },
    { title: "Academics", to: "/academics" },
    // { title: "Parents Portal", to: "/parents-portal" },
    { title: "Quick Links", to: "/FilesContainer" },
  ];
  const links2 = [
    // { title: "Calender & Schedules", to: "/calendar" },
    { title: "Career", to: "/career" },
    { title: "LOGIN", to: "/login" },  // Updated path to /login

  ];

  const [isModalOpen,setIsModalOpen]=useState(false)
  const [isSecretKeyVisible,setIsSecretKeyVisible]=useState(false)


  return (
  <>
  
  <div className="bg-secondary p-4 md:p-10 text-[12px] text-white lg:py-10 tracking-wide">
      <div className="lg:grid grid-cols-4 md:gap-20 space-y-10 md:space-y-0">
        <div className="mb-10 md:mb-0 lg:flex items-center justify-start">
          <img src={logo} className="w-[250px]" alt="" />
        </div>
        <div className="space-y-4 text-[16px]">
          <div className="">
            <p className="lg:text-justify">
              Pabitra Memorial English Boarding School , ChaudandiGadhi - 4, Udayapur
            </p>
            <Link
              className="hover:ml-2 transition-all duration-200"
              to={
                "https://maps.app.goo.gl/DjvFY1QfqRcVyJNU7"
              }
              target="_blank"
            >
              Direction &gt;
            </Link>
          </div>
          <div className="space-y-0 text-[15px]">
            <span className="block">PH : 981473920</span>
            <span className="block">Mobile : </span>
            <Link
            className="hover:ml-2 transition-all duration-200"
            to="tel:+977-984-123-4567"  
            >
             Call Us &gt;
            </Link>
          </div>
        </div>
        <div className="text-[15px]">
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index} className="text-start">
                {typeof link === "object" ? (
                <Link
                to={link.title !== "Admin login" && link.to}
                onClick={link.title === "Admin login" ? () => setIsModalOpen(true) : undefined}
                className="after:bg-white after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300 after:rounded-lg inline-block"
              >

{link.title}                  
</Link>
                ) : (
                  <span>{link}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3 text-[15px]">
            {links2.map((link, index) => (
              <li key={index} className="text-start">
                {typeof link === "object" ? (
                  <Link
                    to={link.to}
                    className="after:bg-white after:scale-0 hover:after:scale-100 after:h-[2px] after:origin-center after:block after:transition-all after:duration-300 after:rounded-lg inline-block"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <span>{link}</span>
                )}
              </li>
            ))}

          </ul>
        </div>
      </div>
          
      <div className="space-y-2 md:flex items-center justify-between mt-5">
        <p>
          &copy; Pabitra Memorial School 2024 | All rights reserved | Legal Notice.
        </p>
        <p>Developed by <a
            href="https://webstorlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200"
          >
            BIBASH CHAUDHARY
          </a></p>
      </div>
    </div>


  </>
  );
};

export default Footer;
