import PropTypes from "prop-types";
const DonationDetailCard = ({ donation }) => {
  const { picture, title, description, text_button_bg_color, price } =
    donation || {};
  const buttonStyle = {
    background: text_button_bg_color,
  };
  return (
    <div className="mt-10 min-h-[70vh] relative">
      <div className="w-full relative">
        <img className="w-full bg-cover" src={picture} alt="" />
        <div
          id="div1"
          className="absolute inset-x-0 bottom-0 bg-[#0B0B0B80] h-[90px]"
        >
          <button
            style={buttonStyle}
            className="text-white p-4 font-bold rounded-md mt-4 ml-4"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="px-4">
        <h1 className="font-bold text-4xl mt-4">{title}</h1>
        <p className="text-justify mt-4">{description}</p>
      </div>
    </div>
  );
};

DonationDetailCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationDetailCard;
