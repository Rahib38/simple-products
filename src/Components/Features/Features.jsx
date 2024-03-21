import { FaRegCircleCheck } from "react-icons/fa6";

const Features = ({ feature }) => {
  return (
    <div>
      <div>
        <p className="flex items-center gap-2">
          <FaRegCircleCheck className="text-green-500" />
          {feature}
        </p>
      </div>
     
    </div>
  );
};

export default Features;
