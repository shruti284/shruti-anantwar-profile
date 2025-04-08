// const Body = () => {
//   return (
//       <div>
//           <div class="p-10 border-2 border-black bg-zinc-400">
//             Hello I am Shruti
//           </div>
//       </div>
//   );
// }

// export default Body;

import {
  CommandLineIcon,
  UserGroupIcon,
  TrophyIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { GITHUB_LINK, LINKEDIN_LINK } from "../utils/constant";

const features = [
  {
    name: "Frontend Technologies",
    skills:
      "React JS, Angular 14+, Javascript, Typescript, HTML, CSS, Angular Material, Bootstrap, Tailwind CSS",
    icon: CommandLineIcon,
  },
  {
    name: "Backend Technologies & Tools",
    skills: "Node JS, MySQL, GraphQL, Postman, Git, JIRA,",
    icon: CommandLineIcon,
  },
  {
    name: "Scrum Experience",
    skills:
      "Agile methodologies, Sprint Planning, Sprint Review, Sprint Retrospective, Daily Standup, Backlog Grooming, Cross functional team collaboration",
    icon: UserGroupIcon,
  },
  {
    name: "Certifications",
    skills: "Professional Scrum Master I, React JS developer",
    icon: TrophyIcon,
  },
];
const PROFILE_IMG = require("./../assets/Shruti1.jpeg");
const MY_CV = require("./../assets/Shruti_Fullstack_dev_CV.pdf");
const GITHUB_IMG = require("./../assets/github.png");
const LINKEDIN_IMG = require("./../assets/linkedin.png");

const downloadCV = () => {
  window.open(MY_CV);
};
const Body = () => {
  return (
    <div className="bg-gradient-to-t from-white to-[#4652a4] bg-line py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base/7 font-semibold text-black-600">Welcome</h2> */}
          <img
            alt="Shruti Anantwar"
            src={PROFILE_IMG}
            className="h-60 w-auto ml-auto mr-auto rounded-full border-4 border-black p-1 shadow-[10px_10px_0px_#323147]"
          />

          <motion.h1
            className="mt-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello, I'm Shruti Anantwar
          </motion.h1>
          <motion.p
            className="mt-4 text-lg/8 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Frontend Engineer / Scrum Master
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <button
              className="inline-flex p-2 mt-2 bg-[#3c5daf] text-white py-2 rounded-xl hover:bg-[#274797] transition border-1 border-black shadow-[5px_5px_5px_gray]"
              onClick={downloadCV}
            >
              Download CV{" "}
              <ArrowDownTrayIcon
                aria-hidden="true"
                className="size-6 pl-1 pr-1"
              />
            </button>
          </motion.p>

          <motion.p
            className="inline-flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="pr-2">
              <img
                alt="Github"
                src={GITHUB_IMG}
                className="h-10 w-auto inline-flex mt-5"
              />
            </a>

            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="pl-2">
              <img
                alt="LinkedIn"
                src={LINKEDIN_IMG}
                className="h-10 w-auto inline-flex mt-5"
              />
            </a>
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative pl-16 bg-white p-5 shadow-[10px_10px_10px_5px_#808080] rounded-lg hover:scale-105"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute ml-2 mt-2 top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#3c5daf]">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.skills}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Body;
