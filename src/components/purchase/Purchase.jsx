import ProductCard from "./ProductCard";

function Purchase() {
  return (
    <section className="container mt-24">
      <h1 className="text-4xl text-center font-semibold">Make A Order Now</h1>
      <div className="grid grid-cols-3 gap-10 mt-16">
        <ProductCard title={"Beats Solo Wireless"}  price={33.90}/>
        <ProductCard title={"Beats Solo2 Wireless"} price={39.90} />
        <ProductCard title={"Beats Solo3 Wireless"} price={45.99} />
      </div>
    </section>
  );
}

export default Purchase