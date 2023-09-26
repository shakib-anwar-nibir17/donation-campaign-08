import PropTypes from "prop-types";
const DonationCard = ({ donation }) => {
  const {
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;

  const cardStyle = {
    color: text_button_bg_color,
    background: card_bg_color,
  };
  const categoryStyle = {
    background: category_bg_color,
  };
  return (
    <div className="rounded-lg" style={cardStyle}>
      <img className="w-full" src={picture} alt="" />
      <h2
        className="w-1/4 p-2 mt-3 rounded ml-2 font-bold text-center"
        style={categoryStyle}
      >
        {category}
      </h2>
      <h2 className="font-bold ml-2 py-3">{title}</h2>
    </div>
  );
};

DonationCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationCard;
