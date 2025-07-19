"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Mortgage() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate] = useState(6.5); // Fixed for this example

  // Calculate monthly payment
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const principalAndInterest = Math.round(monthlyPayment);
  const propertyTaxes = Math.round((homePrice * 0.012) / 12); // 1.2% annually
  const homeInsurance = Math.round((homePrice * 0.0035) / 12); // 0.35% annually
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-green-600">Better</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Buy
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Refinance
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  HELOC
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Rates
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Better+
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Sign in
              </a>
              <Button className="bg-green-600 hover:bg-green-700">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </header> */}
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Calculator Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-gray-600 mb-8">
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and private mortgage insurance
            (PMI). Get an accurate estimate and apply for a mortgage today.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">
                  Home price
                </Label>
                <div className="text-3xl font-bold text-gray-900">
                  ${homePrice.toLocaleString()}
                </div>
              </div>
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">
                  Monthly payment
                </Label>
                <div className="text-3xl font-bold text-gray-900">
                  ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
                </div>
              </div>
              <div className="flex items-end">
                <Button className="bg-green-600 hover:bg-green-700 w-full">
                  Get pre-approved
                </Button>
              </div>
            </div>

            {/* <div className="mb-8">
              <Slider
                value={[homePrice]}
                onValueChange={(value) => setHomePrice(value[0])}
                max={1000000}
                min={100000}
                step={10000}
                className="w-full"
              />
            </div> */}

            <div className="mb-8">
              <Slider
                value={[homePrice]}
                onValueChange={(value) => setHomePrice(value[0])}
                max={1000000}
                min={100000}
                step={10000}
                
              />
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">
                  Amount
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={downPayment.toLocaleString()}
                    onChange={(e) =>
                      handleDownPaymentChange(e.target.value.replace(/,/g, ""))
                    }
                    className="pl-8"
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">
                  Down payment
                </Label>
                <div className="relative">
                  <Input
                    type="text"
                    value={`${downPaymentPercent}%`}
                    onChange={(e) =>
                      handleDownPaymentPercentChange(
                        e.target.value.replace("%", "")
                      )
                    }
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    %
                  </span>
                </div>
              </div>
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Rate</Label>
                <Input
                  type="text"
                  value="6.500"
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label className="text-sm text-gray-600 mb-2 block">Term</Label>
                <Select
                  value={loanTerm.toString()}
                  onValueChange={(value) => setLoanTerm(Number.parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 years</SelectItem>
                    <SelectItem value="30">30 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Payment Breakdown */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Monthly payment breakdown
          </h2>
          <div className="text-3xl font-bold text-gray-900 mb-6">
            ${Math.round(totalMonthlyPayment).toLocaleString()}/mo
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-600 rounded mr-3"></div>
                <span className="text-gray-700">Principal & interest</span>
              </div>
              <span className="font-semibold">
                ${principalAndInterest.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                <span className="text-gray-700">Property taxes</span>
              </div>
              <span className="font-semibold">${propertyTaxes}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                <span className="text-gray-700">Homeowners insurance</span>
              </div>
              <span className="font-semibold">${homeInsurance}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                <span className="text-gray-700">HOA fees</span>
              </div>
              <span className="font-semibold">${hoaFees}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded mr-3"></div>
                <span className="text-gray-700">Utilities</span>
              </div>
              <span className="font-semibold">${utilities}</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Copy estimate link
          </Button>
        </div>

        {/* Educational Content */}
        <div className="space-y-12">
          <section className="border-t border-gray-500 border-b pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-4">
              How does a mortgage calculator help me?
            </h2>
            <p className="text-gray-600 leading-relaxed">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How much monthly mortgage payment can I afford?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lenders determine how much you can afford on a monthly housing
              payment by calculating your debt-to-income ratio (DTI). The
              maximum DTI you can have in order to qualify for most mortgage
              loans is often between 43%-50%, with most lenders preferring 43%.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Your DTI is the balance between your income and your debt. It
              helps lenders understand how safe or risky it is for them to
              approve you for a mortgage. Depending on your down payment, you
              could have a DTI as high as 50% and still qualify for a mortgage.
              If you have a down payment of less than 20%, lenders are more
              likely to give you a higher interest rate. But if you have a
              larger down payment, you may have more wiggle room on your DTI.
            </p>
          </section>

          {/* Debt-to-Income Example */}
          {/* <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Monthly Debt Payments
                </h3>
                <div className="text-sm text-gray-600">
                  Monthly Gross Income
                </div>
                <div className="text-4xl font-bold text-gray-900 my-4">
                  $2,500 <span className="text-2xl">÷</span> $6,500{" "}
                  <span className="text-2xl">=</span> 38% DTI
                </div>
                <div className="text-sm text-gray-600">
                  The above scenario is for illustrative purposes only
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Debts</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Auto loan</span>
                      <span>$350/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Student loans</span>
                      <span>$200/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Credit cards</span>
                      <span>$200/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Personal loan</span>
                      <span>$100/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Housing Debt</span>
                      <span>$1,650/month</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>$2,500 monthly debt obligation</span>
                      <span>$4,500 monthly income</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Income</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monthly salary (pre-tax)</span>
                      <span>$5,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly side gig income</span>
                      <span>$1,500/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to calculate monthly mortgage payments?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your monthly mortgage payment includes loan principal and
              interest, property taxes, homeowners insurance, and mortgage
              insurance (PMI), if applicable. While it's typically included in
              your monthly payment, homeowners insurance and property taxes are
              not technically part of your mortgage payment.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">
              Formula for calculating monthly mortgage payments
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              This formula can help you crunch the numbers to see how much house
              you can afford, or how different interest rates affect your
              payment.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <div className="text-center">
                <div className="text-lg font-mono mb-4">
                  M = P [ r(1+r)^n ] / [ (1+r)^n - 1 ]
                </div>
                <div className="text-sm text-gray-600">
                  Monthly mortgage payments formula
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>
                <strong>Where:</strong>
              </p>
              <p>• M = monthly mortgage payment</p>
              <p>• P = the principal, or the initial amount you borrowed</p>
              <p>
                • r = your monthly interest rate. Lenders provide you an annual
                rate so you'll need to divide that figure by 12. So if your rate
                is 5%, then the monthly rate would equal 0.05/12 = 0.004167
              </p>
              <p>
                • n = the number of payments, or the number of months you'll be
                paying the loan
              </p>
              <p>
                • For most mortgages, you'll make a payment every month for 30
                years, so 360 payments. A 15-year mortgage would be 180
                payments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to use this mortgage calculator?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Play around with different home prices, locations, down payments,
              interest rates, and mortgage lengths to see how they impact your
              monthly mortgage payments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Do you know your property tax rate?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Don't worry if you don't know your property tax rate; our
              calculator uses the average property tax rate for your county to
              estimate your monthly property tax payment.
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
       <Footer></Footer>
    </div>
  );
}
