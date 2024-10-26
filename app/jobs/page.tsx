import ContactUsButton from '@/components/ui/ContactUsButton';

const page = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col items-center justify-center rounded-lg bg-gray-900 px-4 py-12 shadow-lg">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-green-400">Welcome to the Jobs Page</h1>
      <p className="mb-8 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
        We are always on the lookout for amazing talent. When we have openings, they will be posted here. Stay tuned and
        check back soon!
      </p>
      <ContactUsButton />
    </div>
  );
};

export default page;
