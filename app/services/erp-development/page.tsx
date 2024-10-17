import React from 'react'

const page = () => {
  return (
    <div className="m-16 p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-4xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          Odoo ERP Implementation Services
        </h1>
        <p className="max-w-[70ch] text-center text-xl">
          Transform your business with a tailored Odoo ERP solution that meets your unique requirements and scales with
          your growth.
        </p>
        {/* Image */}
      </div>
      {/* HEADINGS & CONTENT */}
      <div className="m-4 flex flex-col p-4">
        <h2 className="text-center text-2xl font-medium">
          Why Partner with GOAT IT CONSULTING for Odoo ERP Implementation?
        </h2>
        <p className="text-center text-xl mt-4">
          We are certified Odoo ERP specialists with a deep understanding of how to align the platform with your
          business goals. Our team delivers custom-tailored ERP solutions that are scalable, efficient, and designed to
          maximize ROI.
        </p>
      </div>

      {/* GRIDS */}
      <div className="grid grid-cols-3 place-items-center">
        <div>Grid 1</div>
        <div>Grid 2</div>
        <div>Grid 3</div>
        <div>Grid 4</div>
        <div>Grid 5</div>
        <div>Grid 6</div>
      </div>
    </div>
  );
}

export default page