import {
  FaQrcode,
  FaCamera,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import EventTypeCard from "./EventTypeCard";

const eventTypes = [
  {
    icon: FaQrcode,
    title: "QR Code Scavenger Hunt",
    description:
      "Scan QR pada berbagai media seperti pada kertas, dalam website, foto, hingga dalam video.",
  },
  {
    icon: FaCamera,
    title: "Photo Scavenger Hunt",
    description:
      "Tingkatkan kreativitas melalui tugas foto yang dapat dibagikan dan dilihat oleh partisipan lainnya!",
  },
  {
    icon: FaMapMarkerAlt,
    title: "GPS Scavenger Hunt",
    description:
      "Eksplorasi sebuah daerah atau tempat acara dengan memberikan tugas GPS untuk partisipan.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Scavenger Hunt",
    description:
      "Tingkatkan nilai kebersamaan antar karyawan kantor melalui acara sederhana yang menegangkan.",
  },
  {
    icon: FaUsers,
    title: "Event Scavenger Hunt",
    description:
      "Berbagai macam tugas pada Hoople dapat disesuaikan untuk banyak tipe acara yang ingin dirayakan.",
  },
  {
    icon: FaGraduationCap,
    title: "Student Scavenger Hunt",
    description:
      "Bermain sambil belajar melalui tugas-tugas sekaligus berpetualang agar menghilangkan jenuh siswa.",
  },
];

const EventTypesGrid = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-[clamp(1rem,3vw,1.7rem)] lg:text-[clamp(2rem,4vw,2.2rem)] font-medium leading-relaxed text-pretty">
        Tips-Tips Event yang Dapat Kamu Explore Lebih Jauh
      </h2>
      <p className="text-pretty text-[var(--metal-gray-color)] text-[1rem] lg:text-[1.2rem] max-w-2xl mx-auto">
        Banyaknya jenis tugas dapat disesuaikan dengan tema acara special.
        <br />
        Cobalah bereksplorasi lebih dalam!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {eventTypes.map((eventType, index) => (
          <EventTypeCard
            key={index}
            icon={eventType.icon}
            title={eventType.title}
            description={eventType.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EventTypesGrid;
