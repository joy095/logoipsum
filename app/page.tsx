import Clients from "@/components/Clients";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import HiringProcess from "@/components/HiringProcess";
import UserGuide from "@/components/UserGuide";
import WhyHire from "@/components/WhyHire";
import Hire from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />

      <Hire />

      <WhyHire />

      <Company />

      <HiringProcess />

      <UserGuide />

      <Clients />
    </>
  );
}
