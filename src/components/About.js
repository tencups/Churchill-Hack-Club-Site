import React from "react"
import styles from "./about.module.css"

const About = () => {
  return (
    <div id="about">
      <h1 className={styles.title}>👩‍💻 About</h1>
      <p style={{ width: "93vw" }} className={styles.about}>
        Churchill Hack Club is a computer programming club at Winston Churchill
        High School in Potomac, MD, and is a chapter of the international
        <a href="https://hackclub.com/" Hack Club /> organization.
      </p>
      <br />
      <p style={{ width: "93vw" }} className={styles.about}>
        Our weekly meetings include a wide variety of computer science topics
        for our members to explore and learn. Members of Churchill Hack Club not
        only get to learn about amazing computer science topics, but they also
        get to compete against their peers, volunteer in their community, and
        showcase their awesome projects.
      </p>
      <br />
      <p style={{ width: "93vw" }} className={styles.about}>
        Churchill Hack Club's goal is to help students from all backgrounds
        learn about computer programming through teaching workshops and building
        a community where students can share their passion for programming.
      </p>
    </div>
  )
}

export default About
