import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight mt-0 mb-2">
            Bienvenidos a nuestra tienda
          </h1>
          <p className="text-2xl text-gray-700">
            Encuentra los mejores productos aquí!
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            className="h-80 w-full object-cover"
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
