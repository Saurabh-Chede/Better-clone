// // import React from 'react'

// // function Monthly() {
// //     return (
// //         <div>
// //             <section class="bg-accentBorderInverseSecondary pt-4xl">
// //                 <div class="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
// //                     <div class="grid md:grid-cols-2">
// //                         <div>
// //                             <h4 class="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
// //                                 Monthly payment breakdown
// //                             </h4>
// //                             <p class="leading-body m-0 p-0 text-left mt-lg overflow-hidden text-3xl font-bold text-textPrimary" data-testid="sum">
// //                                 $10,541/mo
// //                             </p>
// //                             <div class="mt-2xl">
// //                                 <svg height="100" id="svgelem" width="100%" xmlns="http://www.w3.org/2000/svg">
// //                                     <rect data-testid="principalPill" height="80" rx="40" ry="40" class="duration-300 ease-in-out fill-backgroundInverseSecondary" width="496.49331182999714" x="0" y="0"></rect>
// //                                     <rect data-testid="taxesPill" height="80" rx="6.636941466654017" ry="6.636941466654017" class="duration-300 ease-in-out fill-infoSecondary" width="13.273882933308034" x="496.49331182999714" y="0"></rect>
// //                                     <rect data-testid="insurancePill" height="80" rx="3.3059482022578504" ry="3.3059482022578504" class="duration-300 ease-in-out fill-graph2Tertiary" width="6.611896404515701" x="509.76719476330516" y="0"></rect>
// //                                     <rect data-testid="hoaPill" height="80" rx="3.3059482022578504" ry="3.3059482022578504" class="duration-300 ease-in-out fill-graph4Tertiary" width="6.611896404515701" x="516.3790911678209" y="0"></rect>
// //                                     <rect data-testid="utilitiesPill" height="80" rx="2.5045062138317045" ry="2.5045062138317045" class="duration-300 ease-in-out fill-graph3Tertiary" width="5.009012427663409" x="522.9909875723366" y="0"></rect>
// //                                 </svg>
// //                                 <div class="md: block p-lg mt-2xl rounded-base shadow-[0_0_12px_rgba(41,43,41,0.12)] opacity-0 duration-300 ease-in-out">
// //                                     <h4 class="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mb-lg">
// //                                         Principal &amp; interest
// //                                     </h4>
// //                                     <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base" data-testid="description">
// //                                         Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.
// //                                     </p>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         <div>

// //                             <div class="flex justify-between h-3xl mb-base">
// //                                 <div class="flex items-center text-textPrimary w-1/2">
// //                                     <div class="rounded-sm h-base w-[5px] mr-xs bg-backgroundInverseSecondary"></div>
// //                                     <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Principal &amp; interest</p>
// //                                 </div>
// //                                 <p class="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-interactiveForegroundSecondary" data-testid="principal-&amp;-interest">
// //                                     $9,912
// //                                 </p>
// //                             </div>


// //                             <div class="flex justify-between h-3xl mb-base">
// //                                 <div class="flex items-center text-textPrimary w-1/2">
// //                                     <div class="rounded-sm h-base w-[5px] mr-xs bg-infoSecondary"></div>
// //                                     <label class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base" for="input-taxes" id="taxes-label">Property taxes</label>
// //                                 </div>
// //                                 <div class="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
// //                                     <div class="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 h-3xl">
// //                                         <div class="absolute left-xs top-[20px] font-bold z-1">$</div>
// //                                         <input type="number" id="input-taxes" class="text-right pl-[32px] outline-none border-none bg-transparent w-full h-full font-bold" value="265" />
// //                                     </div>
// //                                 </div>
// //                             </div>


// //                             <div class="flex justify-between h-3xl mb-base">
// //                                 <div class="flex items-center text-textPrimary w-1/2">
// //                                     <div class="rounded-sm h-base w-[5px] mr-xs bg-graph2Tertiary"></div>
// //                                     <label class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base" for="input-insurance" id="insurance-label">Homeowners insurance</label>
// //                                 </div>
// //                                 <div class="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
// //                                     <div class="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 h-3xl">
// //                                         <div class="absolute left-xs top-[20px] font-bold z-1">$</div>
// //                                         <input type="number" id="input-insurance" class="text-right pl-[32px] outline-none border-none bg-transparent w-full h-full font-bold" value="132" />
// //                                     </div>
// //                                 </div>
// //                             </div>


