import Image from "next/image";
import Section from "./components/Section";
import BadgeExamples from "./components/BadgeExamples";
import BadgeCreator from "./components/BadgeCreator";
import Badge from "./comoponents/Badge";
export default function Home() {
  return (
    <main>
      <Section>
        <BadgeExamples />
        <BadgeCreator>
          <Badge />
        </BadgeCreator>
      </Section>
    </main>
  );
}
