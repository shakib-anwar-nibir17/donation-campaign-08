import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  console.log(donation, idInt);

  const buttonStyle = {
    background: donation.text_button_bg_color,
  };

  return (
    <div className="mt-10 min-h-[70vh] relative">
      <div className="w-full relative">
        <img className="w-full bg-cover" src={donation.picture} alt="" />
        <div
          id="div1"
          className="absolute inset-x-0 bottom-0 bg-[#0B0B0B80] h-[90px]"
        >
          <button
            style={buttonStyle}
            className="text-white p-4 font-bold rounded-md mt-4 ml-4"
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>
      <div className="px-4">
        <h1 className="font-bold text-4xl mt-4">{donation.title}</h1>
        <p className="text-justify mt-4">{donation.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
