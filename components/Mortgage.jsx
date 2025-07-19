"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Monthly from "./Monthly";

export default function Mortgage() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState("401501");

  // Calculate monthly payment
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const principalAndInterest = Math.round(monthlyPayment);
  const propertyTaxes = Math.round((homePrice * 0.012) / 12);
  const homeInsurance = Math.round((homePrice * 0.0035) / 12);
  const hoaFees = 150;
  const utilities = 200;

  const totalMonthlyPayment =
    principalAndInterest + propertyTaxes + homeInsurance + hoaFees + utilities;

  const handleDownPaymentChange = (value) => {
    const amount = Number.parseInt(value) || 0;
    setDownPayment(amount);
    setDownPaymentPercent(Math.round((amount / homePrice) * 100));
  };

  const handleDownPaymentPercentChange = (value) => {
    const percent = Number.parseInt(value) || 0;
    setDownPaymentPercent(percent);
    setDownPayment(Math.round((homePrice * percent) / 100));
  };

  return (
    <div className="min-h-screen">
      <Navbar forceWhiteNav />
      <div className="">
        <div className="bg-green-50 px-4 sm:px-6 lg:px-14 py-8 lg:py-16 mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#292b29] mb-4">
              Mortgage Calculator
            </h1>
            <p className="text-gray-600 mb-8">
              Free mortgage calculator to estimate your monthly mortgage
              payments with annual amortization.
              <br />
              Discover how all factors can affect your payment.
            </p>

            <div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* <div>
                  <Label className="text-base text-gray-600 mb-2 block">
                    Home price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#292b29] text-2xl lg:text-4xl font-bold">
                      $
                    </span>
                    <Input
                      type="text"
                      value={homePrice.toLocaleString()}
                      onChange={(e) =>
                        setHomePrice(
                          Number(e.target.value.replace(/,/g, "")) || 0
                        )
                      }
                      className="h-[64px] text-2xl  lg:text-4xl px-2 lg:px-4 text-[#292b29]  font-bold border border-green-900 bg-white rounded-lg shadow-sm"
                    />
                  </div>
                </div> */}
                <div>
                  <Label className="text-base text-gray-600 mb-2 block">
                    Home price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#292b29] text-2xl lg:text-4xl font-bold">
                      $
                    </span>
                    <Input
                      type="text"
                      value={homePrice.toLocaleString()}
                      onChange={(e) =>
                        setHomePrice(
                          Number(e.target.value.replace(/,/g, "")) || 0
                        )
                      }
                      className="h-[64px] text-2xl md:text-3xl lg:text-4xl pl-10 pr-4 text-[#292b29] font-bold border border-green-900 bg-white rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    Monthly payment
                  </Label>
                  <div className="text-3xl font-bold text-gray-900 lg:mt-3 md:mt-6 lg:text-5xl">
                    ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
                  </div>
                </div>
                <div className="flex items-end lg:justify-end">
                  <Button className="bg-[#017848] lg:w-[60%] text-white lg:px-10 lg:py-8">
                    Get pre-approved
                  </Button>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative mt-8 mb-6 mx-4">
                  <input
                    type="range"
                    min={100000}
                    max={1000000}
                    step={10000}
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full h-1 rounded-full appearance-none cursor-pointer bg-gray-200 accent-emerald-800"
                    style={{
                      backgroundImage: `linear-gradient(to right, #065f46 ${
                        (homePrice - 100000) / 9000
                      }%, #e5e7eb ${(homePrice - 100000) / 9000}%)`,
                    }}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {/* ZIP code */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    ZIP code
                  </Label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="h-[56px] w-full text-lg font-semibold border border-gray-300 rounded-md px-2.5
                     focus:border-emerald-700 focus:shadow-[0_0_0_3px_inset] focus:shadow-emerald-700 
                              hover:border-emerald-700 hover:shadow-[0_0_0_3px_inset] hover:shadow-emerald-700 
                                transition duration-300 outline-none focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* Down payment */}
                <div className="flex gap-2">
                  <div className="relative items-center w-[80%]">
                    <Label className="text-sm text-gray-600 mb-2 block">
                      Down payment
                    </Label>
                    <span className="absolute left-3 top-[42px] text-black text-lg font-bold">
                      $
                    </span>
                    <input
                      type="text"
                      value={downPayment.toLocaleString()}
                      onChange={(e) =>
                        handleDownPaymentChange(
                          e.target.value.replace(/,/g, "")
                        )
                      }
                      className="pl-7 h-[56px] w-full text-lg font-semibold border border-gray-300 rounded-md 
                              focus:border-emerald-700 focus:shadow-[0_0_0_3px_inset] focus:shadow-emerald-700 
                              hover:border-emerald-700 hover:shadow-[0_0_0_3px_inset] hover:shadow-emerald-700 
                                transition duration-300 outline-none focus:ring-0 focus:outline-none px-2.5"
                    />
                  </div>

                  {/* Percentage (20%) */}
                  <div className="relative w-[20%]">
                    <Label className="text-sm text-gray-600 mb-2 block invisible">
                      %
                    </Label>
                    <input
                      type="text"
                      value={downPaymentPercent}
                      onChange={(e) =>
                        handleDownPaymentPercentChange(
                          e.target.value.replace("%", "")
                        )
                      }
                      className="pr-5 h-[56px] w-full text-lg font-semibold border border-gray-300 rounded-md px-2.5 
                       focus:border-emerald-700 focus:shadow-[0_0_0_3px_inset] focus:shadow-emerald-700 
                              hover:border-emerald-700 hover:shadow-[0_0_0_3px_inset] hover:shadow-emerald-700 
                                transition duration-300 outline-none focus:ring-0 focus:outline-none "
                    />
                    <span className="absolute right-1 top-[42px] text-black text-lg font-bold">
                      %
                    </span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    Interest rate
                  </Label>
                  <div className="relative">
                    <input
                      type="text"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="h-[56px] w-full text-lg font-semibold border border-gray-300 rounded-md px-2.5
                       focus:border-emerald-700 focus:shadow-[0_0_0_3px_inset] focus:shadow-emerald-700 
                              hover:border-emerald-700 hover:shadow-[0_0_0_3px_inset] hover:shadow-emerald-700 
                                transition duration-300 outline-none focus:ring-0 focus:outline-none"
                    />
                    <span className="absolute right-3 top-[16px] text-black text-lg font-bold">
                      %
                    </span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <Label className="text-sm text-gray-600 mb-2 block">
                    Length of loan
                  </Label>
                  <Select
                    value={loanTerm.toString()}
                    onValueChange={(value) => setLoanTerm(Number(value))}
                  >
                    <SelectTrigger
                      className="h-[56px] text-lg font-semibold border border-gray-300 rounded-md w-full py-7  focus:border-emerald-700 focus:shadow-[0_0_0_3px_inset] focus:shadow-emerald-700 
                              hover:border-emerald-700 hover:shadow-[0_0_0_3px_inset] hover:shadow-emerald-700 
                                transition duration-300 outline-none focus:ring-0 focus:outline-none px-2.5"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 years</SelectItem>
                      <SelectItem value="20">20 years</SelectItem>
                      <SelectItem value="30">30 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Monthly
          principalAndInterest={principalAndInterest}
          propertyTaxes={propertyTaxes}
          homeInsurance={homeInsurance}
          hoaFees={hoaFees}
          utilities={utilities}
          totalMonthlyPayment={totalMonthlyPayment}
        ></Monthly>

        {/* Educational Content */}
        <div className="px-4 sm:px-6 lg:px-14 py-8 lg:py-16 mx-auto">
          <section className="border-t border-gray-500 border-b pb-6">
            <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 my-12">
              How does a mortgage calculator help me?
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed pb-8">
              When deciding how much house you can afford, one of the most
              important pieces to determine is whether a home will fit into your
              monthly budget. A mortgage calculator helps you understand the
              monthly cost of a home. And since you'll likely be paying down
              your mortgage over many years, it's helpful to experiment with
              different down payment and interest rate scenarios to help
              determine what's affordable for you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 my-12">
              How much monthly mortgage payment can I afford?
            </h2>
            <p className="text-gray-600 leading-relaxed pb-4">
              Lenders determine how much you can afford on a monthly housing
              payment by calculating your debt-to-income ratio (DTI). The
              maximum DTI you can have in order to qualify for most mortgage
              loans is often between 43%-50%, with most lenders preferring 43%.
            </p>
            <p className="text-gray-600 leading-relaxed pb-8">
              Your DTI is the balance between your income and your debt. It
              helps lenders understand how safe or risky it is for them to
              approve you for a mortgage. Depending on your down payment, you
              could have a DTI as high as 50% and still qualify for a mortgage.
              If you have a down payment of less than 20%, lenders are more
              likely to give you a higher interest rate. But if you have a
              larger down payment, you may have more wiggle room on your DTI.
            </p>

            <div className="flex flex-col justify-center mx-auto items-center">
              <div className="flex">
                <p className="text-gray-600 leading-tight lg:leading-relaxed">
                  Formula for calculating your debt-to-income (DTI) ratio:
                </p>
              </div>
              <Image
                src="/images/Mortgage/imgi_1_dti-formula.jpg"
                width={780}
                height={153}
              ></Image>
              <Image
                src="/images/Mortgage/imgi_2_dti-example.jpg"
                width={780}
                height={525}
                className="mt-3.5"
              ></Image>
            </div>
          </section>

          <section className="border-t border-gray-500 border-b">
            <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 my-12">
              How to calculate monthly mortgage payments?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your monthly mortgage payment includes loan principal and
              interest, property taxes, homeowners insurance, and mortgage
              insurance (PMI), if applicable. While not typically included in
              your mortgage payment, homeowners also pay monthly utilities and
              sometimes pay homeowners association (HOA) fees, so it’s a good
              idea to factor these into your monthly budget. This mortgage
              calculator factors in all these typical monthly costs so you can
              really crunch the numbers.
            </p>

            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 mt-8">
              Formula for calculating monthly mortgage payments
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The easiest way to calculate your mortgage payment is to use a
              calculator, but for the curious or mathematically inclined, here’s
              the formula for calculating principal and interest yourself:
            </p>

            <div className="flex flex-col justify-center mx-auto items-center">
              <Image
                src="/images/Mortgage/imgi_3_monthly-mortgage-payments-formula.jpg"
                width={780}
                height={150}
              ></Image>
            </div>

            <div className="text-sm text-gray-600 space-y-2 flex flex-col mt-2.5 mx-auto justify-center items-center max-w-3xl ">
              <div className="flex flex-col flex-start gap-2">
                <p>
                  <strong>Where:</strong>
                </p>
                <p>• M = monthly mortgage payment</p>
                <p>• P = the principal, or the initial amount you borrowed</p>
                <p>
                  • r = your monthly interest rate. Lenders provide you an
                  annual rate so you'll need to divide that figure by 12. So if
                  your rate is 5%, then the monthly rate would equal 0.05/12 =
                  0.004167
                </p>
                <p>
                  • n = the number of payments, or the number of months you'll
                  be paying the loan
                </p>
                <p>
                  • For most mortgages, you'll make a payment every month for 30
                  years, so 360 payments. A 15-year mortgage would be 180
                  payments.
                </p>
                <img
                  src="/images/Mortgage/imgi_4_monthly-mortgage-payments-example.jpg"
                  alt="img"
                  className="mb-3.5"
                />
              </div>
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to use this mortgage calculator?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Play around with different home prices, locations, down payments,
              interest rates, and mortgage lengths to see how they impact your
              monthly mortgage payments.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              Increasing your down payment and decreasing your interest rate and
              mortgage term length will make your monthly payment go down.
              Taxes, insurance, and HOA fees will vary by location. If you enter
              a down payment amount that’s less than 20% of the home price,
              private mortgage insurance (PMI) costs will be added to your
              monthly mortgage payment. As the costs of utilities can vary from
              county to county, we’ve included a utilities estimate that you can
              break down by service. If you’re thinking about buying a condo or
              into a community with a Homeowners Association (HOA), you can add
              HOA fees.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The only amounts we haven’t included are the money you’ll need to
              save for annual home maintenance/repairs or the costs of home
              improvements. To see how much home you can afford including these
              costs, take a look at the Better home affordability calculator.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fun fact: Property tax rates are extremely localized, so two homes
              of roughly the same size and quality on either side of a municipal
              border could have very different tax rates. Buying in an area with
              a lower property tax rate may make it easier for you to afford a
              higher-priced home.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Do you know your property tax rate?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              While exact property tax rates vary by county, it can be helpful
              to look at taxes on the state level to get an idea for taxes in
              your state. Here’s a helpful chart from Forbes breaking down the
              Census Bureau’s 2021 American Community Survey 5-year estimate:
            </p>

            <div className="bg-white border rounded-lg overflow-hidden">
              <div className="grid grid-cols-5 bg-green-600 text-white text-sm font-semibold">
                <div className="p-3">State</div>
                <div className="p-3">Median Property Tax Rate</div>
                <div className="p-3">Median Home Value</div>
                <div className="p-3">Median Property Tax Payment</div>
                <div className="p-3">Property Tax Ranking</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-5 text-sm">
                  <div className="p-3">AL</div>
                  <div className="p-3">0.4%</div>
                  <div className="p-3">$142k</div>
                  <div className="p-3">$646</div>
                  <div className="p-3">3rd</div>
                </div>
                <div className="grid grid-cols-5 text-sm bg-gray-50">
                  <div className="p-3">AK</div>
                  <div className="p-3">1.19%</div>
                  <div className="p-3">$318k</div>
                  <div className="p-3">$3,594</div>
                  <div className="p-3">26th</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div className="p-3">AZ</div>
                  <div className="p-3">0.62%</div>
                  <div className="p-3">$265k</div>
                  <div className="p-3">$1,648</div>
                  <div className="p-3">12th</div>
                </div>
                <div className="grid grid-cols-5 text-sm bg-gray-50">
                  <div className="p-3">AR</div>
                  <div className="p-3">0.61%</div>
                  <div className="p-3">$127k</div>
                  <div className="p-3">$780</div>
                  <div className="p-3">11th</div>
                </div>
                <div className="grid grid-cols-5 text-sm">
                  <div className="p-3">CA</div>
                  <div className="p-3">0.75%</div>
                  <div className="p-3">$505k</div>
                  <div className="p-3">$3,818</div>
                  <div className="p-3">16th</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
