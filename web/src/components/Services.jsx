import React from "react";
import { FaBoxOpen, FaTruckLoading, FaCubes, FaDoorOpen, FaSatelliteDish, FaFileSignature, FaShieldAlt, FaDollarSign } from "react-icons/fa";

import service1Img from "../assets/img/blog1.jpg";
import service2Img from "../assets/img/blog2.jpg";
import service3Img from "../assets/img/blog3.jpg";

const Services = () => {
  const bgColor = "#FFFCE6"; // Soft luxury yellow background
  const cardColor = "#B0CE88";
  const textColor = "#4C763B";

  const services = [
    {
      title: "Safe Furniture Packing",
      icon: <FaBoxOpen size={30} color={textColor} />,
      desc: (
        <>
          We put the furniture in a safe way by the use of excellent packing materials and methods, and thus,
          we maintain the furniture moving companies in Abu Dhabi free of any kind of damage, scratches, or
          moisture during the transportation process.
        </>
      ),
      img: service1Img,
    },
    {
      title: "Secure Loading & Unloading",
      icon: <FaTruckLoading size={30} color={textColor} />,
      desc: (
        <>
          Our competent employees physically and with their own hands load and unload the furniture into the
          closings with the utmost care and attention, thus, they, thereby ensuring the stability and security
          of the items for the whole duration of the trip.
        </>
      ),
      img: service2Img,
    },
    {
      title: "Customized Container Options",
      icon: <FaCubes size={30} color={textColor} />,
      desc: (
        <>
          We give a chance for people to select different container sizes and kinds, which can be single or
          multi-household items or even bulk shipments, in order to utilize the space valuable and the cost
          as well.
        </>
      ),
      img: service3Img,
    },
    {
      title: "Door-to-Door Delivery",
      icon: <FaDoorOpen size={30} color={textColor} />,
      desc: (
        <>
          We are taking care of the entire trip from your place to the destination, thus offering you
          convenience and giving you peace of mind.
        </>
      ),
      img: service1Img,
    },
    {
      title: "Tracking & Real-Time Updates",
      icon: <FaSatelliteDish size={30} color={textColor} />,
      desc: (
        <>
          You are provided with regular updates and tracking options through which you have access to full
          information on the shipment status. Simply put, you are always aware of the exact status of your
          shipment.
        </>
      ),
      img: service2Img,
    },
    {
      title: "Customs Clearance Assistance",
      icon: <FaFileSignature size={30} color={textColor} />,
      desc: (
        <>
          We simplify international shipping by taking care of all customs documentation in a timely and
          correct manner.
        </>
      ),
      img: service3Img,
    },
    {
      title: "Insurance & Risk Protection",
      icon: <FaShieldAlt size={30} color={textColor} />,
      desc: (
        <>
          In case the furniture is damaged or lost because of some unexpected events, you are fully secured
          and reassured if you have selected our insurance option.
        </>
      ),
      img: service1Img,
    },
    {
      title: "Affordable Container Shipping Prices",
      icon: <FaDollarSign size={30} color={textColor} />,
      desc: (
        <>
          We make a point of keeping our prices competitive and, therefore, the customer will be able to
          combine his/her budget with good quality without safety and reliability being compromised.
        </>
      ),
      img: service2Img,
    },
  ];

  return (
    <section
      id="our-services"
      style={{
        backgroundColor: bgColor,
        padding: "80px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          color: textColor,
          textAlign: "center",
          fontSize: "2.7rem",
          fontWeight: "700",
          marginBottom: "70px",
          letterSpacing: "1px",
        }}
      >
        Our Premium Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
        }}
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(6px)",
              borderRadius: "22px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "all 0.4s ease",
              border: "1px solid rgba(0,0,0,0.05)",
              position: "relative",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.boxShadow = "0 25px 45px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.1)";
            }}
          >
            {/* IMAGE */}
            <div style={{ height: "230px", overflow: "hidden", position: "relative" }}>
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "40px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.25))",
                }}
              ></div>
            </div>

            {/* CONTENT */}
            <div style={{ padding: "28px" }}>
              {/* ICON + TITLE */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                {service.icon}
                <h3
                  style={{
                    color: textColor,
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  color: "#4C763B",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  textAlign: "justify",
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE RESPONSIVE */}
      <style>
        {`
          @media (max-width: 768px) {
            #our-services h2 {
              font-size: 2.2rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
