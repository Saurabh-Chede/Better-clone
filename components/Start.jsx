"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Home, RefreshCw, DollarSign, Check, Smartphone, ArrowLeft, Loader2 } from "lucide-react"

let type = "initial" | "buying" | "refinancing" | "cash" | "loading"

export default function Multistage() {
  const [currentStep, setCurrentStep] = useState("initial")
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionClick = (option) => {
    setCurrentStep("loading")

    // Simulate loading time
    setTimeout(() => {
      setCurrentStep(option)
    }, 1500)
  }

  const handleBack = () => {
    setCurrentStep("initial")
    setSelectedOption("")
  }

  const renderInitialStep = () => (
    <>
      {/* Avatar */}
      {/* <div className="flex justify-center mb-8">
        <img src="/images/imgi_1_betsy.svg" alt="icon" className="w-16 h-16 rounded-full" />
      </div> */}

      {/* Greeting */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hi, I'm Betsy!</h1>
        <p className="text-xl text-gray-700">What can I help you with?</p>
      </div>

      {/* Options */}
      <div className="space-y-4 mb-16">
        <Card
          className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors"
          onClick={() => handleOptionClick("buying")}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 text-teal-600">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-gray-900 font-medium">Buying a home</span>
          </div>
        </Card>

        <Card
          className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors"
          onClick={() => handleOptionClick("refinancing")}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 text-teal-600">
              <RefreshCw className="w-6 h-6" />
            </div>
            <span className="text-gray-900 font-medium">Refinancing my mortgage</span>
          </div>
        </Card>

        <Card
          className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors"
          onClick={() => handleOptionClick("cash")}
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 text-teal-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-gray-900 font-medium">Get cash from my home</span>
          </div>
        </Card>
      </div>

      {/* Statistics */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-baseline space-x-8 mb-4">
          <div className="text-4xl font-bold text-gray-900">$100B</div>
          <div className="text-4xl font-bold text-gray-900">400K</div>
        </div>
        <p className="text-gray-600 text-sm">home loans funded entirely online Customers who chose a Better Mortgage</p>
      </div>

      {/* Benefits Box */}
      <Card className="bg-gray-50 p-6 mb-16">
        <p className="text-center text-gray-700 mb-6">After a few questions, you'll unlock:</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Custom mortgage rates</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-700">Exclusive offers</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 text-teal-600">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="text-gray-700">A personalized dashboard</span>
          </div>
        </div>
      </Card>
    </>
  )

  const renderLoadingStep = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-12 h-12 text-teal-500 animate-spin mb-4" />
      <p className="text-gray-600 text-lg">Getting your personalized options...</p>
    </div>
  )

  const renderBuyingStep = () => (
    <>
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-4">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">Buying a home</h2>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">What type of home are you looking to buy?</p>
      </div>

      <div className="space-y-4 mb-8">
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Single family home</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Townhouse</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Condo</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Multi-family home</span>
        </Card>
      </div>
    </>
  )

  const renderRefinancingStep = () => (
    <>
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-4">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">Refinancing my mortgage</h2>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">What's your main goal for refinancing?</p>
      </div>

      <div className="space-y-4 mb-8">
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Lower my monthly payment</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Pay off my loan faster</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Get cash from my home's equity</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Switch from adjustable to fixed rate</span>
        </Card>
      </div>
    </>
  )

  const renderCashStep = () => (
    <>
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" onClick={handleBack} className="mr-4">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">Get cash from my home</h2>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">What do you plan to use the cash for?</p>
      </div>

      <div className="space-y-4 mb-8">
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Home improvements</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Debt consolidation</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Investment opportunities</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Education expenses</span>
        </Card>
        <Card className="p-4 border border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
          <span className="text-gray-900 font-medium">Other</span>
        </Card>
      </div>
    </>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-18 py-4 border-b border-gray-100">
        <div className="flex items-center">
          <img src="/images/download.svg" alt="" />
        </div>
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Phone className="h-5 w-5" />
        </Button>
      </header> */}

      {/* Header */}
      <header className="relative flex items-center justify-between mx-18 py-4 border-b-4 border-gray-100 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/download.svg" alt="logo" className="h-6" />
        </div>

        {/* Phone Icon */}
        <Button variant="ghost" size="icon" className="text-gray-600">
          <Phone className="h-5 w-5" />
        </Button>

        {/* 👇 Conditionally render avatar only on initial step */}
        {currentStep === "initial" && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full border border-gray-200 shadow-md">
            <img
              src="/images/imgi_1_betsy.svg"
              alt="Betsy avatar"
              className="w-14 h-14 rounded-full"
            />
          </div>
        )}
      </header>



      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {currentStep === "initial" && renderInitialStep()}
        {currentStep === "loading" && renderLoadingStep()}
        {currentStep === "buying" && renderBuyingStep()}
        {currentStep === "refinancing" && renderRefinancingStep()}
        {currentStep === "cash" && renderCashStep()}
      </main>

      {/* Footer - Only show on initial step */}
      {currentStep === "initial" && (
        <footer className="bg-white border-t border-gray-100 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">Better</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital
                  mortgage experience backed by superior customer support.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Schedule a conversation</div>
                  <div>hello@better.com</div>
                  <div>415-523-8837</div>
                  <div>FAQ</div>
                  <div>Resources</div>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>NMLS Consumer Access</div>
                  <div>Privacy Policy</div>
                  <div>Terms of Use</div>
                  <div>Disclosures & Licensing</div>
                  <div>Affiliated Business</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex space-x-4 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded border"></div>
              <div className="w-12 h-12 bg-gray-100 rounded border"></div>
            </div>

            {/* Legal Text */}
            <div className="text-xs text-gray-500 space-y-2">
              <p>
                © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies.
                Better Mortgage Corporation provides home loans. Better Real Estate, LLC and Better Real Estate
                California Inc License # 02164055 provide real estate services. Better Cover, LLC sells insurance
                products, and Better Settlement Services provides title insurance services. Better Connect, LLC dba
                Better Attorney Match provides real estate attorney connection services, and Better Inspect, LLC
                provides home inspection services. All rights reserved.
              </p>
              <p>
                Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct
                lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged
                pursuant to a California Finance Lender Law License. Not available in all states. Equal Housing Lender.
                NMLS Consumer Access.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
