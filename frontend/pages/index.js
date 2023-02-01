import Style from "../styles/index.module.css";
import HeroSection from "../components/HeroSection/HeroSection";
import Service from "@/components/Service/Service";
import BigNFTSlider from "@/components/BigNFTSlider/BigNFTSlider";
import Subscribe from "@/components/Subscribe/Subscribe";
import Title from '../components/Title/Title'
import Category from "@/components/Category/Category";
import Filter from "@/components/Filter/Filter";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider/>
      <Title heading="Future NFTs" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <Title heading="Browse by category" paragraph="Explore the NFTs and Categories." />
      <Category />
      <Subscribe/>
    </div>
  );
};

export default Home;
