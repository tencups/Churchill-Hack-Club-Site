import React from "react"
import styles from "./resource.module.css"

const Resource = () => {
  return (
    <div id="resources">
      <h1 className={styles.title}>📚 Resources </h1>
      <ul className={styles.resources}>
        <p style={{ fontSize: "150%", paddingLeft: "6%" }}>
          Here are some resources to help you on your{" "}
          <a
            style={{
              fontSize: "100%",
              margin: "0",
              padding: "0",
              display: "inline-block"
            }}
            href="https://hackclub.com/workshops/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>workshop</u>
          </a>
          {"/project!"}
        </p>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/"
          >
            <p>MDN Web Docs</p>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freecodecamp.org/"
          >
            <p>freeCodeCamp</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3schools.com/"
          >
            <p>w3schools</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/getting-started.html"
          >
            <p>React Docs</p>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://p5js.org/reference/"
          >
            <p>p5js Reference</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Resource
