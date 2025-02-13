import { useState } from "react";
import mailClose from "../assets/mail_closed.png";
import mailOpen from "../assets/mail_opened.png";
import heart from "../assets/heart.png";
import { Letter } from "./Letter";

export const Mail = () => {
  const [mailImg, setMailImg] = useState(mailClose);

  const handleMailClick = () => {
    // Handles and set the mail img upon clicked
    setMailImg((prevImg) => (prevImg === mailClose ? mailOpen : mailClose));
  };

  return (
    <>
      {/* Mail */}
      <div className="mail flex flex-col items-center gap-5">
        <img
          width={500}
          alt="Mail"
          src={mailImg}
          onClick={handleMailClick}
          className={mailImg === mailClose ? "mail-hover cursor-pointer" : ""}
        />
        <h1 className="text-center text-4xl max-sm:text-3xl">
          Open the mail pls pls pls! {">.<"}
        </h1>

        {/* Floating heart */}
        <img
          src={heart}
          width={200}
          className={`heart ${mailImg === mailClose ? "hidden" : "absolute"}`}
        />
        <Letter showLetter={mailImg === mailClose ? "hidden" : "absolute"}/>
      </div>
    </>
  );
};
