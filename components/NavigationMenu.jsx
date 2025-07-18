import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



export default function NavigationMenu1() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className=" text-white">
                            Buy
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-64 bg-white rounded-lg">
                                <ul className="space-y-1">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/apply" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Apply now
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/purchase-rates" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Purchase rates
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/affordability-calculator" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Affordability calculator
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/mortgage-calculator" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Mortgage calculator
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/rent-vs-buy" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Rent vs buy calculator
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/find-agent" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Find an agent
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/va-loans" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                VA loans
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/learning-center" className="block p-2 text-sm hover:bg-gray-100 rounded">
                                                Learning center
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
