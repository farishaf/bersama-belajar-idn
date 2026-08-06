import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import {
  Hero,
  StatBar,
  ThePlace,
  StoryBanner,
  Beginning,
  Pillars,
  Impact,
  Beyond,
  NextSteps,
  Sustainability,
  TeamTeaser,
  Collaboration,
  JoinCta,
} from "@/components/landing-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <StatBar />
        <ThePlace />
        <StoryBanner />
        <Beginning />
        <Pillars />
        <Impact />
        <Beyond />
        <NextSteps />
        <Sustainability />
        <TeamTeaser />
        <Collaboration />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
