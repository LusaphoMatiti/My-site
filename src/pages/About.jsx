import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styling/About.css";
import Title from "../components/Title";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => setReadMore(!readMore);

  // Define animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section about" id="about">
      <div className="blurry-background"></div>
      <div className="about-content">
        <motion.div
          className="about-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <Title title="About" subTitle="Lusapho" />
          <div className="title-underline"></div>
        </motion.div>

        <div className="paragraphs">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeUp}
          >
            Hi, I'm Lusapho Matiti, but you can call me 'Ludz'. I'm a Full-Stack
            Developer who loves building websites and web applications for
            individuals and small businesses. I work with ReactJS to make web
            pages and web apps not only look good but also function smoothly and
            effectively.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeUp}
          >
            I focus on creating designs that are visually appealing and
            user-friendly, blending my skills as a UI/UX Designer to ensure
            everything looks just right on the screen and works seamlessly. I
            enjoy making web applications that are easy to use and leave a good
            impression.
          </motion.p>

          {!readMore && (
            <button
              onClick={toggleReadMore}
              className="info-btn"
              aria-label="Read more about the article"
            >
              ... Read More
            </button>
          )}

          {readMore && (
            <>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={fadeUp}
              >
                But it's not all about the code – when I'm not immersed in web
                development, you can find me exploring the great outdoors,
                working out, playing football with friends, or listening to my
                favorite songs. Life's too short to stick to just one passion,
                right?
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={fadeUp}
              >
                So, welcome to my corner of the web. Whether you’re a small
                business owner looking to bring your ideas to life or someone
                curious about web development, I’m happy you’re here. Let’s
                create something awesome together!
              </motion.p>
              <button onClick={toggleReadMore} className="info-btn">
                Show Less
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
