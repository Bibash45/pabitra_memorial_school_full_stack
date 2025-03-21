import React from "react";
import heroimg from "../../assets/Images/HomeImages/Holistic/image/5.jpg";
// import pdf from "../../assets/Images/HomeImages/Curriculum/CbseBooks.pdf"
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const SportsAndHolisticGrowth = () => {
  // Function to handle download button click
  // const handleDownload = () => {
  //   window.open(pdf, "_blank");
  // };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-15 mt-0 md:mt-4 lg:mt-16">
      {/* Hero Section */}
      <div className="w-full h-[500px] bg-cover bg-center mb-8">
        <img
          className="w-full h-full object-cover"
          src={heroimg}
          alt="Hero Section Image"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
         
          <Link
            underline="hover"
            color="text.primary"
            href="/HolisticEdu"
            aria-current="page"
          >
            Holistic Education
          </Link>
        </Breadcrumbs>
      </div>
      {/* Main Content */}
      <div className="max-w w-full bg-white p-8 rounded-lg mx-4">
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-3xl font-bold text-secondary font-title text-center">
            The role of sports in holistic growth
          </h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-l md:text-m font-bold font-description tracking-wide text-secondary mb-10 text-center">
            Sports play a vital role in the holistic growth of students, contributing to their physical, mental, emotional, and social development.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Component 1 */}
            <div className="bg-white rounded-lg shadow-lg py-10 border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Physical Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4">
              Engaging in regular sports activities helps students enhance their physical health and fitness. Through sports, students build strength, endurance, agility, and flexibility, promoting overall well-being. These activities not only keep them active but also foster a sense of discipline, teamwork, and confidence.
              </p>
            </div>

            {/* Card Component 2 */}
            <div className="bg-white rounded-lg py-10 border-2 border-secondary shadow-secondary shadow-lg overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Mental Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              Sports play a crucial role in the mental development of students. By participating in sports, students cultivate essential skills like discipline, focus, teamwork, and goal-setting. These valuable skills extend beyond the playing field, positively impacting their academic performance and personal relationships, helping them succeed in various aspects of life.
              </p>
            </div>

            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Emotional Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              Sports also contribute significantly to the emotional development of students. Through participation, they learn to handle both success and failure, build resilience, and develop effective coping strategies. Sports provide students with opportunities to manage their emotions, fostering emotional maturity and a positive mindset in challenging situations.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Social Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              Sports offer a fantastic opportunity for students to enhance their social skills and form meaningful relationships with their peers. Through teamwork, students learn the importance of collaboration, effective communication, and mutual respect. Sports also foster empathy, helping students understand and support one another, creating a positive and inclusive environment.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-secondary mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700">
                  Leadership Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              Sports provide a platform for students to develop strong leadership skills. By assuming roles like team captain or coach, students learn how to motivate and inspire others, make quick decisions under pressure, and take responsibility for their actions. These experiences help build confidence and prepare them to lead in various areas of life.
              </p>
            </div>
            <div className="bg-white rounded-lg py-10 shadow-lg border-2 border-secondary shadow-secondary overflow-hidden cursor-pointer">
              <div className="flex items-center justify-center mb-4">
              <svg
  className="h-8 w-8 text-secondary mr-2"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

                <h3 className="text-xl font-semibold text-gray-700">
                No Bag Days
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
              At PMEBS, we regularly organize No Bag Days, where students take a break from their regular school routine. These days are celebrated with exciting early morning sports events, allowing students to engage in physical activities and enjoy a refreshing start to the day. It's a fun and memorable experience that students look forward to and cherish.
  </p>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* Download Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold text-secondary mr-4">
            To know more about our sports facilities and programs, download our brochure:
          </p>
          <button
            className="bg-secondary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            // onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsAndHolisticGrowth;