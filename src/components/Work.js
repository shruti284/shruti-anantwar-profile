import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
const Work = () => {
  const YOMLY_LOGO = require("./../assets/yomly-logo.jpeg");
  const WINDMILL_LOGO = require("./../assets/windmill-logo.jpeg");
  const ZENSAR_LOGO = require("./../assets/zensar-logo.jpeg");
  const PSM_CERTIFICATE = require("./../assets/scrum.jpeg");
  const PUNE_UNIV = require("./../assets/pune-univ.jpeg");
  const REACT_CERTIFICATE = require("./../assets/namaste-dev.jpeg");

  const experiences = [
    {
      company: "Yomly",
      position: "Software Engineer",
      location: "Dubai, UAE",
      date: "May 2022 - Present",
      logo: YOMLY_LOGO,
      description:
        "Developing and maintaining web applications using Angular 14 and Node JS. Scrum Master for the team.",
    },
    {
      company: "WMSS Labs",
      position: "Frontend Developer",
      location: "Pune, India",
      date: "May 2019 - Apr 2022",
      logo: WINDMILL_LOGO,
      description: "Middle Angular and React developer.",
    },
    {
      company: "Zensar Technologies",
      position: "Software Engineer",
      location: "Pune, India",
      date: "Aug 2016 - Feb 2019",
      logo: ZENSAR_LOGO,
      description:
        "Developing and maintaining application using Angular 2 and JAVA.",
    },
  ];

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
      img: PSM_CERTIFICATE,
    },
    {
      degree: "React Developer",
      year: "2025",
      college: "Namaste Dev",
      img: REACT_CERTIFICATE,
    },
  ];

  return (
    <div className="bg-gradient-to-t from-white to-[#4652a4]">
      <div className="max-w-4xl mx-auto p-6 mt-10 mb-5">
        {/* <p className="mt-10 mb-10 text-3xl text-pretty text-[#c7d9ff] sm:text-3xl lg:text-balance">
        <BriefcaseIcon
                      aria-hidden="true"
                      className="size-8 text-[#c7d9ff]"
                    /> Work Experience
          </p> */}
        <p className="mt-10 mb-10 text-3xl text-pretty text-[#c7d9ff] sm:text-3xl lg:text-balance flex items-center gap-2">
          <BriefcaseIcon aria-hidden="true" className="size-8 text-[#c7d9ff]" />
          Work Experience
        </p>
        <div className="relative border-l-4 border-[#6283d4] pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative ml-1">
              {/* Circle Indicator */}
              <div className="absolute -left-7 ml-[-10] top-1 w-5 h-5 bg-[#6283d4] rounded-full border-4 border-white"></div>

              {/* Experience Details */}
              <motion.div
                className="bg-white p-5 shadow-[10px_10px_10px_5px_#808080] rounded-lg flex hover:scale-105"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div>
                  <img
                    alt="education"
                    src={exp.logo}
                    className="h-20 w-auto ml-auto mr-auto"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-500">
                    {exp.company} | {exp.location} | {exp.date}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <hr></hr>

      <div className="max-w-4xl mx-auto p-6 mt-2 mb-5">
        <p className="mt-5 mb-10 text-3xl text-pretty text-[#4b5468] sm:text-3xl lg:text-balance flex items-center gap-2">
          <AcademicCapIcon
            aria-hidden="true"
            className="size-8 text-[#4b5468]"
          />
          Education & Certifications
        </p>
        <div className="relative border-l-4 border-[#6283d4] pl-6">
          {education.map((item, index) => (
            <div key={index} className="mb-8 relative ml-1">
              {/* Circle Indicator */}
              <div className="absolute -left-7 ml-[-10] top-1 w-5 h-5 bg-[#6283d4] rounded-full border-4 border-white"></div>

              {/* Experience Details */}
              <motion.div
                className="bg-white p-5 shadow-[10px_10px_10px_5px_#808080] rounded-lg flex hover:scale-105"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div>
                  <img
                    alt="education"
                    src={item.img}
                    className="h-20 w-auto ml-auto mr-auto"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold">{item.college}</h3>
                  <p className="text-gray-500">
                    {item.degree} | {item.year}{" "}
                  </p>
                  {/* <p className="mt-2 text-gray-700">{exp.description}</p> */}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
