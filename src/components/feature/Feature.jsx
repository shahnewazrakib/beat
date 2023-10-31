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
    <section className="bg-light_gray mt-14">
      <div className="container grid grid-cols-2 gap-10 py-16">
        {features.map((feature, index) => {
          return (
            <div key={index} className="w-4/5 space-y-3">
              <h1 className="text-3xl font-semibold">{feature.title}</h1>
              <p className="text-dark_gray leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Feature;
