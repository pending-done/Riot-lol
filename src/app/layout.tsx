import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";
import { Suspense } from "react";
// import logo from "@/public/assets/images/LOL.png";
import logo from "@/public/assets/images/logo_text.svg";
// import logo from "@/public/assets/images/logo/logo_text.svg";
import Image from "next/image";

const fontPretendard = localFont({
  src: "./fonts/Pretendard-Medium.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "League of Legends",
  description: "롤 정보 확인 앱",
  icons: {
    icon: "/logo_img.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-element">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#071523]`}> */}
      <body className={`bg-[#071523] text-white ${fontPretendard.className}`}>
        <div className="fixed z-50 top-0 left-0 flex items-center gap-10 w-full h-14 text-white bg-black">
          <div className="flex justify-between w-full items-center pl-12 pr-12">
            <div className="logo-container">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 48 48"
                  id="league-of-legends">
                  <polygon
                    fill="currentColor"
                    points="6.37 24.57 4.53 24.57 4.53 25.05 5.12 25.69 5.12 30.29 4.68 31.34 8.74 31.34 9.06 30.25 6.33 30.29 6.37 24.57"></polygon>
                  <polygon
                    fill="currentColor"
                    points="6.37 16.57 4.53 16.57 4.53 17.05 5.12 17.69 5.12 22.29 4.68 23.34 8.74 23.34 9.06 22.26 6.33 22.29 6.37 16.57"></polygon>
                  <polygon
                    fill="currentColor"
                    points="9.58 23.34 13.55 23.34 13.55 22.08 10.98 22.08 10.99 20.69 12.93 20.69 13.43 19.36 11.05 19.36 11.01 18.03 13.55 18.03 13.55 16.57 9.58 16.57 9.58 23.34"></polygon>
                  <polygon
                    fill="currentColor"
                    points="9.58 31.34 13.55 31.34 13.55 30.08 10.98 30.08 10.99 28.69 12.93 28.69 13.43 27.36 11.05 27.36 11.01 26.03 13.55 26.03 13.55 24.57 9.58 24.57 9.58 31.34"></polygon>
                  <polygon
                    fill="currentColor"
                    points="21.27 31.34 25.23 31.34 25.23 30.08 22.66 30.08 22.68 28.69 24.61 28.69 25.11 27.36 22.73 27.36 22.7 26.03 25.23 26.03 25.23 24.57 21.27 24.57 21.27 31.34"></polygon>
                  <polygon
                    fill="currentColor"
                    points="37.59 22.08 35.02 22.08 35.03 20.69 36.97 20.69 37.47 19.36 35.09 19.36 35.05 18.03 37.59 18.03 37.59 16.57 33.62 16.57 33.62 23.34 37.59 23.34 37.59 22.08"></polygon>
                  <path
                    fill="currentColor"
                    d="M17.48 16.57H15.85l.53.88L14 23.34h1.53l.5-1.31 1.34 0 1.33 0 .5 1.31h1.54l-2.71-6.77zm-.08 4.27h-1l1-2.43 1 2.43zM23.54 23.57c3.83 0 3.64-3.94 3.64-3.94H23.85L23 20.84h2.55a1.84 1.84 0 0 1-2 1.35 2 2 0 0 1-2-2.16 2.17 2.17 0 0 1 2.07-2.15 2.21 2.21 0 0 1 1.9 1.1l1.19-.67a4 4 0 0 0-3.1-1.81A3.38 3.38 0 0 0 20.18 20 3.34 3.34 0 0 0 23.54 23.57zM17.44 27.69l-.83 1.22h2.55a1.82 1.82 0 0 1-2 1.34 2 2 0 0 1-2-2.15 2.11 2.11 0 0 1 4-1.05l1.19-.67a4 4 0 0 0-3.1-1.81A3.37 3.37 0 0 0 13.77 28a3.33 3.33 0 0 0 3.36 3.61c3.83 0 3.64-3.94 3.64-3.94zM32.9 21.46V16.57H31.41V21a1.14 1.14 0 0 1-1.08 1.15h0a1.22 1.22 0 0 1-1.2-1.2V16.57h-1.4v4.89a1.67 1.67 0 0 0 .25.9 2.88 2.88 0 0 0 4.69 0A1.67 1.67 0 0 0 32.9 21.46z"></path>
                  <polygon
                    fill="currentColor"
                    points="30.31 28.77 27.27 24.7 26.22 24.7 25.91 24.7 25.38 24.7 25.91 25.54 25.91 31.34 27.18 31.34 27.18 26.88 30.31 31.34 31.82 31.34 31.82 24.7 30.31 24.7 30.31 28.77"></polygon>
                  <path
                    fill="currentColor"
                    d="M34.54,24.6H32.38v7.11h2.16a3.56,3.56,0,1,0,0-7.11Zm0,5.86h-.91V25.85h.91a2.31,2.31,0,1,1,0,4.61Z"></path>
                  <path
                    fill="currentColor"
                    d="M41.17 27.37h-.38c-.51 0-1-.25-1-.79 0-.3.14-.8 1.08-.84a1.87 1.87 0 0 1 1.48.9l.54-.32.54-.32a3.13 3.13 0 0 0-2.62-1.51 2.08 2.08 0 1 0 0 4.13h.38c.5 0 1 .25 1 .8 0 .29-.14.79-1.09.84a2 2 0 0 1-1.48-.9L38.57 30a3.14 3.14 0 0 0 2.5 1.52h.12a2.08 2.08 0 1 0 0-4.14zM41 20.14a1.59 1.59 0 1 0-1.59 1.59A1.59 1.59 0 0 0 41 20.14zm-2.55 0a1 1 0 1 1 1 1A1 1 0 0 1 38.44 20.14z"></path>
                  <polygon
                    fill="currentColor"
                    points="41.9 20.5 42.73 20.5 42.73 19.88 41.9 19.88 41.9 19.17 42.94 19.17 42.94 18.55 41.28 18.55 41.28 21.52 41.9 21.52 41.9 20.5"></polygon>
                </svg>

                {/* <Image src={logo} width={80} height={80} alt="메인 로고" /> */}
              </Link>
            </div>
            <div className="flex gap-10 ">
              <Link href="/champs" prefetch>
                <span className="nav-span">챔피언</span>
              </Link>
              <Link href="/rotation">
                <span className="nav-span">로테이션</span>
              </Link>
              <Link href="/items">
                <span className="nav-span">아이템</span>
              </Link>
            </div>
          </div>
        </div>
        <Suspense fallback={<>... 로딩</>}>
          <Providers>
            <div className="w-[100%] flex justify-center mt-14">{children}</div>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
