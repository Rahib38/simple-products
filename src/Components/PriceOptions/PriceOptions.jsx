import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  
 const prices= [
    {
      "option_name": "Basic Membership",
      "price": 30,
      "features": [
        "Access to cardio equipment",
        "Access to strength training equipment",
        "Locker room access",
        "Limited group fitness classes"
      ]
    },
    {
      "option_name": "Standard Membership",
      "price": 50,
      "features": [
        "Access to cardio equipment",
        "Access to strength training equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "Access to swimming pool",
        "Sauna and steam room access"
      ]
    },
    {
      "option_name": "Premium Membership",
      "price": 80,
      "features": [
        "Access to cardio equipment",
        "Access to strength training equipment",
        "Locker room access",
        "Unlimited group fitness classes",
        "Access to swimming pool",
        "Sauna and steam room access",
        "Personal training sessions (2 per month)",
        "Towel service"
      ]
    }
  ]



  return (
    <div className="m-12">
      <h2 className="text-5xl">Best prices in the town </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6
      ">
        {prices.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
