type Car = {
  name: string;
  price: number;
  review: string;
  image: string;
};

type CarListProps = {
  cars: Car[];
  heading: string;
};

const CarList = ({ cars, heading }: CarListProps) => {
  return (
    <section className="mb-12 text-gray-800 p-6">
      <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center rounded-lg"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full max-w-xs h-40 mb-3 object-contain rounded-lg"
            />
            <h4 className="text-xl font-bold mb-2 text-indigo-900 text-center">{car.name}</h4>
            <p className="text-gray-700 mb-1 text-center">
              Price: <span className="text-green-900">${car.price}</span>
            </p>
            <p className="text-red-900 font-medium text-center">Review: {car.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
