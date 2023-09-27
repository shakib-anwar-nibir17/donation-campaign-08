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

  const [isShow, setIsShow] = useState(false);
  console.log(isShow);

  const buttonShow = myDonations.length > 4;
  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {isShow
            ? myDonations.map((myDonation) => (
                <MyDonationCard
                  key={myDonation.id}
                  myDonation={myDonation}
                ></MyDonationCard>
              ))
            : myDonations
                .slice(0, 4)
                .map((myDonation) => (
                  <MyDonationCard
                    key={myDonation.id}
                    myDonation={myDonation}
                  ></MyDonationCard>
                ))}
        </div>
      )}
      {buttonShow && (
        <div className="flex justify-center">
          <button
            onClick={() => setIsShow(!isShow)}
            className={`bg-[#009444] px-6 py-4 ${
              !isShow ? "" : "hidden"
            } text-white rounded-md font-semibold  mt-4`}
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
