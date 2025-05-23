import { Geist, Geist_Mono } from "next/font/google";
import { Poppins, Nosifer, Anton_SC, Chewy  } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./components/Navbar";

const nosifer = Nosifer({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: "--font-nosrif"
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // adjust as needed
  display: 'swap',
  variable: "--font-poppins"
})

const antonSC = Anton_SC({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: "--font-anton"
})

const chewy = Chewy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: "--font-chewy"
})

export const metadata = {
  title: "KindMeal - Save the world",
  description: "Bridge the gap between surplus food and hunger in real-time. Empower businesses and communities to reduce waste, track impact, and ensure secure pickups turning excess into opportunity for a greener planet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nosifer.variable} ${chewy.variable} ${poppins.variable} ${antonSC.variable} antialiased`}
      >
        <SidebarProvider>
        {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
