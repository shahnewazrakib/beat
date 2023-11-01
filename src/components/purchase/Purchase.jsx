import ProductCard from "./ProductCard";

function Purchase() {
  return (
    <section className="container mt-14 sm:mt-18 2xl:mt-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
        Make A Order Now
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-10 mt-8 md:mt-16">
        <ProductCard title={"Beats Solo Wireless"} price={33.9} />
        <ProductCard title={"Beats Solo2 Wireless"} price={39.9} />
        <ProductCard title={"Beats Solo3 Wireless"} price={45.99} />
      </div>
      <span id="review"></span>
    </section>
  );
}

export default Purchase