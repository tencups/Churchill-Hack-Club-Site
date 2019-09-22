import React from "react"
import styles from "./contact.module.css"
import { NONAME } from "dns"
import { SSL_OP_SINGLE_DH_USE } from "constants"

const Contact = () => {
  return (
    <div id="contact">
      <h1 className={styles.title}>📭 Contact</h1>
      <p style={{ width: "93vw" }} className={styles.contact}>
        If you have any questions about Hack Club, fill free to email us{" "}
        <a
          className={styles.email}
          style={{
            fontSize: "90%",
            margin: "0",
            padding: "0"
          }}
          href="mailto:churchillhackclub@gmail.com?Subject=Hello%20again"
          target="_top"
        >
          <u>
            <span className={styles.email}>churchillhackclub@gmail.com</span>
          </u>
        </a>
        <a
          style={{
            fontSize: "90%",
            margin: "0",
            padding: "0"
          }}
          href="mailto:churchillhackclub@gmail.com?Subject=Hello%20again"
          target="_top"
        >
          <u>
            <span className={styles.emailhere}>here</span>
          </u>
        </a>
        <br />
        <br />
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
          <span style={{ color: "#7289da" }}>discord</span>
        </a>{" "}
        <br />
        <a
          style={{
            fontSize: "100%",
            margin: "0",
            padding: "0",
            display: "inline-block",
            background: "-webkit-linear-gradient(#f803fc, #ff8d03)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
            marginTop: "10px"
          }}
          href="https://www.instagram.com/churchill.hackclub/"
          target="_blank"
        >
          <u>
            <span style={{ color: "#7289da" }}>insta</span>
          </u>
        </a>
        {"  "}
        <br />{" "}
        <u>
          <a
            style={{
              fontSize: "100%",
              margin: "0",
              padding: "0",
              display: "inline-block",
              background:
                "-webkit-linear-gradient(#2EB67D, #36C5F0,#E01E5A,#ECB22E)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
              marginTop: "10px"
            }}
            href="https://hackclub.com/community/"
            target="_blank"
          >
            <u>
              <span style={{ color: "#7289da" }}>slack</span>
            </u>
          </a>
          {"  "}
        </u>
      </p>
    </div>
  )
}

export default Contact
