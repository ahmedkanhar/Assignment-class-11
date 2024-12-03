import CarList from './CarList';

const ParentComponent = () => {
  const firstSetOfCars = [
    { name: "BMW", price: 200000, review: "4.5/5", image: "/images/bmw.png" },
    { name: "Ferrari", price: 220000, review: "4.7/5", image: "/images/ferrari.png" },
    { name: "Mercedes", price: 200000, review: "4.4/5", image: "/images/mercedes.png" },
    { name: "Nissan", price: 100000, review: "4.6/5", image: "/images/nissan.png" },
    
  ];

  const usedCars = [
    { name: "Ford Mustang", price: 150000, review: "4.6/5", image: "/images/mustang.avif" },
    { name: "Lexus", price: 175000, review: "4.8/5", image: "/images/lexus.png" },
    { name: "Range Rover", price: 270000, review: "4.3/5", image: "/images/rangerover.png" },
    { name: "Rolls Royce", price: 300000, review: "4.4/5", image: "/images/rollsroyce.png" },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 bg-black bg-opacity-50 text-white">

        {/* New Cars */}
        <CarList cars={firstSetOfCars} heading="New Cars" />

        {/* Divider a line */}
        <hr className="border-t-2 border-blue-300 my-12 mx-auto w-3/4" />

        {/* Used Cars */}
        <CarList cars={usedCars} heading="Used Cars" />
        
      </div>
    </div>
  );
};

export default ParentComponent;
