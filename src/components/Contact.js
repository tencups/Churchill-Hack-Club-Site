import React from "react"
import styles from "./contact.module.css"
import { NONAME } from "dns"

const Contact = () => {
  return (
    <div id="contact">
      <h1 className={styles.title}>📭 Contact</h1>
      <p style={{ width: "93vw" }} className={styles.contact}>
        If you have any questions about Hack Club, fill free to email us at{" "}
        <a
          style={{
            fontSize: "90%",
            margin: "0",
            padding: "0",
            display: "inline-block"
          }}
          href="mailto:churchillhackclub@gmail.com?Subject=Hello%20again"
          target="_top"
        >
          <u>churchillhackclub@gmail.com</u>
        </a>
        <br />
        <br />
        Chat with us on our{" "}
        <a
          style={{
            fontSize: "100%",
            margin: "0",
            padding: "0",
            display: "inline-block"
          }}
          href="https://discordapp.com/invite/pSrxaax"
          target="_blank"
        >
          <u>
            <span style={{ color: "#7289da" }}>discord</span>
          </u>
        </a>{" "}
        server!
      </p>
    </div>
  )
}

export default Contact
