import AnimatedButton from './ui/AnimatedButton';

const ContactSection = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-evenly px-4 md:flex-row">
      {/* Left Side - Revolutionize Your Business Text */}
      <div className="text-left">
        <p className="mb-8 max-w-[50ch] text-lg font-semibold text-white">
          Are you ready to take your business to the next level? Let's collaborate and turn your vision into reality!
        </p>
      </div>

      <AnimatedButton icon="phone" label="Contact US Now" link="/contact" />
    </div>
  );
};

export default ContactSection;
