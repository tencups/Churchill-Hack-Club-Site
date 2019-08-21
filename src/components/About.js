import React from "react"
import styles from "./about.module.css"

const About = () => {
  return (
    <div id="about">
      <h1 className={styles.title}>👩‍💻 About</h1>
      <p className={styles.about}>
        Churchill Hack Club is a computer programming club at Winston Churchill
        <br />
        High School in Potomac, MD, and is a chapter of the international
        <a href="https://hackclub.com/" Hack Club /> organization. <br /> <br />
        Our weekly meetings include a wide variety of computer science topics
        for
        <br /> our members to explore and learn. Members of Churchill Hack Club
        not only
        <br /> get to learn about amazing computer science topics, but they also
        get to <br />
        compete against their peers, volunteer in their community, and showcase
        <br />
        their awesome projects. <br />
        <br /> Churchill Hack Club's goal is to help students from all
        backgrounds learn <br />
        about computer programming through teaching workshops and building
        <br /> a community where students can share their passion for
        programming. <br />
        <br />
      </p>
    </div>
  )
}

export default About
