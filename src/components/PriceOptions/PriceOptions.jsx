import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$29.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Personal training sessions (extra charge)",
                "24/7 access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$49.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes",
                "Sauna access",
                "Towel service",
                "Nutritional counseling"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$79.99/month",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Group fitness classes",
                "Sauna access",
                "Personal training sessions (included)",
                "Massage therapy",
                "Smoothie bar access"
            ]
        }
    ];


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;