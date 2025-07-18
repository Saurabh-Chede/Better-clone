import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white pt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            <div className='flex text-center justify-center mx-auto items-center flex-col'>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                The first
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 text-transparent bg-clip-text">AI-powered</span> Mortgage
              </h1>
              <p className="text-xl mb-4 text-emerald-100 tracking-tight">
                Our tech unlocks lower rates, higher chances of approval,
                <br />
                and a lightning-fast process from approval to
                closing. Over $100 billion funded.
              </p>
              <Button className="bg-emerald-300 hover:bg-emerald-900 text-emerald-900 hover:text-white font-semibold text-lg px-9 py-8 rounded-4xl">
                <a href="/start">start your preaprroval</a>
              </Button>
              <p className="text-sm text-emerald-200 mt-3">3 min | No hard credit check</p>
            </div>
            <div className='flex justify-center mt-10'>
              <Image src="/images/ai-powered-fico.webp"
                alt="My Photo" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero