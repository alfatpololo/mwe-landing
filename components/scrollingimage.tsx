import Image from "next/image";
import React from "react";

const ScrollingImages: React.FC = () => {
  const images = [
    { src: "/coocaa.svg", alt: "Coocaa", width: 200, height: 72 },
    { src: "/aica.svg", alt: "Aica", width: 88, height: 72 },
    { src: "/coocaa.svg", alt: "Coocaa", width: 200, height: 72 },
    { src: "/aica.svg", alt: "Aica", width: 88, height: 72 },
  ];

  return (
    <div className="space-y-[16px]">
      {[...Array(5)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`overflow-hidden relative ${rowIndex % 2 === 0 ? "ltr" : "rtl"}`}
        >
          <div className="flex gap-[32px] animate-scroll whitespace-nowrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                style={{ width: image.width, height: image.height }}
              >
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.src}
                  alt={image.alt}
                  className="grayscale hover:grayscale-0 object-cover"
                />
              </div>
            ))}
            {/* Duplicate for smooth looping */}
            {images.map((image, index) => (
              <div
                key={`dup-${index}`}
                className="relative flex-shrink-0"
                style={{ width: image.width, height: image.height }}
              >
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.src}
                  alt={image.alt}
                  className="grayscale hover:grayscale-0 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-rtl {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .ltr .animate-scroll {
          animation: scroll-ltr 20s linear infinite;
        }

        .rtl .animate-scroll {
          animation: scroll-rtl 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingImages;
