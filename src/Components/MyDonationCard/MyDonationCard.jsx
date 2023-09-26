import PropTypes from "prop-types";
const MyDonationCard = ({ myDonation }) => {
  const {
    picture,
    title,
    category,
    price,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = myDonation || {};

  const cardStyle = {
    color: text_button_bg_color,
    background: card_bg_color,
  };
  const categoryStyle = {
    background: category_bg_color,
  };
  const buttonStyle = {
    background: text_button_bg_color,
  };

  return (
    <div style={cardStyle} className="flex rounded-md gap-8">
      <div>
        <img className="w-[200px] h-[200px]" src={picture} alt="" />
      </div>
      <div>
        <h1
          style={categoryStyle}
          className="w-1/2 p-2 mt-3 rounded ml-2 font-bold text-center"
        >
          {category}
        </h1>
        <h3
          className="font-bold ml-2 text-2xl
         mt-2 text-black"
        >
          {title}
        </h3>
        <h3 className="font-bold text-2xl ml-2 py-2">${price}</h3>
        <button
          style={buttonStyle}
          className="text-white ml-2 p-2 font-bold rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};
MyDonationCard.propTypes = {
  myDonation: PropTypes.object,
};
export default MyDonationCard;
