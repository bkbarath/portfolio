import { motion } from "framer-motion";
import { SkillImage, type SkillKey } from "../../lib/data/common.data";
import { fadeIn } from "../../styles/variant";
import {
  getDateAsDDMMYYYYOrPresent,
  getDifference,
} from "../../utils/common/functional.util";

const Experience = () => {
  type ExperienceType = {
    company: string;
    companyImage?: string;
    companyURL: string;
    from: Date;
    to: Date;
    designation: string;
    about: string;
    direction: "up" | "down" | "left" | "right";
    skills: SkillKey[];
  };
  const Experience: ExperienceType[] = [
    {
      company: "Graspear Solutions Private Limited",
      companyImage:
        "https://graspear.com/images/09/cropped-GRASPEAR-New-284x300.webp", // Optional: Add image URL if available
      companyURL: "https://www.graspear.com", // Update if different
      from: new Date("2024-07-01"),
      to: new Date(), // Present
      designation: "Software Engineer",
      about:
        "Developing mobile applications using Flutter for cross-platform solutions, enhancing user experiences with dynamic interfaces. Designing and implementing REST APIs with Spring Boot and documenting them using Swagger OpenAPI for streamlined backend integration. Managing backend operations with MongoDB to ensure scalable and efficient data storage.",
      skills: [
        "flutter",
        "dart",
        "spring",
        "mongo-db",
        "android-studio",
        "docker",
        "tailwind",
        "typescript",
      ],
      direction: "left",
    },
    {
      company: "Graspear Solutions Private Limited",
      companyImage:
        "https://graspear.com/images/09/cropped-GRASPEAR-New-284x300.webp", // Optional: Add image URL if available
      companyURL: "https://www.graspear.com", // Update if different
      from: new Date("2023-06-29"),
      to: new Date("2024-06-29"),
      designation: "Software Developer Intern",
      about:
        "Built three live web applications utilizing React.JS, MUI, and AntD libraries for interactive data visualizations. Designed and developed robust backend services with Java, Spring Boot, and PostgreSQL. Collaborated with senior developers to address project requirements, focusing on testing, debugging, and delivering high-quality code.",
      skills: [
        "spring",
        "react",
        "java",
        "html",
        "css",
        "javascript",
        "postgresql",
        "github",
        "git",
        "postman",
      ],
      direction: "left",
    },
  ];
  return (
    <div className="flex h-full flex-col gap-2 p-5">
      <div className="col-span-12 flex flex-col items-center justify-center gap-2">
        <p className="text-primary-orange text-4xl">Experience</p>
        <p>Not just jobs — milestones in my maker's journey.</p>
      </div>

      <ol className="m-auto flex h-full w-full flex-col items-center justify-center md:w-[90%] lg:w-4/5">
        {Experience.map((item, index) => (
          <motion.li
            initial="initial"
            whileInView="animate"
            variants={fadeIn(item.direction, index * 0.5)}
            key={item.designation}
            className="relative w-9/10 border-s-2 py-5 pl-15 md:w-8/10 lg:max-w-2/3"
          >
            <div className="top-[10%] -left-65 mb-2 flex justify-between md:flex-row lg:absolute lg:w-50 lg:flex-col">
              <p className="text-right">
                {[
                  getDateAsDDMMYYYYOrPresent(item.from),
                  getDateAsDDMMYYYYOrPresent(item.to),
                ].join(" - ")}
              </p>
              <p className="text-primary-grey text-right text-sm">
                {getDifference(item.from, item.to)}
              </p>
            </div>
            <div className="absolute -left-10">
              <div className="bg-primary-button-bg h-20 w-20 rounded-[30%] border-1 p-1">
                <img src={item.companyImage} alt={item.company} className="" />
              </div>
            </div>
            <div className="border-primary-grey flex flex-col gap-5 rounded-xl border-1 p-5">
              <div className="flex justify-between gap-2">
                <p className="text-primary-orange text-3xl">{item.company}</p>
                <p className="text-primary-orange/50 text-xl">
                  {item.designation}
                </p>
              </div>
              <p>{item.about}</p>
              <div className="flex flex-col flex-wrap gap-2">
                <p className="text-primary-grey text-sm">
                  Things I have newly learned
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    //   <p className="rounded-xl border-1 p-1 px-2">{skill}</p>
                    <img
                      src={SkillImage[skill]}
                      alt={skill}
                      className="h-8 cursor-pointer duration-300 transform-3d hover:rotate-z-10"
                    />
                  ))}
                </div>
                {/* {item.skills.length > 3 && <p>+{item.skills.length - 3}</p>} */}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
