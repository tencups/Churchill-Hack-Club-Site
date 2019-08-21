import React from "react"
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <div id="contact">
      <h1 className={styles.title}>📭 Contact</h1>
      <p className={styles.contact}>
        If you have any questions about Hack Club, fill free to email us at{" "}
        <u>
          <br />
          <a
            href="mailto:churchillhackclub@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            churchillhackclub@gmail.com
          </a>
        </u>
        .<br />
        <br />
        You can also chat with us in our{" "}
        <a href="https://discordapp.com/invite/pSrxaax" target="_blank">
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
