import React from "react";
import heroimg from "../../assets/Images/HomeImages/Curriculum/cbse.jpg";
// import pdf from "../../assets/Images/HomeImages/Curriculum/CbseBooks.pdf";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const BleCurriculum = () => {
  // Function to handle download button click
  // const handleDownload = () => {
  //   // Replace "path/to/your/pdf/file.pdf" with the actual path to your PDF file
  //   window.open(pdf, "_blank");
  // };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center py-15">
      {/* Hero Section */}
      <div className="w-full h-64 bg-cover bg-center mb-8">
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
            href="/BleCurriculum"
            aria-current="page"
          >
            BLE Curriculum
          </Link>
        </Breadcrumbs>
      </div>
      {/* Main Content */}
      <div className="max-w w-full bg-white p-8 rounded-lg mx-4">
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-3xl font-bold text-secondary font-title text-center">
            BLE Curriculum
          </h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-l md:text-m font-bold font-description tracking-wide text-secondary mb-10 text-center">
            The BLE Curriculum is designed to facilitate interactive sessions
            and hands-on learning experience
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
                  Strong Foundation
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4">
                The BLE Curriculum will form an integral part of our academic
                offerings, ensuring a strong foundation for our students. Our
                teachers will follow the guidelines set by BLE, which prioritize
                the mastery of subjects and the application of learned skills.
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
                  Interactive Learning
                </h3>
              </div>
              <p className="text-gray-600 mb-6 p-4 md:p-6">
                Through interactive sessions and practical learning opportunities,
                we will foster a deep understanding of concepts and encourage
                students to think critically and creatively.
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
          Global Perspective
        </h3>
      </div>
      <p className="text-gray-600 mb-6 p-4 md:p-6">
      At Pabitra Memorial School, our Basic Level Education (BLE) curriculum is designed to provide students with a strong foundation in essential subjects, promoting critical thinking, problem-solving, and a well-rounded educational experience. By integrating the expertise of NEB-approved textbooks and focusing on hands-on learning, our students are encouraged to develop essential skills for both academic and personal growth. This approach will help them transition smoothly into secondary education while cultivating a deep understanding of local and global perspectives. Our curriculum, aligned with NEB guidelines, empowers students to build the knowledge and skills required for lifelong learning and success.
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
          Teacher Training
        </h3>
      </div>
      <p className="text-gray-600 mb-6 p-4 md:p-6">
      Our focus on teacher training and the adoption of innovative teaching methodologies will ensure that students at Pabitra Memorial School receive an exceptional academic experience. By equipping our educators with the latest teaching techniques and continuous professional development, we aim to create a dynamic and engaging learning environment. This approach will not only enhance students' academic performance but also foster creativity, curiosity, and a love for learning, preparing them for future challenges and success.      </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-semibold text-secondary mr-4">
            To know more about the BLE books prescribed, download now:
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

export default BleCurriculum;
