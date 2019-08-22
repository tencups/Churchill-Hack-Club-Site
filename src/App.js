import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Faq from "./components/Faq"
import About from "./components/About"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Card />
        <About />

        <Faq
          heading={true}
          title="When and where are the meetings?"
          content="We have meetings every Thursday at lunch in Mrs. Smith's room which is near the band room. Meetings will begin at 11:15 and end until the first bell rings. "
        />
        <Faq
          title="What are meetings like?"
          content="Depending on the week, we will be doing a range of activites from workshops, demos, hackathons and hack challenges where you can possibly win some money 😏! Members can also work together
        to form projects which they will be able to demo!"
        />
        <Faq
          title="What topics do the workshops cover?"
          content="Our workshops covers a range of topics from cybersecurity, web design, database management, Raspberry Pi computing, and many, many more!  "
        />
        <Faq
          title="Does it cost money to join?"
          content="Nope, everything is free! 🤩"
        />
        <Faq
          title="What will we be coding on?"
          content="You can either bring your own laptop or use an online IDE such as Repl.it. 💻"
        />

        <Faq title="Will there be food?" content="Maybe...  🤔" />

        <Contact />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
