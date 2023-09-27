import Banner from "../../Header/Banner/Banner";
import DonationContainer from "../../Components/DonationContainer/DonationContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-10 md:py-10">
        <DonationContainer donations={donations}></DonationContainer>
      </div>
    </div>
  );
};

export default Home;
