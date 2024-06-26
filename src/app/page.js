import Image from "next/image";
import Section from "../components/Section";
import BadgeExamples from "../components/Badges/BadgeExamples";
import BadgeCreator from "../components/Badges/BadgeCreator";
import Badge from "../components/Badges/Badge";
import Banner from "../components/Banner/Banner";
import BannerExamples from "../components/Banner/BannerExamples";
import BannerCreator from "../components/Banner/BannerCreator";

import GridCreator from "../components/GridTown/GridCreator";
import Main from "../components/Main";

export default function Home() {
  return (
    <Main>
      <div className="wrapper max-w-6xl">
        <Section></Section>
        <Section>
          <h3 className="text-xl font-semibold">Badge Street</h3>
          <BadgeExamples />
          <BadgeCreator>
            <Badge />
          </BadgeCreator>
        </Section>
        <Section>
          <h3 className="text-xl px-52 font-semibold">Banner Way</h3>
          <BannerExamples />
          <BannerCreator>
            <Banner />
          </BannerCreator>
        </Section>
        <Section>
          <h3 className="text-xl px-52 font-semibold">Grid Town</h3>
          <GridCreator />
        </Section>
      </div>
    </Main>
  );
}
