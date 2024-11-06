import Image from "next/image";
import React from "react";
import AppsStore from "@/assets/png/appstore.png";
import PlayStore from "@/assets/png/googleplay.png";
import Link from "next/link";
import HoopleWhite from "@/assets/png/hoople-white.png";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-[var(--navy-color)] text-white p-10">
        <nav className="bg-transparent">
          <h6 className="footer-title ">USE CASES</h6>
          <a className="link link-hover">Event Gamification App</a>
          <a className="link link-hover">Team Building App</a>
          <a className="link link-hover">Student Engagement Platform</a>
          <a className="link link-hover">Employees Refreshment App</a>
        </nav>
        <nav className="bg-transparent">
          <h6 className="footer-title">Resources and Support</h6>
          <a className="link link-hover">Pricing</a>
          <a href="./faq" className="link link-hover">
            FAQ
          </a>
          <a href="./help-center" className="link link-hover">
            Help Center
          </a>
          <a href="./privacy-and-policy" className="link link-hover">
            Privacy Policy
          </a>
          <a href="./terms-and-conditions" className="link link-hover">
            Terms and Conditions
          </a>
          <a href="./end-user-license-agreement" className="link link-hover">
            End User License Agreement
          </a>
        </nav>
        <nav className="bg-transparent ">
          <Image src={HoopleWhite} width={200} alt="logo-hoople" />
          <p className="text-white text-pretty text-xl">
            International Financial Center 2 Jakarta, Indonesia
          </p>
          <div className="flex flex-col gap-7 mt-6">
            <Link href={"##"} target="_blank">
              <Image src={AppsStore} alt="app-store" width={200} />
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.optimind.hoople&pcampaignid=web_share"
              }
              target="_blank"
            >
              <Image src={PlayStore} alt="play-store" width={200} />
            </Link>
          </div>
        </nav>
      </footer>
      <div className="footer footer-center bg-[var(--navy-color)] py-5">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Hoople
          </p>
        </aside>
      </div>
    </>
  );
}
