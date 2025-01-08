import AI from "@/assets/png/ai.png";
import AppsStore from "@/assets/png/appstore.png";
import Calender from "@/assets/png/calender.png";
import EasyUse from "@/assets/png/easy-use.png";
import Event from "@/assets/png/event.png";
import FreeTrial from "@/assets/png/free-trial.png";
import PlayStore from "@/assets/png/googleplay.png";
import Platform from "@/assets/png/platform.png";
import PointLeader from "@/assets/png/point-leader.png";
import Translate from "@/assets/png/translate.png";
import HalfMobile from "@/assets/svg/half-mobile.svg";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_SUPERIOR = [
  { label: "Coba Gratis", icon: FreeTrial },
  { label: "Dukungan berbagai bahasa ", icon: Translate },
  { label: "Teknologi deteksi objek dengan AI", icon: AI },
  { label: "Waktu dan tempat fleksibel", icon: Calender },
  { label: "Akses di banyak platform", icon: Platform },
  { label: "Antarmuka yang mudah digunakan", icon: EasyUse },
  { label: "Papan peringkat yang diperbaharui setiap saat", icon: PointLeader },
  { label: "Buat event sesuai keinginan", icon: Event },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-full w-full">
      {/* Hero 1 */}
      <div
        id="hero-main"
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-[var(--yellow-stabilo-color)]">
              Discover the Thrill: Hunt and Explore with Us!
            </h1>
          </div>
        </div>
      </div>
      {/* --- */}

      <section className="hero bg-base-100 h-[350px]">
        <div className="hero-content text-center lg:text-xl">
          <div className="max-w-2xl">
            <p>
              Hoople menawarkan cara yang mudah dan seru dalam mengelola
              tugas-tugas atau misi dalam acara. Dilengkapi dengan teknologi
              mutakhir seperti&nbsp;
              <strong className="text-primary">
                AI Translation dan AI Object Detection
              </strong>
              , Hoople menghadirkan pengalaman yang canggih dan interaktif.
            </p>
          </div>
        </div>
      </section>

      {/* About-us section */}
      <section
        id="about-us"
        className="flex flex-col justify-center bg-secondary max-h-min lg:h-[400px] w-full"
      >
        <div className="flex flex-col md:flex-row-reverse md:justify-around md:items-center px-4 py-5 gap-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="image-1"
            className="max-w-sm rounded-lg drop-shadow md:shadow-2xl"
          />
          <div className="max-w-2xl prose">
            <h2>Tentang Kami</h2>
            <p>
              Hoople adalah aplikasi immersive scavenger hunt yang dirancang
              untuk mempermudah Anda dalam mengatur tugas-tugas dalam acara atau
              event apa pun.
              <br />
              <br />
              Dengan fitur AI Translation dan AI Object Detection, kami
              memastikan pengalaman Anda lebih menyenangkan dan tanpa hambatan.
              Unduh Hoople secara gratis sekarang dan rasakan sensasi scavenger
              hunt yang sesungguhnya!
            </p>
          </div>
        </div>
      </section>
      {/* --- */}

      {/* How to use section */}
      <section
        id="how-to-use"
        className="w-full min-h-dvh bg-base-100 flex flex-col justify-center lg:flex-row items-center lg:justify-evenly gap-10 lg:gap-0"
      >
        <div className="max-w-md">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi.</div>
            </div>
          </div>
        </div>
        <div className="max-w-sm h-full bg-transparent leading-relaxed">
          <h1 className="text-2xl lg:text-4xl font-bold text-pretty text-left">
            Cara Menggunakan Hoople
          </h1>
          <div className="flex flex-row gap-5 items-center py-4 border-[var(--navy-color)] border-b-2">
            <h1 className="text-4xl font-bold">01</h1>
            <p>Unduh aplikasi Hoople di Google Play Store atau App Store.</p>
          </div>
          <div className="flex flex-row gap-5 items-center py-4 border-[var(--navy-color)] border-b-2">
            <h1 className="text-4xl font-bold">02</h1>
            <p>Buat akun, temukan event menarik, dan bergabunglah.</p>
          </div>
          <div className="flex flex-row gap-5 items-center py-4">
            <h1 className="text-4xl font-bold">03</h1>
            <p>
              Selesaikan semua tugas, dapatkan hadiah, dan bagikan keseruan Anda
              di media sosial!
            </p>
          </div>
        </div>
      </section>
      {/* --- */}

      {/* Ads Download */}
      <section
        id="ads-download"
        className="w-full min-h-max py-10 flex justify-center relative"
      >
        <div className="w-full sm:w-[calc(100%-20px)] md:w-[calc(100%-100px)]  xl:w-[calc(100%-300px)] h-[178px] md:h-[342px] bg-[var(--green-stabilo-color)] xs:rounded-none sm:rounded-3xl flex flex-col md:flex-row items-center justify-center drop-shadow-md">
          <div className="flex flex-col gap-4 justify-center w-full lg:w-[calc(100%-200px)] h-full p-5 md:pl-10 xl:pl-20">
            <h1 className="heading-1 block text-left leading-normal">
              Coba ikuti keseruan dan keunggulan Hoople,{" "}
              <strong className="uppercase">unduh sekarang</strong>
            </h1>
            <div className="flex flex-row gap-3">
              <Link prefetch={true} href={"##"} target="_blank">
                <Image src={AppsStore} alt="app-store" width={200} />
              </Link>
              <Link
                prefetch={true}
                href={
                  "https://play.google.com/store/apps/details?id=com.optimind.hoople&pcampaignid=web_share"
                }
                target="_blank"
              >
                <Image src={PlayStore} alt="play-store" width={200} />
              </Link>
            </div>
          </div>
          <div className="w-[calc(100%-200px)] h-full p-0 m-0 overflow-hidden hidden md:block">
            <Image
              src={HalfMobile}
              alt="half-mobile"
              className="w-[200px] lg:w-[240px] h-full object-contain object-bottom objec p-0 m-0 mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* --- */}

      {/* Benefit Product */}
      <section
        id="benefit-product"
        className="w-full min-h-[600px] py-10 px-5 flex justify-center items-center bg-base-100"
      >
        <div className="flex flex-col items-center justify-center gap-14 w-full h-full lg:w-[calc(100%-140px)]">
          <h1 className="heading-1 font-semibold text-2xl md:text-5xl">
            Keunggulan Produk
          </h1>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 justify-stretch gap-5 lg:gap-16">
            {PRODUCT_SUPERIOR.map((it) => (
              <div
                key={it.label}
                className="flex flex-col items-center justify-stretch max-w-[187px] bg-transparent gap-4 text-pretty text-center text-sm  md:text-lg"
              >
                <Image
                  src={it.icon}
                  alt="product"
                  className="object-contain object-center max-w-[50px]"
                />
                <p>{it.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- */}

      {/* Visi & Misi */}
      <section className="w-full min-h-dvh bg-secondary bg-wave-path bg-blend-soft-light bg-no-repeat bg-cover bg-center flex items-center justify-evenly relative">
        <div className="layer-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="max-w-sm min-h-[200px] drop-shadow-lg flex flex-col items-center justify-center gap-7">
          <h1 className="font-semibold text-3xl">VISI HOOPLE</h1>
          <div className="w-[295px] h-[295px] p-5 bg-[var(--green-stabilo-color)] rounded-full flex flex-col justify-center">
            <p className="text-[clamp(1em, 4vw, 1.1em)] leading-6 text-pretty text-center">
              Menjadi platform scavenger hunt terbaik dengan perpaduan
              kecerdasan buatan (AI) yang interaktif dan inovatif.
            </p>
          </div>
        </div>
        <div className="min-h-dvh flex flex-col justify-end pb-16">
          <div className="max-w-sm min-h-[200px] drop-shadow-lg flex flex-col items-center justify-center gap-7">
            <h1 className="font-semibold text-3xl">MISI HOOPLE</h1>
            <div className="w-[295px] h-[295px] p-5 bg-[var(--green-stabilo-color)] rounded-full flex flex-col justify-center">
              <p className="text-[clamp(1em, 4vw, 1.1em)] leading-6 text-pretty text-center">
                Menyediakan pengalaman scavenger hunt yang tak terlupakan dengan
                memanfaatkan kecerdasan buatan untuk menciptakan petualangan
                yang unik dan interaktif bagi setiap pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- */}
    </main>
  );
}
