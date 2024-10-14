import React from 'react'
import edolutions from '@/public/edolutions logo.png'
import lunar from '@/public/lunar logo.jpg'
import Image from 'next/image';

const Testimonials = () => {
    const Testimonials = [
      {
        text: "Working with GOAT for our ERP development has been a transformative experience. Their team truly understood our operational challenges and delivered a tailored solution that streamlined our processes, enhanced our data management, and improved overall efficiency. From the initial consultation to the final implementation, their professionalism and technical expertise were exceptional. We couldn't have asked for a better partner.",
        name: 'Talha Sami',
        title: 'CEO @ Edolutions',
        image: edolutions
      },
      {
        text: 'The ERP system developed by GOAT has revolutionized the way we manage our inventory, orders, and customer relationships. Their ability to customize the platform to our specific business needs was remarkable. The seamless integration of all our processes has saved us time and resources, allowing us to focus on growth. We highly recommend GOAT to any company looking for a reliable ERP solution.',
        name: 'Usman Mehanti',
        title: 'CEO @ Lunar Furniture',
        image: lunar
      }
    ];
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          What our Clients say
        </h2>
        <div className='overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] max-w-sm mx-auto md:text'>
          <div className="flex gap-5">
            {Testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="max-w-xs flex-none rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(30,144,255,.3),rgb(75,0,130,.3))] p-6"
              >
                <div className="text-lg tracking-tight">{testimonial.text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <Image src={testimonial.image} alt="logo" className="h-11 w-11 rounded-lg" />
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials