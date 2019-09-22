import React from "react"
import styles from "./card.module.css"
import Countdown from "react-countdown-now"

const Card = () => {
  return (
    <div>
      <h1 className={styles.card}>
        <span style={{ fontSize: "290%" }}>Churchill Hack Club</span>
        <br />
        <span style={{ fontSize: "150%", padding: "0px 1%" }}>
          A club where students can learn to code at <br />
          Winston Churchill High School
        </span>
        <br />
        <br />
        Meetings every{" "}
        <u>
          <em>Thursday</em>
        </u>{" "}
        at Lunch in{" "}
        <u>
          <em>Room 126</em>
        </u>{" "}
        or{" "}
        <u>
          <em>Mrs's Smith Room</em>
        </u>
        <br />
        <br />
        <span style={{ padding: "0px 1%" }}>
          Next Meeting is on <span style={{ fontSize: "110%" }}>9/26</span>
        </span>
        <br />
        <Countdown date={"Thu, 26 Sep 2019 11:15:00"} />
      </h1>
    </div>
  )
}

export default Card
