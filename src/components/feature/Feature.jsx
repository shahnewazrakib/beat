function Feature() {
  const features = [
    {
      title: "Overview",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Comfortable",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Durability",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: "Battery",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy.",
    },
  ];
  return (
    <section className="bg-light_gray mt-8 lg:mt-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8 md:py-10 lg:py-16">
        {features.map((feature, index) => {
          return (
            <div key={index} className="lg:w-4/5 space-y-1 md:space-y-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                {feature.title}
              </h1>
              <p className="text-dark_gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      <span id="gallery"></span>
    </section>
  );
}

export default Feature;
