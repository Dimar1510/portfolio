import React from "react";

const ContactCard = ({ type, value, icon }) => {
  return (
    <div>
      <div className="flex gap-4 rounded-xl items-center">
        <i className={icon + " text-3xl"}></i>
        <span className="text-lg">{value}</span>

        {/* <a href="#" className="contact__button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a> */}
      </div>
    </div>
  );
};

export default ContactCard;
