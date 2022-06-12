import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white pt-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-2xl uppercase xs:text-xl">Pricing</h2>
          <h3 className="text-4xl font-bold text-white py-8 xs:text-3xl">
            The right price for your research.
          </h3>
          <p className="text-xl xs:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            officiis ab consequuntur ut harum laborum repellat qui consectetur
            accusamus nemo! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Quod, voluptatem maiores.
          </p>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Lite
            </span>
            <div>
              <p className="text-4xl font-bold py-4 flex">
                $3.92
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-xl py-4 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="text-xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Velit, facilis hic.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Quasi, adipisci eaque!
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Tenetur, accusamus quidem.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Dolorem, libero modi?
              </p>
              <button className="w-full py-3 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Swift
            </span>
            <div>
              <p className="text-4xl font-bold py-4 flex">
                $4.90
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-xl py-4 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="text-xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Velit, facilis hic.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Quasi, adipisci eaque!
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Tenetur, accusamus quidem.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Dolorem, libero modi?
              </p>
              <button className="w-full py-3 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Turbo
            </span>
            <div>
              <p className="text-4xl font-bold py-4 flex">
                $9.31
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-xl py-4 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="text-xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Velit, facilis hic.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Quasi, adipisci eaque!
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Tenetur, accusamus quidem.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Dolorem, libero modi?
              </p>
              <button className="w-full py-3 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
