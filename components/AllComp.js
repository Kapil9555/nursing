'use client'
import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import Home from "../components/Home";
import HeaderDrawer from "../components/HeaderDrawer";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Awards from "../components/Awards";

export default function AllComp() {
  // Create refs for each component
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const awardsRef = useRef(null);

  // Scroll to the component based on the passed element
  const handleScrollComp = (ele) => {
    const options = {
      behavior: "smooth",
      block: "start", // Ensures the element aligns to the top of the viewport
    };

    if (ele === "home") {
      homeRef.current?.scrollIntoView(options);
    } else if (ele === "about") {
      aboutRef.current?.scrollIntoView(options);
    } else if (ele === "work") {
      workRef.current?.scrollIntoView(options);
    } else if (ele === "contact") {
      contactRef.current?.scrollIntoView(options);
    } else if (ele === "awards") {
      awardsRef.current?.scrollIntoView(options);
    }
  };

  return (
    <>
      <HeaderDrawer handleScrollComp={handleScrollComp} />
      <Container maxWidth disableGutters sx={{overflow:'hidden'}}>
        <Grid container>
          <Grid container ref={homeRef}>
            <Home />
          </Grid>
          <Grid container ref={aboutRef}>
            <About />
          </Grid>
          <Grid container ref={workRef}>
            <Work />
          </Grid>
          <Grid container ref={contactRef}>
            <Contact />
          </Grid>
          {/* <Grid container ref={awardsRef}>
            <Awards />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
