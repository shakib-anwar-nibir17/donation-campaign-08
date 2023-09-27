import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";
const DonationContainer = ({ donations, userInput }) => {
  const donationAllData = donations;
  console.log(donationAllData);

  const filteredDonations = userInput
    ? donationAllData.filter((card) =>
        card.category.toLowerCase().includes(userInput.toLowerCase())
      )
    : donationAllData;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredDonations.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

DonationContainer.propTypes = {
  donations: PropTypes.array,
  userInput: PropTypes.string,
};
export default DonationContainer;
