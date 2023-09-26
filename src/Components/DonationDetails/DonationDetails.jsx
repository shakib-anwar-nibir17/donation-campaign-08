import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailCard from "../DonationDetailsCard/DonationDetailsCard";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const donations = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  useEffect(() => {
    const lockDonation = donations.find((donation) => donation.id === idInt);
    setDonation(lockDonation);
  }, [idInt, donations]);

  return (
    <div>
      <DonationDetailCard donation={donation}></DonationDetailCard>
    </div>
  );
};

export default DonationDetails;
