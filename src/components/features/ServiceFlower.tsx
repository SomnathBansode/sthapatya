"use client";

import { useState, useEffect } from "react";

const measuringTapeFlower =
  "/assets/b13a83b5d029e2e2aa6a839554617f84a51050ec.png";

interface Service {
  icon?: any;
  image?: string;
  title: string;
  description: string;
  angle: number;
}

const services: Service[] = [
  {
    image: "/municiple_logo/panvel.avif",
    title: "Panvel Municipal Corporation",
    description: "Comprehensive property tax assessment and collection",
    angle: 0,
  },
  {
    image: "/municiple_logo/dhule.avif",
    /*icon: Droplet,*/
    title: "Dhule Municipal Council",
    description: "Efficient water billing and tax collection system",
    angle: 45,
  },
  {
    image: "/municiple_logo/thane.avif",
    /*icon: Map,*/
    title: "Thane Municipal Corporation",
    description: "Land use mapping for urban planning",
    angle: 90,
  },
  {
    image: "/municiple_logo/jalgaon.avif",
    /*icon: BarChart3,*/
    title: "Jalgaon Municipal Corporation",
    description: "Transform municipal data into insights",
    angle: 135,
  },
  {
    image: "/municiple_logo/akola.avif",
    /*icon: MapPin,*/
    title: "Akola Municipal Corporation",
    description: "Advanced geospatial information systems",
    angle: 180,
  },
  {
    image: "/municiple_logo/amt.avif",
    /*icon: FileCheck,*/
    title: "Amravati Municipal Corporation",
    description: "Digital license management system",
    angle: 225,
  },
  {
    image: "/municiple_logo/pandharpur.avif",
    /*icon: Package,*/
    title: "Pandharpur Municipal Corporation",
    description: "Comprehensive asset tracking",
    angle: 270,
  },
  {
    image: "/municiple_logo/washim.avif",
    /*icon: Shield,*/
    title: "Washim Municipal Council",
    description: "Secure blockchain document storage",
    angle: 315,
  },
];

export function ServiceFlower() {
  const [rotation, setRotation] = useState(0);

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-[1000px] h-[900px] -ml-[890px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Petal shape - elongated oval like in reference image - decreased size */}
            <ellipse id="petal" cx="0" cy="-160" rx="50" ry="110" />

            {/* Multiple gradient colors for each petal */}
            {/* Red */}
            <radialGradient id="petalGradient0">
              <stop offset="0%" stopColor="#E87A7A" />
              <stop offset="50%" stopColor="#CF4646" />
              <stop offset="100%" stopColor="#A63535" />
            </radialGradient>

            {/* Orange */}
            <radialGradient id="petalGradient1">
              <stop offset="0%" stopColor="#E0A66D" />
              <stop offset="50%" stopColor="#C98038" />
              <stop offset="100%" stopColor="#A66629" />
            </radialGradient>

            {/* Yellow */}
            <radialGradient id="petalGradient2">
              <stop offset="0%" stopColor="#DEB965" />
              <stop offset="50%" stopColor="#C99D2C" />
              <stop offset="100%" stopColor="#A68123" />
            </radialGradient>

            {/* Green */}
            <radialGradient id="petalGradient3">
              <stop offset="0%" stopColor="#7BC77E" />
              <stop offset="50%" stopColor="#52A855" />
              <stop offset="100%" stopColor="#3D8640" />
            </radialGradient>

            {/* Teal */}
            <radialGradient id="petalGradient4">
              <stop offset="0%" stopColor="#66C1B3" />
              <stop offset="50%" stopColor="#37A190" />
              <stop offset="100%" stopColor="#2A7F6F" />
            </radialGradient>

            {/* Blue */}
            <radialGradient id="petalGradient5">
              <stop offset="0%" stopColor="#73A9D8" />
              <stop offset="50%" stopColor="#4988C4" />
              <stop offset="100%" stopColor="#366B9C" />
            </radialGradient>

            {/* Purple */}
            <radialGradient id="petalGradient6">
              <stop offset="0%" stopColor="#9E84D8" />
              <stop offset="50%" stopColor="#795DC2" />
              <stop offset="100%" stopColor="#5B469E" />
            </radialGradient>

            {/* Pink */}
            <radialGradient id="petalGradient7">
              <stop offset="0%" stopColor="#DC81A7" />
              <stop offset="50%" stopColor="#C95782" />
              <stop offset="100%" stopColor="#A54166" />
            </radialGradient>

            {/* Orange gradient for center */}
            <radialGradient id="centerGradient">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="50%" stopColor="#ff9e2c" />
              <stop offset="100%" stopColor="#ff8800" />
            </radialGradient>
          </defs>

          {/* Rotating petals group */}
          <g
            transform={`translate(300, 300) rotate(${rotation})`}
            style={{ transition: "none" }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const petalAngle = service.angle;

              return (
                <g key={index} transform={`rotate(${petalAngle})`}>
                  {/* Petal outline (stroke) */}
                  <use
                    href="#petal"
                    fill={`url(#petalGradient${index})`}
                    stroke="#999999"
                    strokeWidth="4"
                    opacity="0.85"
                    style={{
                      filter:
                        "drop-shadow(0 3px 8px rgba(0, 0, 0, 0.1))",
                    }}
                  />

                  {/* Service name and icon - rotates with petal */}
                  <foreignObject
                    x="-100"
                    y="-250"
                    width="200"
                    height="180"
                  >
                    <div
                      className="flex items-center justify-center h-full w-full"
                      style={{ overflow: "visible" }}
                    >
                      <div
                        style={{
                          transform: "rotate(-90deg)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "6px",
                          transformOrigin: "center center",
                        }}
                      >
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          Icon && (
                            <Icon
                              size={24}
                              className="text-black"
                              strokeWidth={2.5}
                            />
                          )
                        )}

                        <span
                          className="text-black"
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            lineHeight: "1.2",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </g>

          {/* Center circle - orange like in reference */}
          <circle cx="300" cy="300" r="60" />

          {/* Center inner highlight */}
          <circle
            cx="300"
            cy="300"
            r="50"
            fill="#ffcc66"
            opacity="0.4"
          />

          {/* Center rotating logo */}
          <foreignObject x="240" y="240" width="120" height="120">
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "center center",
              }}
            >
              <img
                src={measuringTapeFlower}
                alt="Measuring Tape Flower"
                className="w-full h-full object-contain"
              />
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
}
