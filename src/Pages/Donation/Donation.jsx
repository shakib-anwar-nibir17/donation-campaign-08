import { useEffect, useState } from "react";
import MyDonationCard from "../../Components/MyDonationCard/MyDonationCard";

const Donation = () => {
  const [myDonations, setMyDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("Donation"));

    if (donatedItems) {
      setMyDonations(donatedItems);
    } else {
      setNoFound("No donation has been made");
    }
  }, []);
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-5">
          {myDonations.map((myDonation) => (
            <MyDonationCard
              key={myDonation.id}
              myDonation={myDonation}
            ></MyDonationCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
