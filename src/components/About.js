import React from "react"
import styles from "./about.module.css"

const About = () => {
  return (
    <div id="about">
      <h1 className={styles.title}>👩‍💻 About</h1>
      <p style={{ width: "93vw" }} className={styles.about}>
        Churchill Hack Club is a computer programming club at Winston Churchill
        High School in Potomac, MD, and is a chapter of the international{" "}
        <a
          style={{
            fontSize: "100%",
            margin: "0",
            padding: "0",
            display: "inline-block",
            background: "-webkit-linear-gradient(#fc033d,#fc033d)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent"
          }}
          href="https://hackclub.com/"
        >
          <em> Hack Club</em>
        </a>{" "}
        organization.
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