// //                             <div class="flex justify-between h-3xl mb-base">
// //                                 <div class="flex items-center text-textPrimary w-1/2">
// //                                     <div class="rounded-sm h-base w-[5px] mr-xs bg-graph4Tertiary"></div>
// //                                     <label class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base" for="input-hoa" id="hoa-label">HOA fees</label>
// //                                 </div>
// //                                 <div class="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
// //                                     <div class="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 h-3xl">
// //                                         <div class="absolute left-xs top-[20px] font-bold z-1">$</div>
// //                                         <input type="number" id="input-hoa" class="text-right pl-[32px] outline-none border-none bg-transparent w-full h-full font-bold" value="132" />
// //                                     </div>
// //                                 </div>
// //                             </div>


// //                             <div class="mb-lg" data-orientation="vertical">
// //                                 <div data-state="closed" data-orientation="vertical">
// //                                     <h3 class="flex">
// //                                         <button type="button" class="flex flex-1 items-center justify-between py-4 font-bold">
// //                                             <div class="flex justify-between h-3xl h-auto mb-0 w-full">
// //                                                 <div class="flex items-center text-textPrimary w-auto">
// //                                                     <div class="rounded-sm h-base w-[5px] mr-xs bg-graph3Tertiary"></div>
// //                                                     <p class="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base" id="utilities-label">Utilities</p>
// //                                                 </div>
// //                                                 <span class="leading-body text-textPrimary text-base w-[144px] text-left font-bold">$100</span>
// //                                             </div>
// //                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4">
// //                                                 <path d="m6 9 6 6 6-6"></path>
// //                                             </svg>
// //                                         </button>
// //                                     </h3>
// //                                 </div>
// //                             </div>


// //                             <button class="inline-block rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted text-interactiveForegroundSecondary bg-interactiveSecondary hover:bg-accentSecondary focus:bg-accentSecondary px-xl h-3xl w-auto mb-xs">
// //                                 Copy estimate link
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </section>

// //         </div>
// //     )
// // }

// // export default Monthly

// import React from 'react';

// function Monthly({
//   principalAndInterest,
//   propertyTaxes,
//   homeInsurance,
//   hoaFees,
//   utilities,
//   totalMonthlyPayment,
// }) {
//   return (
//     <div>
//       <section className="bg-accentBorderInverseSecondary pt-4xl">
//         <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
//           <div className="grid md:grid-cols-2">
//             {/* Left Side Summary */}
//             <div>
//               <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
//                 Monthly payment breakdown
//               </h4>
//               <p className="leading-body m-0 p-0 text-left mt-lg overflow-hidden text-3xl font-bold text-textPrimary" data-testid="sum">
//                 ${totalMonthlyPayment.toLocaleString()}/mo
//               </p>
//               <div className="mt-2xl">
//                 {/* Fake SVG bar representation */}
//                 <svg height="100" id="svgelem" width="100%" xmlns="http://www.w3.org/2000/svg">
//                   <rect height="80" rx="40" ry="40" className="fill-backgroundInverseSecondary" width={principalAndInterest} x="0" y="0"></rect>
//                   <rect height="80" rx="6" ry="6" className="fill-infoSecondary" width={propertyTaxes} x={principalAndInterest} y="0"></rect>
//                   <rect height="80" rx="4" ry="4" className="fill-graph2Tertiary" width={homeInsurance} x={principalAndInterest + propertyTaxes} y="0"></rect>
//                   <rect height="80" rx="4" ry="4" className="fill-graph4Tertiary" width={hoaFees} x={principalAndInterest + propertyTaxes + homeInsurance} y="0"></rect>
//                   <rect height="80" rx="3" ry="3" className="fill-graph3Tertiary" width={utilities} x={principalAndInterest + propertyTaxes + homeInsurance + hoaFees} y="0"></rect>
//                 </svg>
//               </div>
//             </div>

