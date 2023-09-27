import Banner from "../../Header/Banner/Banner";
import DonationContainer from "../../Components/DonationContainer/DonationContainer";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value === "") {
      setUserInput("");
    }
  };

  const handleSearchButton = (e) => {
    e.preventDefault;
    setUserInput(searchQuery);
  };
  console.log(userInput);
  return (
    <div>
      <Banner
        handleSearchButton={handleSearchButton}
        handleSearchInputChange={handleSearchInputChange}
        searchQuery={searchQuery}
      ></Banner>
      <div className="mt-10 md:py-10">
        <DonationContainer
          userInput={userInput}
          donations={donations}
        ></DonationContainer>
      </div>
    </div>
  );
};

export default Home;
