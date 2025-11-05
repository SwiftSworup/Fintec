import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import unionPay from "@/public/images/Logos/unionPay-Logo.png";
import aliPay from "@/public/images/Logos/aliPay-Logo.png";
import discover from "@/public/images/Logos/discover-Logo.png";
import qPay from "@/public/images/Logos/qpay-Logo.png";
import pakQR from "@/public/images/Logos/pakQR-Logo.png";
import npci from "@/public/images/Logos/npci-Logo.png";
import smartQR from "@/public/images/Logos/smartQr-Logo.png";
import weChat from "@/public/images/Logos/weChat-Logo.png";
import visa from "@/public/images/Logos/visa-Logo.png";
import lankaPay from "@/public/images/Logos/lankaPay-Logo.png";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-0">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={unionPay}
                  width={32}
                  height={32}
                  alt="Union Pay"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={aliPay}
                  width={32}
                  height={32}
                  alt="Ali Pay"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={discover}
                  width={32}
                  height={32}
                  alt="Discover"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={qPay}
                  width={32}
                  height={32}
                  alt="Qpay"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={pakQR}
                  width={32}
                  height={32}
                  alt="Pak QR"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={npci}
                  width={32}
                  height={32}
                  alt="NPCI"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={smartQR}
                  width={32}
                  height={32}
                  alt="Smart QR"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={weChat}
                  width={24}
                  height={24}
                  alt="WeChat"
                  style={{ objectFit: 'contain' }}
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={visa}
                  width={32}
                  height={32}
                  alt="Visa"
                  style={{ objectFit: 'contain' }}
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={lankaPay}
                  width={32}
                  height={32}
                  alt="Lankapay"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Transforming Financial Services <br className="max-lg:hidden" />
              for the Future
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Seamless digital transactions, innovative payment solutions, and secure financial services—all in one platform. Power your business with Fintec.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get in Touch{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#about"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          {/* <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                 fintec.com.np
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  Welcome to Fintec Solutions
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --we provide turn-key solutions to financial institutions
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --certified with various payment schemes.
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Across different countries
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                Shaping the Future of Financial Services with 
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                Innovation and Expertise
                </span>
              </div>
            </div>
          </div> */}
          <div
  className="mx-auto max-w-3xl"
  data-aos="zoom-y-out"
  data-aos-delay={600}
>
  <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
    
    {/* Header bar */}
    <div className="relative mb-4 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
      <span className="text-[13px] font-medium text-white">
        fintec.com.np
      </span>
    </div>

    {/* Video section */}
    <div className="relative overflow-hidden rounded-xl">
      <video
        src="/images/videos/fintec-demo.mp4" // ← change to your video path
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-xl"
      />
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
