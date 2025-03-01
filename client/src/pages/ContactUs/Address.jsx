import { Link } from "react-router-dom";

const Address = () => {
  const handleEmailClick = (emailAddress) => {
    const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailComposeURL, '_blank');
  };

  return (
    <>
      <h1 className=" text-2xl sm:text-3xl uppercase text-center text-textSecondary font-semibold mt-16 font-title">
        Contact Us
      </h1>
      <div className="md:grid space-y-12 md:space-y-0 grid-cols-2 w-[90%] mx-auto mt-8 text-textSecondary tracking-wide shadow-lg  shadow-secondary pb-8 pt-4 rounded-lg bg-white">
        <div className="space-y-4 px-2 md:px-10 md:py-10">
          <h2 className="text-3xl md:text-4xl text-textSecondary font-semibold font-title">
            Pabitra Memorial School
          </h2>
          <div className="font-semibold">
            <p className="lg:text-justify font-description">
              Pabitra Memorial Secondary English Boarding School , ChaudandiGadhi - 4, Udayapur, Nepal
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
          <div className="space-y-8 w-[90%]">
          <h4 className="font-semibold">
              Admission Officer Name :
              <br />
              <span className="font-normal break-words text-sm md:text-lg tracking-wider">
                Mrs. Aasha Raut
              </span>
            </h4>
            
            <h4 className="font-semibold">
              Admission Officer E-mail address :
              <br />
              <span
                onClick={() => handleEmailClick('admissions@pabitramemorial.com')}
                className="font-normal break-words text-sm md:text-lg tracking-wide cursor-pointer"
              >
                admissions@pabitramemorial.com
              </span>
            </h4>
            <h4 className="font-semibold">
              Admission Officer Mobile No :
              <br />
              <a href="tel:+977 988884300400" className="font-normal break-words text-sm md:text-lg">
              +977 988884300400
              </a>{' '}
              /{' '}
              <a href="tel:+977 988884300400" className="font-normal break-words text-sm md:text-lg">
              +977 988884300400
              </a>
            </h4>
            <h4 className="font-semibold">
              Accountant's Name :
              <br />
              <span className="font-normal break-words text-sm md:text-lg tracking-wider">
                Mr. Deepak Raut 
              </span>
            </h4>
            <h4 className="font-semibold">
              Accountant Email Address :
              <br />
              <span
                onClick={() => handleEmailClick('accounts@pabitramemorialschool.com')}
                className="font-normal break-words text-sm md:text-lg tracking-wider cursor-pointer"
              >
                accounts@pabitramemorialschool.com
              </span>
            </h4>
          
            <h4 className="font-semibold">
              Telephone Number :
              <br />
              <a href="tel:08212971010" className="font-normal break-words text-sm md:text-lg">
                9863782882
              </a>{' '}
              /{' '}
              <a href="tel:8884414356" className="font-normal break-words text-sm md:text-lg">
              9863782882
              </a>
            </h4>
            
            
            
          </div>
        </div>
        <div className="px-10 py-10 ">
        <iframe
            title="Google Map"
            width="100%"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.031321605804!2d86.91630633753476!3d26.774273033561077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef2010ab0dffef%3A0x5eed00ddee70429d!2sPabitra%20Memorial%20Secondary%20Boarding%20English%20School!5e0!3m2!1sen!2snp!4v1740808771233!5m2!1sen!2snp"
            allowFullScreen=""
          ></iframe>

        </div>
      </div>
    </>
  );
};

export default Address;