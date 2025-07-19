import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";

export default function About() {
  const companyLogos = [
    "/images/company/download.svg",
    "/images/company/download1.svg",
    "/images/company/download2.svg",
    "/images/company/download3.svg",
    "/images/company/download4.svg",
    "/images/company/download5.svg",
    "/images/company/download6.svg",
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="">
        <section className="h-auto py-28 sm:py-20 md:py-28 lg:mx-20">
          <div className="px-4 sm:px-8 md:px-16 lg:px-20">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <h1 className="text-green-600 text-2xl sm:text-3xl font-medium">
                  Our mission
                </h1>
              </div>

              <div>
                <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight opacity-90 leading-snug sm:leading-snug lg:leading-tight">
                  We're making homeownership simpler, faster —{" "}
                  <br className="hidden sm:block" /> and most importantly, more
                  accessible for all Americans.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Status Quo Section */}
        <section className="px-4 lg:px-20 lg:py-30 py-16 lg:mx-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div>
                <h2 className="text-2xl lg:text-[32px] opacity-90 font-bold text-gray-900 mb-6">
                  The status quo is broken
                </h2>
                <p className="text-gray-600 mb-6 text-16px leading-relaxed">
                  The traditional processes around homeownership are opaque and
                  stressful. Fees aren’t transparent and some are simply
                  outrageous in size. Traditional mortgage lending is rife with
                  unnecessary fees and slow, painful processes. It’s a system
                  set up to benefit insiders — not you. Better.com CEO, Vishal
                  Garg, set out to change that.
                </p>
                <Button className="bg-green-800 hover:bg-green-900 text-white lg:mt-8 lg:px-7 lg:py-6">
                  Read Vishal's Story
                </Button>
              </div>
              <div className="relative w-full max-w-[400px] aspect-square">
                <Image
                  src="/images/vishal-mission.jpg"
                  alt="Traditional mortgage process"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How We're Changing Things */}
        <section className="bg-emerald-800 px-4 text-white pt-10">
          <div className="mx-auto max-w-7xl lg:mx-20 lg:px-20 lg:py-20 flex flex-col">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">
              How we're changing things
            </h2>
            <div className="flex flex-col gap-5 pb-10">
              <p>
                Homeownership is a huge part of our economy. Housing overall is
                a $33 trillion business, and mortgages account for $15 trillion.
                Yet home finance operates in the same way it has for decades —
                through opaque systems and expensive intermediaries whose
                interests are misaligned with consumers’.
              </p>
              <p>
                That’s why Better.com is redefining the homeownership process
                from the ground up. We’re using technology to make it faster and
                more efficient, and humans to help make it friendly and
                enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Backed By */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Backed by</h2>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-80">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="h-10 sm:h-20 object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Company timeline
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
              <div className="space-y-12">
                {[
                  {
                    year: "2016",
                    title: "Better Mortgage founded",
                    description:
                      "Founded by Vishal Garg with the mission to make homeownership more accessible.",
                  },
                  {
                    year: "2017",
                    title: "Series A funding",
                    description:
                      "Raised $15M in Series A funding to expand our digital platform.",
                  },
                  {
                    year: "2018",
                    title: "One Percent Down launched",
                    description:
                      "Introduced our revolutionary 1% down payment program.",
                  },
                  {
                    year: "2019",
                    title: "Better Cover launched",
                    description: "Launched our homeowner's insurance platform.",
                  },
                  {
                    year: "2020",
                    title: "Series B funding",
                    description:
                      "Raised $50M in Series B funding during the pandemic.",
                  },
                  {
                    year: "2021",
                    title: "Better Real Estate launched",
                    description:
                      "Expanded into real estate services to provide end-to-end solutions.",
                  },
                  {
                    year: "2022",
                    title: "Series C funding",
                    description:
                      "Raised $100M in Series C funding to accelerate growth.",
                  },
                  {
                    year: "2023",
                    title: "Better HELOC launched",
                    description:
                      "Introduced our home equity line of credit product.",
                  },
                  {
                    year: "2024",
                    title: "AI-powered underwriting",
                    description:
                      "Launched our AI-powered underwriting system for faster approvals.",
                  },
                ].map((item, index) => (
                  // <div key={index} className="relative flex items-center">
                  //   <div className="absolute left-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-x-1/2">{item.year}</div>
                  //   <div
                  //     className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"
                  //       }`}
                  //   >
                  //     <Card className="bg-gray-100">
                  //       <CardContent className="p-6">
                  //         <div className="text-green-600 font-semibold mb-2">
                  //           {item.year}
                  //         </div>
                  //         <h3 className="font-semibold text-gray-900 mb-2">
                  //           {item.title}
                  //         </h3>
                  //         <p className="text-gray-600 text-sm">
                  //           {item.description}
                  //         </p>
                  //       </CardContent>
                  //     </Card>
                  //   </div>
                  // </div>
                  <div key={index} className="relative flex items-center py-6">
                    {/* Badge showing year */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                      {item.year}
                    </div>

                    {/* Timeline card */}
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"
                      }`}
                    >
                      <Card className="bg-gray-100">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-7xl lg:mx-20 lg:px-44">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related posts
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "How to get pre-approved for a mortgage",
                  excerpt:
                    "Learn the steps to get pre-approved and what documents you'll need.",
                  date: "March 15, 2024",
                },
                {
                  title: "Understanding mortgage rates",
                  excerpt:
                    "Everything you need to know about how mortgage rates work.",
                  date: "March 10, 2024",
                },
                {
                  title: "First-time homebuyer guide",
                  excerpt: "A comprehensive guide for first-time homebuyers.",
                  date: "March 5, 2024",
                },
                {
                  title: "Refinancing your mortgage",
                  excerpt: "When and how to refinance your existing mortgage.",
                  date: "February 28, 2024",
                },
                {
                  title: "Home equity lines of credit",
                  excerpt: "Understanding HELOCs and when they make sense.",
                  date: "February 25, 2024",
                },
                {
                  title: "Closing costs explained",
                  excerpt: "Break down of all the costs involved in closing.",
                  date: "February 20, 2024",
                },
                {
                  title: "Closing costs explained",
                  excerpt: "Break down of all the costs involved in closing.",
                  date: "February 20, 2024",
                },
                {
                  title: "Closing costs explained",
                  excerpt: "Break down of all the costs involved in closing.",
                  date: "February 20, 2024",
                },
                {
                  title: "Closing costs explained",
                  excerpt: "Break down of all the costs involved in closing.",
                  date: "February 20, 2024",
                },
              ].map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                    <div className="flex items-center gap-1 text-green-800 text-sm mt-2">
                      <span>Read More</span>
                      <ArrowRight width={14} height={14} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
