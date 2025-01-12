"use client";

import Image from "next/image";
import { useState } from "react";
import EventTypesGrid from "./components/EventTypesGrid";
import WIDE from "@/assets/svg/wide-logo.svg";
import WDN from "@/assets/svg/wdn-logo.svg";
import PVS from "@/assets/svg/pvs-logo.svg";
import MOCKCMS from "@/assets/svg/mock-cms.svg";
import MOCKPARTICIPANT from "@/assets/svg/mock-partisipan.svg";
import LeaderboardPoints from "@/assets/svg/leaderboar-points.svg";
import NEARBY from "@/assets/svg/nearby-feature.svg";
import NOTIF from "@/assets/svg/notif-feature.svg";
import GALLERYMEDIA from "@/assets/svg/gallery-media.svg";
import CTAMOBILE from "@/assets/svg/cta-mobile.svg";
import TASKEVENT from "@/assets/svg/task-event.svg";
import ANALYTICEVENT from "@/assets/svg/analytic-event.svg";
import PARTICIPANTEVENT from "@/assets/svg/participant-event.svg";
import CONFIGEVENT from "@/assets/svg/config-event.svg";

const Page = () => {
  const [activeTab, setActiveTab] = useState("participant");

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="bg-primary h-[495px] flex flex-col items-center justify-center text-center">
        <h1 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold text-[var(--yellow-stabilo-color)]">
          HOW TO USE HOOPLE
        </h1>
        <p className="mt-4 text-white text-[1.1rem]">
          Buat event dan kolaborasi mengikuti langkah Hoople
        </p>
      </div>

      {/* Tab Section */}
      <div className="w-full min-h-[800px] mx-auto px-0 py-8">
        <div className="tabs tabs-boxed bg-transparent justify-center gap-2 mb-12">
          <button
            className={`tab ${activeTab === "participant" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("participant")}
          >
            Sebagai Partisipan
          </button>
          <button
            className={`tab ${activeTab === "master" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("master")}
          >
            Sebagai Event Master
          </button>
        </div>

        {/* Participant Content */}
        {activeTab === "participant" && (
          <div className="space-y-24 px-4 mx-auto max-w-4xl xl:max-w-5xl">
            {/* Nearby Event Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src={NEARBY}
                  alt="Nearby Event"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Gunakan fitur Nearby untuk bergabung dengan event di sekitar
                </h2>
                <p className="text-gray-600">
                  Cari event yang ada disekitarmu dengan menggunakan fitur
                  nearby untuk menemukan event yang cocok dengan minatmu.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 mt-0">
              <h2 className="text-2xl font-bold mb-4 text-pretty">
                Dapatkan &quot;hadiah spesial&quot; dari Event Master setelah
                menyelesaikan semua tugas
              </h2>
              <p className="text-gray-600">
                Tidak hanya seru dalam bermain dan berpetualang, setelah
                tugas-tugas selesai, maka para partisipan akan disuguhi ‘hadiah’
                langsung dari Event Master.
              </p>
            </div>

            {/* Leaderboard Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src={LeaderboardPoints}
                  alt="Leaderboard"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Keluarkan ambisi lewat leaderboard
                </h2>
                <p className="text-gray-600">
                  Papan urutan atau leaderboard dapat diakses untuk membantu
                  partisipan melihay urutannya dalam event. Semakin cepat
                  partisipan menyelesaikan tugas, maka namanya akan ditampilkan
                  pada papan teratas.
                </p>
              </div>
            </div>

            {/* Updates Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Selalu Update dengan keadaan lewat Notifikasi
                </h2>
                <p className="text-gray-600">
                  Update terkini akan selalu hadir untuk memberikan informasi
                  terbaru tentang event yang sedang berlangsung.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={NOTIF}
                  alt="Notifications"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow"
                />
              </div>
            </div>

            {/* Photo Sharing Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src={GALLERYMEDIA}
                  alt="Photo Sharing"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Keluarkan jiwa kerpempimpinan, dan bagikan pengalamanmu!
                </h2>
                <p className="text-gray-600">
                  Bisa dibuat dokumentasi berupa foto yang nanti bisa di upload
                  di dalam event.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Event Master Content */}
        {activeTab === "master" && (
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Create Event Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src={TASKEVENT}
                  alt="Create Event"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Membuat event hingga meluncurkan Event secara mudah dan cepat
                </h2>
                <p className="text-gray-600">
                  Langkah-langkah mudah dimengerti dan hanya memerlukan beberapa
                  klik untuk meluncurkan Event.{" "}
                </p>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">
                  Kendalikan semua dan dapatkan Insight para partisipan dalam
                  semua aspek kegiatan pada analitik
                </h2>
                <p className="text-gray-600">
                  Memantau data-data kegiatan dan behaviour partisipan secara
                  otomatis pada sistem analitik dan dapat dilihat melalui feeds
                  maupun media.{" "}
                </p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <Image
                  src={ANALYTICEVENT}
                  alt="Analytics"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow-lg"
                />
              </div>
            </div>

            {/* Import Data Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src={PARTICIPANTEVENT}
                  alt="Import Data"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">
                  Import data secara mudah dan cepat
                </h2>
                <p className="text-gray-600">
                  Event Master tidak perlu bersusah payah menginput data satu
                  persatu lagi. Hanya perlu mengimpor data, maka data akan
                  diterima oleh sistem.
                </p>
              </div>
            </div>

            {/* Language Translation Section */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">
                  Satu bahasa bisa diganti menjadi banyak bahasa dengan bantuan
                  AI
                </h2>
                <p className="text-gray-600">
                  Walaupun Event Master hanya memasukkan 1 bahasa pada event,
                  namun Event Master dapat memberikan berbagai pilihan bahasa
                  yang akan secara otomatis diterjemahkan oleh AI kepada
                  Partisipan dari negara manapun.
                </p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <Image
                  src={CONFIGEVENT}
                  alt="Language Translation"
                  width={500}
                  height={300}
                  className="rounded-lg drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Common Sections (CTA, Mobile Preview, Partners, etc.) */}
        <div className="mt-24 w-full">
          {/* CTA Section */}
          <div className="relative bg-[var(--accent-color)] w-full text-white px-0 md:px-10 py-3 text-center mb-24 flex flex-col md:flex-row items-center justify-center transform shadow hover:drop-shadow-xl duration-200 ease-linear">
            <div className="w-full text-center md:text-left max-w-xl py-2 md:py-0">
              {activeTab === "participant" ? (
                <p className="w-full md:max-w-md font-semibold text-lg md:text-2xl md:text-left text-center leading-6 mb-4 md:mb-0">
                  Download dan Ikuti Keseruannya Secara Gratis dan Mudah!
                </p>
              ) : (
                <>
                  <h2 className="text-base md:text-[1.8rem] font-bold mb-0 md:mb-2 leading-5 md:leading-6">
                    Daftar sebagai Event Master dan
                  </h2>
                  <p className="mb-8 text-base md:text-[1.5rem] leading-5 md:leading-6">
                    luncurkan event-mu!
                  </p>
                </>
              )}
            </div>
            <div className="max-h-[320px] mx-auto rounded-lg flex items-center justify-center">
              <Image
                src={CTAMOBILE}
                alt="CTA"
                className="rounded-lg drop-shadow-xl max-w-[200px] max-h-[200px]"
              />
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="text-center mb-24">
            <Image
              src={
                ["participant"].includes(activeTab) ? MOCKPARTICIPANT : MOCKCMS
              }
              alt="Mobile Preview"
              width={300}
              height={600}
              className="mx-auto mb-4"
            />
            {activeTab === "participant" ? (
              <>
                <h3 className="text-[clamp(1.5rem,4vw,2.2rem)] font-bold my-3">
                  Filter sebagai partisipan
                </h3>
                <p className="text-[var(--metal-gray-color)] text-[1.3rem] text-center max-w-md mx-auto leading-7 text-pretty">
                  Menjalani tugas-tugas dalam Event yang sudah diikuti oleh
                  partisipan untuk mendapatkan Reward!
                </p>
              </>
            ) : (
              <>
                <h3 className="text-[clamp(1.5rem,4vw,2.2rem)] font-bold my-3">
                  Filter sebagai Event Master
                </h3>
                <p className="text-[var(--metal-gray-color)] text-[1.3rem] text-center max-w-md mx-auto leading-7 text-pretty">
                  Kontrol data partisipan dan keluarkan kreativitas melalui
                  tugas-tugas yang dapat Event Master lakukan dalam layarnya!
                </p>
              </>
            )}
          </div>

          {/* Partner Logos */}
          <div className="flex flex-col md:flex-row justify-around items-center gap-8 py-10 my-16 bg-white w-full">
            <Image src={WIDE} alt="wide-logo" width={100} height={40} />
            <Image src={WDN} alt="wdn-logo" width={100} height={40} />
            <Image src={PVS} alt="pvs-logo" width={100} height={40} />
          </div>

          {/* Event Types Grid */}
          <div className="max-w-5xl min-h-[300px] mx-auto px-5">
            <EventTypesGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
