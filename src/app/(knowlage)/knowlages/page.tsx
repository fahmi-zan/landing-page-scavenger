import Image from "next/image";
import React from "react";
import LeaderboardPoints from "@/assets/svg/leaderboar-points.svg";

export default function HowItWorks() {
  return (
    <main className="h-full w-full">
      <section className="hero-solid">
        <h1 className="title">HOW HOOPLE WORKS?</h1>
        <p className="subtitle">
          Buat event dan bersiaplah menjelajah dengan Hoople
        </p>
      </section>
      <section className="px-0 py-20 w-full min-h-[400px] ">
        <div className="w-full flex items-center justify-center">
          <div
            role="tablist"
            className="tabs tabs-bordered tab-border-2 tabs-lg w-full xl:w-[calc(calc(100%-150px)+10px)] bg-yellow-500"
          >
            {/* Tab 1 */}
            <input
              type="radio"
              name="tabs_1"
              role="tab"
              className="tab text-2xl font-medium leading-6"
              aria-label="Sebagai Partisipan"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content p-10 bg-transparent h-full"
            >
              <div className="w-full flex flex-row items-center justify-center gap-20">
                <div className="max-w-md h-full flex justify-end">
                  <Image
                    className="rounded-md"
                    src={"https://picsum.photos/500/500"}
                    width={450}
                    height={267}
                    alt=""
                  />
                </div>
                <div className="text-xl font-medium leading-relaxed max-w-md xl:max-w-[40rem]">
                  <p className="heading-3 text-pretty font-bold leading-8">
                    Gunakan fitur Nearby untuk bergabung dengan event di sekitar
                  </p>
                  <p className="text-lg leading-6 text-justify my-5">
                    Klik Explore Nearby Event untuk menampilkan semua event di
                    sekitar radius yang telah ditentukan Event Master secara
                    otomatis.
                  </p>
                </div>
              </div>
              {/* ### */}
              <div className="w-full my-20">
                <div className="flex flex-col gap-4 max-w-xl items-start justify-start">
                  <h1 className="heading-3 text-pretty leading-8">
                    Dapatkan &quot;hadiah spesial&quot; dari Event Master
                    setelah menyelesaikan semua tugas
                  </h1>
                  <p className="text-paragraph my-5 text-justify text-pretty">
                    Tidak hanya seru dalam bermain dan berpetualang, setelah
                    tugas-tugas selesai, maka para partisipan akan disuguhi
                    ‘hadiah’ langsung dari Event Master.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-20 my-10">
                  <div className="max-w-md h-full flex justify-end">
                    <Image
                      src={LeaderboardPoints}
                      alt="leaderboard"
                      width={450}
                    />
                  </div>
                  <div className="max-w-[40rem]">
                    <h1 className="heading-3 leading-8 text-left font-bold">
                      Keluarkan ambisi lewat leaderboard{" "}
                    </h1>
                    <p className="text-paragraph my-5 text-justify text-pretty ">
                      Papan urutan atau leaderboard dapat diakses untuk membantu
                      partisipan melihat urutannya dalam event. Semakin cepat
                      partisipan menyelesaikan tugas, maka namanya akan
                      ditampilkan pada papan teratas.
                    </p>
                  </div>
                </div>
              </div>
              {/* ### */}
              <div className="w-full my-20">
                <div className="flex flex-row gap-20">
                  <div className="flex flex-col gap-4 max-w-xl items-start justify-start">
                    <h1 className="heading-3 text-pretty leading-8">
                      Selalu Update dengan keadaan lewat Notifikasi
                    </h1>
                    <p className="text-paragraph my-5 text-justify text-pretty">
                      Nyalakan fitur notifikasi agar tidak ketinggalan informasi
                      penting dari Event Master. Bukan hanya notifikasi dalam
                      aplikasi, namun notifikasi diluar aplikasipun tersedia
                      agar partisipan dapat selalu update.
                    </p>
                  </div>
                  <Image
                    src={LeaderboardPoints}
                    alt="leaderboard"
                    width={450}
                  />
                </div>
                {/* ---- */}
                <div className="flex flex-row justify-center items-center gap-20 my-10">
                  <div className="max-w-md h-full flex justify-end">
                    <Image
                      src={LeaderboardPoints}
                      alt="leaderboard"
                      width={450}
                    />
                  </div>
                  <div className="max-w-[40rem]">
                    <h1 className="heading-3 leading-8 text-left font-bold">
                      Keluarkan Keterampilanmu, dan Bagikan pengalamanmu!{" "}
                    </h1>
                    <p className="text-paragraph my-5 text-justify text-pretty ">
                      Fitur share dapat dikirimkan kepada siapa saja, di
                      aplikasi manapun, dan kapanpun!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2 */}
            <input
              type="radio"
              name="tabs_1"
              role="tab"
              className="tab text-2xl font-medium leading-6"
              aria-label="Sebagai Event Master"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 1
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
