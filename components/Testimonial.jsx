import React from "react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Star, StarIcon } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Paul",
      videoUrl: "https://www.youtube.com/embed/nI2yM2lJYyU",
      quote: "Paul's experience was amazing!",
    },
    {
      name: "Amanda",
      videoUrl: "https://www.youtube.com/embed/nI2yM2lJYyU",
      quote: "Amanda felt super supported.",
    },
    {
      name: "Tiara",
      videoUrl: "https://www.youtube.com/embed/nI2yM2lJYyU",
      quote:
        "I know that 100% I'm coming back to Better because I've always had such a great experience.",
    },
  ];

  const [selected, setSelected] = useState(testimonials[0]);

  return (
    <div className="h-auto">
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-full">
              <div className="flex flex-col items-center p-4">
                <div className="w-[300px] rounded-xl overflow-hidden shadow-lg mb-4">
                  <iframe
                    width="100%"
                    height="400"
                    src={selected.videoUrl}
                    title={selected.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  />
                  <div className="p-4 text-center bg-black text-white">
                    <p className="text-sm italic">"{selected.quote}"</p>
                    <p className="mt-2 text-xs text-gray-300">
                      – {selected.name}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  {testimonials.map((person) => (
                    <button
                      key={person.name}
                      onClick={() => setSelected(person)}
                      className={`px-4 py-2 rounded-full border ${selected.name === person.name
                        ? "border-green-700 text-green-700 font-semibold"
                        : "border-gray-300 text-gray-600"
                        }`}
                    >
                      {person.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[88px] tracking-tight leading-tight font-bold text-gray-900 mb-6">
                Find out why <br />
                we're better.
              </h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700 py-[29px] px-[48px] rounded-4xl text-white mb-6">
                See all our stories
              </Button>
              <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  <span className="text-gray-800 font-medium">Trustpilot</span>
                   <span className="text-gray-600 font-medium">Excellent</span>
                </div>
                <span className="text-gray-600">4.3 out of 5</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
