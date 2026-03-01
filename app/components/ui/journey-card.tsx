type JourneyExperience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
};

type JourneyCardProps = {
  experience: JourneyExperience;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
};

export default function JourneyCard({
  experience,
  index,
  isActive,
  onSelect,
}: JourneyCardProps) {
  return (
    <div
      className="timeline-item-flat"
      id={`exp-${index + 1}`}
      data-country={experience.location}
      onClick={() => onSelect(index)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(index);
        }
      }}
      style={isActive ? { transform: "translateX(5px)" } : undefined}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content-flat">
        <h4 className="timeline-title">
          {experience.role} @ {experience.company}
        </h4>
        <p className="timeline-date">{experience.duration}</p>
        <p className="timeline-location">
          <i className="fas fa-map-marker-alt"></i> {experience.location}
        </p>
        {!isActive && (
            <div className="timeline-description mt-4">
            <ul className="list-disc pl-5 space-y-2 text-[0.9rem]">
                <li key={`${experience.company}-desc-0`} className="font-mono">
                  {experience.description[0]}
                </li>
            </ul>
          </div>
        )}
        {isActive && (
          <div className="timeline-description mt-4">
            <ul className="list-disc pl-5 space-y-2 text-[0.9rem]">
              {experience.description.map((line, descIndex) => (
                <li key={`${experience.company}-desc-${descIndex}`} className="font-mono">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
