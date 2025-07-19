import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer () {
  return (
    <footer className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column - Company Services */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Better</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Better is a family of companies serving all your homeownership needs.
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                <span className="text-green-600 font-bold text-lg">Better</span>{" "}
                <span className="text-gray-400 font-light text-lg">Mortgage</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                <span className="text-green-600 font-bold text-lg">Better</span>{" "}
                <span className="text-gray-400 font-light text-lg">Real Estate</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                <span className="text-green-600 font-bold text-lg">Better</span>{" "}
                <span className="text-gray-400 font-light text-lg">Cover</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shop, bundle, and save on insurance coverage for home, auto, life, and more.
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                <span className="text-green-600 font-bold text-lg">Better</span>{" "}
                <span className="text-gray-400 font-light text-lg">Inspect</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection
                guarantee.
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                <span className="text-green-600 font-bold text-lg">Better</span>{" "}
                <span className="text-gray-400 font-light text-lg">Settlement Services</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get transparent rates when you shop for title insurance all in one convenient place.
              </p>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home affordability calculator
                </Link>
              </li>
              <li>
                <Link href="mortgageCalculator" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mortgage calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Free mortgage calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mortgage calculator with taxes
                </Link>
              </li>
              <li>
                <Link href="/mortgageCalculator" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mortgage calculator with PMI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Rent vs buy calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  HELOC payment calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  HELOC vs cash-out refinance calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Buy a home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Sell a home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Get home inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="aboutus" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Learning center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="mailto:hello@better.com" className="text-gray-600 hover:text-gray-900 text-sm">
                  hello@better.com
                </Link>
              </li>
              <li>
                <Link href="tel:415-523-8837" className="text-gray-600 hover:text-gray-900 text-sm">
                  415-523-8837
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Glossary
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  NMLS Consumer Access
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Disclosures & Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Affiliated Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Browser Disclaimer
                </Link>
              </li>
            </ul>

            {/* Equal Housing Logos */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600 font-bold"><img src="/images/Mortgage/download.svg" alt="" /></span>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-600 font-bold"><img src="/images/Mortgage/download1.svg" alt="" /></span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
