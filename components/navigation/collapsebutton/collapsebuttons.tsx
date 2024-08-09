import { useState, ReactNode } from "react";

interface DropdownButtonProps {
  label: string;  // Label untuk tombol dropdown
  children: ReactNode;  // Konten yang akan ditampilkan saat dropdown dibuka
}

export default function DropdownButton({ label, children }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4 border border-primary-blue w-full">
      <button
        className="text-secondary-black w-full text-start py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={toggleDropdown}
      >
        {label}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 ">
          {children}
        </div>
      )}
    </div>
  );
}
