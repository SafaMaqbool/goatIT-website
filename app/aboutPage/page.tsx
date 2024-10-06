import { HiArrowRight } from "react-icons/hi"; // Import the arrow icon

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-4 m-16">
      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-blue-100 uppercase leading-snug tracking-wide font-bold text-center">
          Who We Are?
        </h2>
        <p className="mt-4 text-center">
          At Goat IT Consulting, we empower businesses to navigate the digital
          landscape with innovative IT solutions tailored to your needs. Our
          mission is to drive growth and efficiency through strategic technology
          consulting, ensuring you stay ahead in a rapidly changing market.
        </p>
        <h2 className="text-2xl text-blue-100 uppercase leading-snug tracking-wide font-bold text-center mt-6">
          Our Mission
        </h2>
        <p className="mt-4 text-center">
          Our mission is to provide cutting-edge technology solutions that help
          our clients achieve operational excellence and business
          transformation. We are dedicated to fostering a collaborative
          environment where creativity and innovation thrive.
        </p>
        <h2 className="text-2xl text-blue-100 uppercase leading-snug tracking-wide font-bold text-center mt-6">
          Our Vision
        </h2>
        <p className="mt-4 text-center mb-6">
          Our vision is to be a global leader in IT consulting, recognized for
          our commitment to excellence and innovation. We aim to empower
          businesses through technology, helping them unlock their full
          potential and achieve sustainable growth.
        </p>
        <div className="flex justify-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {/* Adjusted the gradient color to match Goat IT theme */}
            <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
            <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              View Our Services
              <HiArrowRight className="ml-2" /> {/* Arrow icon */}
            </span>
          </button>
        </div>
      </div>

      {/* Image Section (Responsive Bento Grid Layout) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Larger Image 1 */}
        <div className="col-span-2 md:col-span-2 md:row-span-2">
          <img
            src="https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg"
            alt="web development"
            className="object-cover w-full h-full rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          />
        </div>
        {/* Small Image 2 */}
        <div className="col-span-1">
          <img
            src="https://pioneersit.com/wp-content/uploads/2024/02/enterprise-resource-management-erp-software-system-business-resources-plan-scaled-1.jpg"
            alt="erp software"
            className="object-cover w-full h-full rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          />
        </div>
        {/* Small Image 3 */}
        <div className="col-span-1">
          <img
            src="https://static2.bigstockphoto.com/1/3/2/large1500/231257971.jpg"
            alt="People Working"
            className="object-cover w-full h-full rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          />
        </div>
        {/* Small Image 4 */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg"
            alt="Website Development"
            className="object-cover w-full h-full rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          />
        </div>
        {/* Large Image 5 */}
        <div className="col-span-2 md:col-span-2">
          <img
            src="https://www.noitechnologies.com/wp-content/uploads/Odoo-ERP-Development.png"
            alt="Odoo ERP Development"
            className="object-cover w-full h-full rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
