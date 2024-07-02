import Image from "next/image";
import Section from "../components/Section";
import BadgeExamples from "../components/Badge/BadgeExamples";
import BadgeCreator from "../components/Badge/BadgeCreator";
import Badge from "../components/Badge/Badge";
import Banner from "../components/Banner/Banner";
import BannerExamples from "../components/Banner/BannerExamples";
import BannerCreator from "../components/Banner/BannerCreator";

import GridCreator from "../components/GridTown/GridCreator";
import Main from "../components/Main";
import GridMain from "../components/GridTown/GridMain";
import CardMain from "../components/Card/CardMain";
import BannerMain from "../components/Banner/BannerMain";
import BadgeMain from "../components/Badge/BadgeMain";
import HeaderMain from "../components/Header/HeaderMain";
import NavigationMain from "../components/Navigation/NavigationMain";
import TestimonialMain from "../components/Testimonial/TestimonialMain";
import ToastMain from "../components/Toast/ToastMain";

export default function Home() {
  return (
    <Main>
      <GridMain />
      <CardMain />
      <BannerMain />
      <BadgeMain />
      <ToastMain />
      <NavigationMain />
      <HeaderMain />
      <TestimonialMain />
    </Main>
  );
}