//             {/* Right Side Breakdown */}
//             <div>
//               {[
//                 {
//                   label: 'Principal & interest',
//                   value: principalAndInterest,
//                   color: 'bg-backgroundInverseSecondary',
//                 },
//                 {
//                   label: 'Property taxes',
//                   value: propertyTaxes,
//                   color: 'bg-infoSecondary',
//                   inputId: 'input-taxes',
//                 },
//                 {
//                   label: 'Homeowners insurance',
//                   value: homeInsurance,
//                   color: 'bg-graph2Tertiary',
//                   inputId: 'input-insurance',
//                 },
//                 {
//                   label: 'HOA fees',
//                   value: hoaFees,
//                   color: 'bg-graph4Tertiary',
//                   inputId: 'input-hoa',
//                 },
//               ].map((item, index) => (
//                 <div
//                   className="flex justify-between h-3xl mb-base"
//                   key={index}
//                 >
//                   <div className="flex items-center text-textPrimary w-1/2">
//                     <div className={`rounded-sm h-base w-[5px] mr-xs ${item.color}`}></div>
//                     <label
//                       className="font-normal text-textPrimary text-base"
//                       htmlFor={item.inputId}
//                     >
//                       {item.label}
//                     </label>
//                   </div>
//                   <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
//                     <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder h-3xl">
//                       <div className="absolute left-xs top-[20px] font-bold z-1">$</div>
//                       <input
//                         type="number"
//                         id={item.inputId}
//                         className="text-right pl-[32px] outline-none border-none bg-transparent w-full h-full font-bold"
//                         value={item.value}
//                         readOnly
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Utilities */}
//               <div className="mb-lg">
//                 <div>
//                   <h3 className="flex">
//                     <button type="button" className="flex flex-1 items-center justify-between py-4 font-bold">
//                       <div className="flex justify-between h-3xl w-full">
//                         <div className="flex items-center text-textPrimary">
//                           <div className="rounded-sm h-base w-[5px] mr-xs bg-graph3Tertiary"></div>
//                           <p className="font-normal text-textPrimary text-base">Utilities</p>
//                         </div>
//                         <span className="text-base font-bold">${utilities.toLocaleString()}</span>
//                       </div>
//                     </button>
//                   </h3>
//                 </div>
//               </div>

//               {/* Copy Button */}
//               <button className="inline-block rounded-base text-base font-bold bg-interactiveSecondary text-white px-xl h-3xl w-auto mb-xs hover:bg-accentSecondary transition">
//                 Copy estimate link
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Monthly;

// "use client";

// import React, { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const COLORS = ["#2563EB", "#34D399", "#FBBF24", "#EC4899", "#A78BFA"];

// export default function Monthly({
//   principalAndInterest,
//   propertyTaxes: initTaxes,
//   homeInsurance: initInsurance,
//   hoaFees: initHOA,
//   utilities,
//   totalMonthlyPayment,
// }) {
//   const [propertyTaxes, setPropertyTaxes] = useState(initTaxes);
//   const [homeInsurance, setHomeInsurance] = useState(initInsurance);
//   const [hoaFees, setHoaFees] = useState(initHOA);
//   const [copied, setCopied] = useState(false);

//   const updatedTotal =
//     principalAndInterest +
//     Number(propertyTaxes) +
//     Number(homeInsurance) +
//     Number(hoaFees) +
//     utilities;

//   const data = [
//     { name: "Principal & Interest", value: principalAndInterest },
//     { name: "Taxes", value: Number(propertyTaxes) },
//     { name: "Insurance", value: Number(homeInsurance) },
//     { name: "HOA", value: Number(hoaFees) },
//     { name: "Utilities", value: utilities },
//   ];

//   const handleCopy = () => {
//     const url = window.location.href;
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="bg-gray-50 p-6 rounded-lg shadow-sm w-full max-w-2xl">
//       <h3 className="text-2xl font-bold mb-2">Your monthly payment</h3>
//       <p className="text-3xl font-semibold text-green-700 mb-4">
//         ${updatedTotal.toLocaleString()}/mo
//       </p>

//       {/* Copy Button */}
//       <button
//         onClick={handleCopy}
//         className="text-sm bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700"
//       >
//         {copied ? "Copied!" : "Copy Estimate Link"}
//       </button>

//       {/* Pie Chart */}
//       <PieChart width={300} height={200}>
//         <Pie
//           data={data}
//           cx={150}
//           cy={100}
//           innerRadius={50}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//           label
//         >
//           {data.map((entry, index) => (
//             <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>

