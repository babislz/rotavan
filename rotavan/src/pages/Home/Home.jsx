import AboutUs from "../../components/AboutUs/AboutUs";
import Card from "../../components/Cards/Cards";
import Header1 from "../../components/Header/Header";
import Intro from "../../components/Introduction/Intro";
import Welcome from "../../components/Welcome/Welcome";
import WhyUsSec from "../../components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col">
      <Header1 />
      <main className="pt-48">
        <section>
          <Intro />
          <Welcome />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <WhyUsSec />
        </section>
        <section>
          <Card />
        </section>
      </main>
    </div>
  );
};

export default Home;