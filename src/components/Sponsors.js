import React from "react";
import styled from "styled-components";

const Section = styled("div")`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Sponsors = () => {
  return (
    <Section>
      <h1>Big thanks to our sponsors!</h1>
      <a href="https://www.stickermule.com/">
        <img
          src="https://images.ctfassets.net/fo9twyrwpveg/60hOdQTUOIwWuimy0oY62a/46d0c919283b92e937c6c03895b9de21/sticker-mule-inline-light.png"
          alt="sticker mule logo"
        />
      </a>
    </Section>
  );
};

export default Sponsors;
