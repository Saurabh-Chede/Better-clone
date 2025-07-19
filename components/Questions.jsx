import React from "react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tabs = [
    { label: "Our products", value: "products" },
    { label: "Calculators", value: "calculators" },
    { label: "Guides & FAQs", value: "guides" },
];

const content = {
    products: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4 leading-tight">
                            How AI Mortgage Lending is Transforming the Home Loan Process
                        </h3>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                        <Image
                            src="/images/ai-mortgage.webp"
                            alt="Woman using laptop on couch"
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* One Day Mortgage Card */}
            <Card className="lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px] flex h-full flex-col lg:flex-row">
                    <div className="flex-1">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            One Day Mortgage<sup className="text-sm">1</sup>
                        </h3>
                        <p className="text-[#073126] text-sm mb-6 leading-relaxed">
                            Kick your home loan into hyperdrive. Going from locked rate to
                            Commitment Letter takes weeks for traditional lenders. We do it in
                            a single day. Traditional lenders deliver a Commitment Letter in a
                            few weeks.<sup className="text-xs">1</sup>
                        </p>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="bg-teal-100 rounded-lg flex mt-2 overflow-hidden lg:w-[40%] items-center justify-center min-h-[120px]">
                        <Image
                            src="/images/one-day-mortgage.webp"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Better HELOC Card */}
            <Card className=" lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                        <div className="aspect-square w-[280px] h-[280px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/better-heloc.webp"
                                alt="Couple looking at laptop"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[24px] font-semibold text-[#072708] mb-3">
                                Better HELOC
                            </h3>
                            <p className="text-[#073126] text-sm leading-relaxed">
                                Introducing One Day HELOC™—your express lane to getting cash
                                from your home with our Home Equity Line of Credit
                                <sup className="text-xs">2</sup>. Access up to 90% of your home
                                equity as cash in as little as 7 days.
                                <sup className="text-xs">3</sup>
                            </p>
                            <Button
                                size="icon"
                                variant="outline"
                                className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                            >
                                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Insurance Card */}
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            Insurance
                        </h3>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="rounded-lg w-[305px] h-[141px] overflow-hidden">
                        <Image
                            src="/images/insurance.webp"
                            alt="Happy family with children"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
    calculators: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h4 className="text-[24px] font-semibold text-[#072708] mb-4 leading-tight">
                            Mortgage Calculator
                        </h4>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="/images/mortgage-calculator.webp"
                            alt="Woman using laptop on couch"
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* One Day Mortgage Card */}
            <Card className="lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px] flex h-full flex-col lg:flex-row">
                    <div className="flex-1">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            Affordability calculator
                        </h3>
                        <p className="text-[#073126] text-sm mb-6 leading-relaxed">
                            Got homeownership dreams? Let's put some numbers behind them. Our
                            affordability calculator estimates the maximum home you can
                            afford.
                        </p>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="bg-teal-100 rounded-lg flex mt-2 overflow-hidden lg:w-[40%] items-center justify-center min-h-[120px]">
                        <img
                            src="/images/imgi_5_affordability-calculator.png"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Better HELOC Card */}
            <Card className=" lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                        <div className="aspect-square w-[280px] h-[280px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/imgi_6_heloc-calculator.png"
                                alt="Couple looking at laptop"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[24px] font-semibold text-[#072708] mb-3">
                                HELOC Calculator
                            </h3>
                            <p className="text-[#073126] text-sm leading-relaxed">
                                Need cash? Quickly see how much equity you can borrow from your
                                home and what your monthly payments might be.
                            </p>
                            <Button
                                size="icon"
                                variant="outline"
                                className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                            >
                                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Insurance Card */}
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            Fixed-rate loan comparison calculator
                        </h3>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="rounded-lg w-[305px] h-[141px] overflow-hidden">
                        <img
                            src="/images/fixed-rate-calculator.webp"
                            alt="Happy family with children"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
    guides: (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4 leading-tight">
                            How AI Mortgage Lending is Transforming the Home Loan Process
                        </h3>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                            src="/images/imgi_4_good-dti.png"
                            alt="Woman using laptop on couch"
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* One Day Mortgage Card */}
            <Card className="lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px] flex h-full flex-col lg:flex-row">
                    <div className="flex-1">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            One Day Mortgage<sup className="text-sm">1</sup>
                        </h3>
                        <p className="text-[#073126] text-sm mb-6 leading-relaxed">
                            Kick your home loan into hyperdrive. Going from locked rate to
                            Commitment Letter takes weeks for traditional lenders. We do it in
                            a single day. Traditional lenders deliver a Commitment Letter in a
                            few weeks.<sup className="text-xs">1</sup>
                        </p>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="bg-teal-100 rounded-lg flex mt-2 overflow-hidden lg:w-[40%] items-center justify-center min-h-[120px]">
                        <img
                            src="/images/imgi_5_buy-house-without-realtor.png"
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Better HELOC Card */}
            <Card className=" lg:col-span-8 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="flex flex-col lg:flex-row items-start gap-6 mb-6">
                        <div className="aspect-square w-[280px] h-[280px] rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="/images/imgi_6_loan-timeline.png"
                                alt="Couple looking at laptop"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[24px] font-semibold text-[#072708] mb-3">
                                Better HELOC
                            </h3>
                            <p className="text-[#073126] text-sm leading-relaxed">
                                Introducing One Day HELOC™—your express lane to getting cash
                                from your home with our Home Equity Line of Credit
                                <sup className="text-xs">2</sup>. Access up to 90% of your home
                                equity as cash in as little as 7 days.
                                <sup className="text-xs">3</sup>
                            </p>
                            <Button
                                size="icon"
                                variant="outline"
                                className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                            >
                                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Insurance Card */}
            <Card className="lg:col-span-4 bg-green-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="px-[48px] py-[35px]">
                    <div className="mb-6">
                        <h3 className="text-[24px] font-semibold text-[#072708] mb-4">
                            Insurance
                        </h3>
                        <Button
                            size="icon"
                            variant="outline"
                            className="group rounded-full w-[47px] p-2 h-[47px] border-gray-300 mt-2.5 bg-transparent hover:bg-green-950"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </Button>
                    </div>
                    <div className="rounded-lg w-[305px] h-[141px] overflow-hidden">
                        <Image
                            src="/images/conventional-loan.webp"
                            alt="Happy family with children"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    ),
};

function Questions() {
    const [activeTab, setActiveTab] = useState("products");

    return (
        <div className="px-6 mt-10">
            <div className="flex flex-col lg:flex lg:flex-row justify-between">
                <h1 className="text-5xl lg:text-5xl font-bold leading-tight mb-4 px-3">
                    Got questions?
                    <br />
                    We've got answers
                </h1>
                <section className="w-full lg:w-[50%]">
                    <div className="flex gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-4 py-2 rounded-full border ${activeTab === tab.value
                                        ? "border-green-600 text-white bg-green-600"
                                        : "border-gray-300 text-gray-800 bg-white"
                                    } transition`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
            <div className="mt-6 bg-gray-50 rounded-lg shadow-sm">
                {content[activeTab]}
            </div>
        </div>
    );
}

export default Questions;
