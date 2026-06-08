import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

const timeline = [
  {
    key: "tenth",
    title: "Class 10th",
    placeLabel: "School",
    place: "St. Mary's Co-Ed School, Harda",
    metaLabel: "Percentage",
    meta: "97.4% (District Topper)",
  },
  {
    key: "twelfth",
    title: "Class 12th",
    placeLabel: "School",
    place: "St. Mary's Co-Ed School, Harda",
    metaLabel: "Percentage",
    meta: "90.2%",
  },
  {
    key: "graduation",
    title: "Graduation",
    placeLabel: "College",
    place: "Institute Of Engineering & Technology, Devi Ahilya Vishwavidyalaya, Indore",
    metaLabel: "Branch",
    meta: "Electronics & Telecommunication  |  9.30 CGPA",
  },
];
const TimelineCard = ({ item, isLeft }) => (
  <div className={`bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-[520px] border border-gray-700`}>
    <div className="flex">
      <div className="w-1 bg-indigo-500 rounded-md mr-4" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-[18px]">{item.title}</h3>
          <span className="text-indigo-300 text-[13px]">{item.placeLabel}</span>
        </div>

        <p className="mt-2 text-secondary text-[14px] min-h-[40px]">{item.place}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[13px] text-white opacity-80">{item.metaLabel}</span>
          <span className="text-secondary text-[14px]">{item.meta}</span>
        </div>
      </div>
    </div>
  </div>
);

const Education = () => {

  return (
    <motion.section variants={staggerContainer(0.2, 0)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0` }>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}></p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className="mt-10 relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-600 to-indigo-400 opacity-30 rounded-full" />

        <div className="flex flex-col gap-y-16">
          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={item.key}
                variants={fadeIn(isLeft ? "left" : "right", "spring", idx * 0.2, 0.8)}
                className="relative w-full flex items-center md:items-start"
              >
                <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8 md:justify-end flex" : "md:pl-8 md:justify-start flex"}`}>
                  {isLeft && (
                    <Tilt
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.03}
                      transitionSpeed={400}
                      className="w-full"
                    >
                      <div className="hover:scale-105 transform transition duration-300">
                        <TimelineCard item={item} isLeft={isLeft} />
                      </div>
                    </Tilt>
                  )}
                </div>

                <div className="relative w-0 flex-0">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 md:-top-6 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 border-indigo-500 bg-transparent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-1/2 ${!isLeft ? "md:pl-8 md:justify-start flex" : "md:pr-8 md:justify-end flex"}`}>
                  {!isLeft && (
                    <Tilt
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      scale={1.03}
                      transitionSpeed={400}
                      className="w-full"
                    >
                      <div className="hover:scale-105 transform transition duration-300">
                        <TimelineCard item={item} isLeft={isLeft} />
                      </div>
                    </Tilt>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Education, "education");
