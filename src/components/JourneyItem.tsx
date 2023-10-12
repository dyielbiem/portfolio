import { IoIosArrowDropdown } from "react-icons/io";

interface Props {
  header: string;
  location: string;
  year: string;
  isContentVisible: boolean;
  additionalInfo?: string[];
  onClick: () => void;
}
const JourneyItem = ({
  header,
  location,
  year,
  isContentVisible,
  additionalInfo,
  onClick,
}: Props) => {
  return (
    <div className="exp-item" onClick={onClick}>
      <div className="header">
        <h4>{header}</h4>
        <IoIosArrowDropdown
          className={`${isContentVisible && "rotate-180"} arrow`}
        />
      </div>
      <div className={`${isContentVisible && "show-content"} wrapper`}>
        <div>
          <p className="location">{location}</p>
          <p>{year}</p>
          {additionalInfo && (
            <ul>
              {additionalInfo.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyItem;
