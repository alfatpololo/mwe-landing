import { useState, ReactNode } from "react";

interface DropdownButtonProps {
  icon: string;
  title: string;
  description: string;
  website: string;
  children?: ReactNode;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  icon,
  title,
  description,
  website,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full p-2 border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none rounded-t-md ${
          isOpen ? "rounded-b-none" : "rounded-md"
        }`}
      >
        <div className="flex items-center">
          <img src={icon} alt={`${title} icon`} className="w-5 h-5 mr-2" />
          <span>{title}</span>
        </div>
        <span className="ml-2">
          {isOpen ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="border border-t-0 border-gray-300 rounded-b-md p-4">
          <p className="text-gray-700">{description}</p>
          <div className="text-right mt-4">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
