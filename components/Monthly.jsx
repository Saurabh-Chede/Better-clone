
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";
import copy from "copy-to-clipboard";
import { useState } from "react";

const COLORS = {
  principalAndInterest: "#006C4E",
  propertyTaxes: "#5F40FF",
  homeInsurance: "#AAAFFF",
  hoaFees: "#FFD76F",
  utilities: "#FF7B6E",
};

const Monthly = ({
  principalAndInterest = 9912,
  initialTaxes = 269,
  initialInsurance = 132,
  initialHOA = 132,
  initialUtilities = 100,
}) => {
  const [propertyTaxes, setTaxes] = useState(initialTaxes);
  const [homeInsurance, setInsurance] = useState(initialInsurance);
  const [hoaFees, setHOA] = useState(initialHOA);
  const [utilities, setUtilities] = useState(initialUtilities);

  const total =
    principalAndInterest +
    Number(propertyTaxes) +
    Number(homeInsurance) +
    Number(hoaFees) +
    Number(utilities);

  const data = [
    {
      name: "Monthly Payment",
      principalAndInterest,
      propertyTaxes,
      homeInsurance,
      hoaFees,
      utilities,
    },
  ];

  const handleCopy = () => {
    const url = window.location.href;
    copy(url);
    alert("Estimate link copied!");
  };

  return (
    <>
      <div className="bg-[#fefcf9] p-6 rounded-xl  mx-auto lg:px-16 flex lg:flex-row flex-col">
        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-medium mb-2">Monthly payment breakdown</h3>
          <p className="text-4xl font-bold mb-2">${total.toLocaleString()}/mo</p>
          <div>
            <BarChart
              width={300}
              height={100}
              data={data}
              layout="vertical"
              barSize={150}
              margin={{ top: 10, bottom: 10 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" hide />
              <Tooltip />
              {Object.keys(COLORS).map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  radius={[40, 40, 40, 40]}
                  fill={COLORS[key]}
                />
              ))}
            </BarChart>
          </div>
        </div>

        {/* Legend and inputs */}
        <div className="mt-6 flex flex-col flex-1 gap-y-4 text-sm">
          {/* Principal & Interest - display only */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS.principalAndInterest }}></span>
              <span>Principal & interest</span>
            </div>
            <span className="text-right">${principalAndInterest}</span>
          </div>

          {/* Property Taxes - editable */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS.propertyTaxes }}></span>
              <span>Property taxes</span>
            </div>
            <input
              type="number"
              className="border rounded px-2 py-3 text-right w-28"
              value={propertyTaxes}
              onChange={(e) => setTaxes(Number(e.target.value))}
            />
          </div>

          {/* Homeowners Insurance */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS.homeInsurance }}></span>
              <span>Homeowners insurance</span>
            </div>
            <input
              type="number"
              className="border rounded px-2 py-3 text-right w-28"
              value={homeInsurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
            />
          </div>

          {/* HOA Fees */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS.hoaFees }}></span>
              <span>HOA fees</span>
            </div>
            <input
              type="number"
              className="border rounded px-2 py-3 text-right w-28"
              value={hoaFees}
              onChange={(e) => setHOA(Number(e.target.value))}
            />
          </div>

          {/* Utilities */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full" style={{ background: COLORS.utilities }}></span>
              <span>Utilities</span>
            </div>
            <input
              type="number"
              className="border rounded px-2 py-3 text-right w-28"
              value={utilities}
              onChange={(e) => setUtilities(Number(e.target.value))}
            />
          </div>
        </div>

      </div>
     <div className="flex lg:justify-end lg:pr-32">
       <button
        onClick={handleCopy}
        className="mt-6 bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded"
      >
        Copy estimate link
      </button>
     </div>
    </>
  );
};

export default Monthly;


