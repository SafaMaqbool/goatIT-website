const About = () => {
  const sections = [
    {
      title: 'Who We Are',
      text: 'At Goat IT Consulting, we empower businesses to navigate the digital landscape with innovative IT solutions tailored to your needs. Our mission is to drive growth and efficiency through strategic technology consulting, ensuring you stay ahead in a rapidly changing market.',
      imageUrl: 'https://static2.bigstockphoto.com/1/3/2/large1500/231257971.jpg',
      alt: 'People Working'
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to provide cutting-edge technology solutions that help our clients achieve operational excellence and business transformation. We are dedicated to fostering a collaborative environment where creativity and innovation thrive, with a focus on ERP solutions that streamline business operations.'
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to be a global leader in IT consulting, recognized for our commitment to excellence and innovation. We aim to empower businesses through technology, helping them unlock their full potential and achieve sustainable growth. Our web development services are designed to build impactful digital presences for our clients.'
    }
  ];

  return (
    <div className="mx-auto mt-20 flex max-w-4xl flex-col items-center gap-12 p-4">
      {/* "Who We Are" Section */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">{sections[0].title}</h2>
        <div className="mt-4 w-full max-w-3xl">
          <img
            src={sections[0].imageUrl}
            alt={sections[0].alt}
            className="h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">{sections[0].text}</p>
      </div>

      {/* 2-Column Grid Section with ERP and Web Development Images */}
      <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
        {/* ERP Image */}
        <div className="w-full">
          <img
            src="https://pioneersit.com/wp-content/uploads/2024/02/enterprise-resource-management-erp-software-system-business-resources-plan-scaled-1.jpg"
            alt="ERP Software"
            className="h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>
        {/* Web Development Image */}
        <div className="w-full">
          <img
            src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg"
            alt="Web Development"
            className="h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* "Our Mission" Section */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold uppercase leading-snug tracking-wide text-blue-100">{sections[1].title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">{sections[1].text}</p>
      </div>

      {/* "Our Vision" Section */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold uppercase leading-snug tracking-wide text-blue-100">{sections[2].title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">{sections[2].text}</p>
      </div>
    </div>
  );
};

export default About;
