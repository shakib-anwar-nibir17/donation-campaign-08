import Banner from "../../Header/Banner/Banner";
import DonationContainer from "../../Components/DonationContainer/DonationContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <DonationContainer donations={donations}></DonationContainer>
    </div>
  );
};

export default Home;
