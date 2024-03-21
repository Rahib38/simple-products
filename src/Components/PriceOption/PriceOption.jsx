import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { option_name, price, features } = option;
  return (
    <div className="bg-blue-500 flex flex-col rounded-xl p-4 text-white">
      <div className="flex-grow">
        <h2>
          <span className="text-7xl">{price}</span>
          <span className="text-3xl">/mon</span>
        </h2>
        <h4 className="text-3xl text-center my-8">{option_name}</h4>
        {features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 rounded-lg hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
