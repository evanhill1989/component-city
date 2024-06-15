import Image from "next/image";
import Section from "./components/Section";
import BadgeExamples from "./components/Badges/BadgeExamples";
import BadgeCreator from "./components/Badges/BadgeCreator";
import Badge from "./components/Badges/Badge";
import Banner from "./components/Banner/Banner";
import BannerExamples from "./components/Banner/BannerExamples";
import BannerCreator from "./components/Banner/BannerCreator";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Component City</h1>
      <div className="wrapper max-w-6xl">
        <Section>
          <h3 className="text-xl font-semibold">Badge Street</h3>
          <BadgeExamples />
          <BadgeCreator>
            <Badge />
          </BadgeCreator>
        </Section>
        <Section>
          <h3 className="text-xl font-semibold">Banner Way</h3>
          <BannerExamples />
          <BannerCreator>
            <Banner />
          </BannerCreator>
        </Section>
      </div>
    </main>
  );
}
