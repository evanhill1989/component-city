"use client";
import React, { useRef, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import GridMain from "./GridTown/GridMain";
import CardMain from "./Card/CardMain";
import BannerMain from "./Banner/BannerMain";
import BadgeMain from "./Badge/BadgeMain";
import HeaderMain from "./Header/HeaderMain";
import NavigationMain from "./Navigation/NavigationMain";
import TestimonialMain from "./Testimonial/TestimonialMain";
import ToastMain from "./Toast/ToastMain";
// import ScrollNav from "./ScrollNav";

import Section from "./UI/Section";
import SectionHeader from "./UI/SectionHeader";

import { gridStyleAtom } from "../atoms/gridAtoms";

import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Main({ children }) {
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);
  const [gridDimensions, setGridDimensions] = useState({
    columnCount: 0,
    rowCount: 0,
  });
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (gridElement) {
      const columnString =
        window.getComputedStyle(gridElement).gridTemplateColumns;
      const columnCount = columnString.trim().split(/\s+/).length;

      const rowString = window.getComputedStyle(gridElement).gridTemplateRows;
      const rowCount = rowString.trim().split(/\s+/).length;
      setGridDimensions({ columnCount, rowCount });
    }
  }, [gridStyle]);

  function handleItemPropOnChange(event) {
    event.preventDefault();
    const { name, id, value } = event.target;
    setGridStyle((prevGridStyle) => ({ ...prevGridStyle, [name]: value }));
  }

  const main = useRef();

  const scrollTween = useRef();
  const snapTriggers = useRef([]);
  const scrollNavItems = useRef([]);
  const { contextSafe } = useGSAP(
    () => {
      let panels = gsap.utils.toArray(".panel"),
        scrollStarts = [0],
        snapScroll = (value) => value;

      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: "top top",
        });
      });

      ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.current.map((trigger) => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
      });

      ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
          if (!scrollTween.current) {
            let scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll));
          }
        },
      });

      ScrollTrigger.refresh();

      panels.forEach((panel, i) => {
        gsap.to(scrollNavItems.current[i], {
          scrollTrigger: {
            trigger: panel,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              gsap.to(scrollNavItems.current[i], {
                fontWeight: "bold",
              });
            },
            onLeave: () => {
              gsap.to(scrollNavItems.current[i], {
                fontWeight: "500",
              });
            },
            onEnterBack: () => {
              gsap.to(scrollNavItems.current[i], {
                fontWeight: "bold",
              });
            },
            onLeaveBack: () => {
              gsap.to(scrollNavItems.current[i], {
                fontWeight: "500",
              });
            },
          },
        });
      });
    },
    {
      dependencies: null,
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((i) => {
    scrollTween.current = gsap.to(window, {
      scrollTo: { y: snapTriggers.current[i].start, autoKill: false },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <main ref={main} className="">
      {/* <ScrollNav ref={scrollNavItems} /> */}
      <Section>
        <SectionHeader>grid</SectionHeader>
        <GridMain />
      </Section>

      <section className="panel red">Card</section>
      <section className="panel yellow">Banner</section>
      <section className="panel green">Badge</section>
      <section className="panel blue">Toast</section>
      <section className="panel indigo">Navigation</section>
      <section className="panel purple">Header</section>
      <section className="panel pink">Testimonial</section>
    </main>
  );
}
