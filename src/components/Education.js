import { motion } from "framer-motion";

const Education = () => {
    const PSM_CERTIFICATE = require("./../assets/scrum.jpeg");
    const PUNE_UNIV = require("./../assets/pune-univ.jpeg");
    const REACT_CERTIFICATE = require("./../assets/namaste-dev.jpeg");

    const education = [
      {
        degree: "B.E. Computer Engineering",
        year: "2016",
        college: "Savitribai Phule Pune University",
        img: PUNE_UNIV,
      },
      {
        degree: "Professional Scrum Master I",
        year: "2023",
        college: "Scrum.org",
        img: PSM_CERTIFICATE
      },
      {
        degree: "React Developer",
        year: "2025",
        college: "Namaste Dev",
        img: REACT_CERTIFICATE
      }
    ];
  
    return (
      <div className="bg-gradient-to-t from-white to-[#4652a4]">
        <div className="max-w-2xl mx-auto p-6 ">
          <p className="mt-16 mb-10 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {/* Education & Certifications */}
          </p>
          <div className="relative border-l-4 border-[#6283d4] pl-6">
            {education.map((item, index) => (
              <div key={index} className="mb-8 relative ml-1">
                {/* Circle Indicator */}
                <div className="absolute -left-7 top-1 w-5 h-5 bg-[#6283d4] rounded-full border-4 border-white"></div>

                {/* Experience Details */}
                <motion.div className="bg-white p-5 shadow-[10px_10px_10px_5px_#808080] rounded-lg hover:scale-105"
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 1, ease: "easeOut" }}>
                    <div>
                    <p>
                    <img
                      alt="education"
                      src={item.img}
                      className="h-28 w-auto ml-auto mr-auto"
                    />
                  </p>
                    </div>
                    <div className="w-full">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-500">
                    {item.college} | {item.year}
                  </p>
                    </div>
 

                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
export default Education;