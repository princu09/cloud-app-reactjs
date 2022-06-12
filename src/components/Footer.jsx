import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-10 bg-slate-900 text-gray-300 py-6 px-2">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
          <div className="">
            <h6 className="font-bold uppercase pt-2">Solutions</h6>
            <ul>
              <li className="py-1">Marketing</li>
              <li className="py-1">Analytics</li>
              <li className="py-1">Commerce</li>
              <li className="py-1">Data</li>
              <li className="py-1">Cloud</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-bold uppercase pt-2">Support</h6>
            <ul>
              <li className="py-1">Pricing</li>
              <li className="py-1">Documentation</li>
              <li className="py-1">Guides</li>
              <li className="py-1">API Status</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-bold uppercase pt-2">Company</h6>
            <ul>
              <li className="py-1">About</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Jobs</li>
              <li className="py-1">Press</li>
              <li className="py-1">Partners</li>
            </ul>
          </div>
          <div className="">
            <h6 className="font-bold uppercase pt-2">Legal</h6>
            <ul>
              <li className="py-1">Claims</li>
              <li className="py-1">Privacy</li>
              <li className="py-1">Terms</li>
              <li className="py-1">Policies</li>
              <li className="py-1">Conditions</li>
            </ul>
          </div>
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">
              The letest news, articles and resouces, sent to your inbox weekly.
            </p>
            <form action="" className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full p-2 mr-4 rounded-md mb-4"
              />
              <button className="p-2 mb-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] py-4 px-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">
            {new Date().getFullYear()} &copy; NFG | All Rights reserved.
          </p>
          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            <a
              rel="noreferrer"
              href="//facebook.com/NorthFoxGroup"
              target="_blank"
            >
              <FaFacebook className="hover:text-sky-500" />
            </a>
            <a
              rel="noreferrer"
              href="//github.com/NorthFoxGroup"
              target="_blank"
            >
              <FaGithub className="hover:text-white" />
            </a>
            <a
              rel="noreferrer"
              href="//instagram.com/NorthFoxGroup"
              target="_blank"
            >
              <FaInstagram className="hover:text-pink-400" />
            </a>
            <a
              rel="noreferrer"
              href="//twitter.com/NorthFoxGroup"
              target="_blank"
            >
              <FaTwitter className="hover:text-sky-300" />
            </a>
            <a
              rel="noreferrer"
              href="//api.whatsapp.com/send?phone=9033717372"
              target="_blank"
            >
              <FaWhatsapp className="hover:text-green-600" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
