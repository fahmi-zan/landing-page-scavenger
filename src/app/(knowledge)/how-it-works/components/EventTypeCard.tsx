import { IconType } from "react-icons";

interface EventTypeCardProps {
  title: string;
  description: string;
  icon: IconType;
  isActive?: boolean;
}

const EventTypeCard = ({
  title,
  description,
  icon: Icon,
  isActive = false,
}: EventTypeCardProps) => {
  return (
    <div
      className={`card bg-white transition-colors duration-300 group hover:bg-primary hover:text-white hover:shadow-xl cursor-pointer
      ${isActive ? "bg-primary text-white" : "bg-base-100"}`}
    >
      <div className="card-body items-center text-center">
        <Icon className="w-12 h-12 mb-4" />
        <h3 className="card-title">{title}</h3>
        <p className="text-[var(--metal-gray-color)] group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventTypeCard;
