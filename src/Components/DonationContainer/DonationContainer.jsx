import PropTypes from "prop-types";
import DonationCard from "../DonationCard/DonationCard";
const DonationContainer = ({ donations }) => {
  return (
    <div>
      <h2>This is a donation page: {donations.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {donations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

DonationContainer.propTypes = {
  donations: PropTypes.array,
};
export default DonationContainer;