//       {/* Editable breakdown */}
//       <div className="space-y-3 mt-4 text-sm">
//         <div className="flex justify-between">
//           <span>Principal & Interest:</span>
//           <span>${principalAndInterest.toLocaleString()}</span>
//         </div>
//         <div className="flex justify-between">
//           <label htmlFor="taxes">Property Taxes:</label>
//           <input
//             id="taxes"
//             type="number"
//             className="border px-2 py-1 rounded w-28"
//             value={propertyTaxes}
//             onChange={(e) => setPropertyTaxes(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-between">
//           <label htmlFor="insurance">Home Insurance:</label>
//           <input
//             id="insurance"
//             type="number"
//             className="border px-2 py-1 rounded w-28"
//             value={homeInsurance}
//             onChange={(e) => setHomeInsurance(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-between">
//           <label htmlFor="hoa">HOA Fees:</label>
//           <input
//             id="hoa"
//             type="number"
//             className="border px-2 py-1 rounded w-28"
//             value={hoaFees}
//             onChange={(e) => setHoaFees(e.target.value)}
//           />
//         </div>
//         <div className="flex justify-between">
//           <span>Utilities:</span>
//           <span>${utilities.toLocaleString()}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import copy from "copy-to-clipboard";

// const COLORS = ["#1A936F", "#FF5733", "#FFC107", "#00A9F4", "#8E44AD"];

// export default function Monthly({
//   principalAndInterest,
//   propertyTaxes,
//   homeInsurance,
//   hoaFees,
//   utilities,
//   totalMonthlyPayment,
//   onChange,
// }) {
//   const breakdownData = [
//     { name: "Principal & Interest", value: principalAndInterest },
//     { name: "Taxes", value: propertyTaxes },
//     { name: "Insurance", value: homeInsurance },
//     { name: "HOA", value: hoaFees },
//     { name: "Utilities", value: utilities },
//   ];

//   const handleCopy = () => {
//     const copyText = `Total Monthly: $${totalMonthlyPayment}\nBreakdown:\n${breakdownData
//       .map((item) => `${item.name}: $${item.value}`)
//       .join("\n")}`;
//     copy(copyText);
//     alert("Monthly breakdown copied to clipboard!");
//   };

//   return (
//     <section className="bg-accentBorderInverseSecondary pt-4xl">
//       <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Chart Section */}
//           <div>
//             <p className="text-heading font-bold text-4xl mb-2">
//               ${totalMonthlyPayment.toLocaleString()}/mo
//             </p>
//             <p className="text-sm text-gray-600 mb-4">Total Monthly Payment</p>

//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={breakdownData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={90}
//                   fill="#8884d8"
//                   label
//                 >
//                   {breakdownData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>

//             <button
//               onClick={handleCopy}
//               className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md"
//             >
//               Copy Estimate
//             </button>
//           </div>

//           {/* Input Fields */}
//           <div className="grid grid-cols-1 gap-4">
//             <div className="flex justify-between">
//               <label htmlFor="taxes">Property Taxes</label>
//               <input
//                 type="number"
//                 id="taxes"
//                 name="propertyTaxes"
//                 value={propertyTaxes}
//                 onChange={onChange}
//                 className="border rounded px-2 py-1 w-28"
//               />
//             </div>

//             <div className="flex justify-between">
//               <label htmlFor="insurance">Home Insurance</label>
//               <input
//                 type="number"
//                 id="insurance"
//                 name="homeInsurance"
//                 value={homeInsurance}
//                 onChange={onChange}
//                 className="border rounded px-2 py-1 w-28"
//               />
//             </div>

//             <div className="flex justify-between">
//               <label htmlFor="hoa">HOA Fees</label>
//               <input
//                 type="number"
//                 id="hoa"
//                 name="hoaFees"
//                 value={hoaFees}
//                 onChange={onChange}
//                 className="border rounded px-2 py-1 w-28"
//               />
//             </div>

//             <div className="flex justify-between">
//               <label>Utilities</label>
//               <span>${utilities}</span>
//             </div>

//             <div className="flex justify-between">
//               <label>Principal & Interest</label>
//               <span>${principalAndInterest}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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


