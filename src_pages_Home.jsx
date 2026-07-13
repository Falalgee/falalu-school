import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Stats from '../components/sections/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <WhyChooseUs />
      <Stats />
    </>
  );
}