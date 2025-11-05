import Image from "next/image";
import Link from "next/link";
import unionPayLogo from "@/public/images/Logos/unionPay-Logo.png";
import visaLogo from "@/public/images/Logos/visa-Logo.png";
import alipayLogo from "@/public/images/Logos/aliPay-Logo.png";
import npciLogo from "@/public/images/Logos/npci-Logo.png";
import wechatLogo from "@/public/images/Logos/weChat-Logo.png";
import upiLogo from "@/public/images/Logos/UPI-Logo-vector.svg.webp";
import discover from "@/public/images/Logos/discover-Logo.png";

export default function FeaturesPlanet() {
  return (
    <section
      className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900"
      id="services"
    >

      <div
            className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Explore Our Products & Services
            </h2>
            <p className="text-[15px] mt-4 text-gray-100">
              Our products are certified with various payment schemes such as
              UnionPay International, Discover, AliPay, NPCI, and WeChat.
            </p>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {/* Union Pay's Product */}
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={unionPayLogo}
                  alt="Union Pay Logo"
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Union Pay's Product</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; QR Payment Acquiring Integration</li>
                <li>&bull; Virtual Card Issuance</li>
                <li>&bull; Physical Card Issuance</li>
                <li>&bull; Scan To Order</li>
                <li>&bull; POS Acquiring</li>
                <li>&bull; ATM Acquiring</li>
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>

            {/* Visa's Product */}
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={visaLogo}
                  alt="Visa Logo"
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Visa's Product</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; Unified Checkout Payment Integration</li>
                <li>&bull; QR Payment Acquiring</li>
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>

            {/* Alipay's Product */}
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={alipayLogo}
                  alt="Alipay Logo"
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Ali Pay</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; Alipay QR Payment Acquiring Solution</li>
                
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>

            {/* NPCI Product */}
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={npciLogo}
                  alt="NPCI Logo"
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>NPCI'S Product</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; NPCI QR Acquring Solution</li>
                
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>

            {/* We Chat Product */}
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={wechatLogo}
                  alt="We Chat Logo"
                  width={32}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>We Chat</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; Wechat Payment Acquring Solution</li>
               
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>

            
            <article>
              <div className="img-container bg-white rounded-full w-14 h-14 flex items-center justify-center shadow mb-2">
                <Image
                  src={discover}
                  alt="UPI Logo"
                  width={40}
                  height={25}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Discover</span>
              </h3>
              <ul className="text-[15px] text-gray-400">
                <li>&bull; Item 1</li>
                <li>&bull; Item 2</li>
              </ul>
              <p className="text-[15px] text-gray-400"></p>
            </article>
           
            {/* End of grid */}
          </div>
        </div>
      </div>
    </section>
  );
}
