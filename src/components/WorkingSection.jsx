import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import IconWrapper from "./IconWrapper";

function WorkingSection() {
  return (
    <div className="mx-7 lg:mx-[6.7em] ">
      <h2 className="text-purpleDark font-semibold text-2xl leading-9">
        How does it work ?
      </h2>

      {/* steps */}
      <div className="stepsContainer md:flex flex-wrap gap-2">
      <div className="flex md:w-[49%] items-center gap-4 mt-4 md:mt-6">
        <div className="icon">
          <IconWrapper>
            <img className="h-auto w-8" src={icon1} alt="icon" />
          </IconWrapper>
        </div>
        <div className="text">
          <h3 className="font-medium">Invite your Friends</h3>
          <p>Share the link tutedude.com with your friends</p>
        </div>
      </div>

      <div className="flex md:w-[49%] items-center gap-4 mt-4 md:mt-6">
        <div className="icon">
          <IconWrapper>
            <img className="h-auto w-8" src={icon2} alt="icon" />
          </IconWrapper>
        </div>
        <div className="text">
          <h3 className="font-medium">Friend purchases any course</h3>
          <p>Using you REFERRAL CODE in the payments page</p>
        </div>
      </div>

      <div className="flex md:w-[49%] items-center gap-4 mt-4 md:mt-6">
        <div className="icon">
          <IconWrapper>
            <img className="h-auto w-8" src={icon3} alt="icon" />
          </IconWrapper>
        </div>
        <div className="text">
          <h3 className="font-medium">You get ₹ 200 as referral money</h3>
          <p>Of total purchase the friend makes sharebale to your wallet</p>
        </div>
      </div>

      <div className="flex md:w-[49%] items-center gap-4 mt-4 md:mt-6">
        <div className="icon">
          <IconWrapper>
            <img className="h-auto w-8" src={icon4} alt="icon" />
          </IconWrapper>
        </div>
        <div className="text">
          <h3 className="font-medium">Your Friend gets ₹ 200 Off </h3>
          <p>
            On his overall fee on successful purchase using your referral code{" "}
          </p>
        </div>
      </div>

      <div className="flex md:w-[49%] items-center gap-4 mt-4 md:mt-6">
        <div className="icon">
          <IconWrapper>
            <img className="h-auto w-8" src={icon5} alt="icon" />
          </IconWrapper>
        </div>
        <div className="text">
          <h3 className="font-medium">Transfer money from wallet</h3>
          <p>
            When the wallet balance reaches ₹200 or more, you can withdraw it
          </p>
        </div>
      </div>
      </div>

      {/* Enrollment section */}
      <h4 className="font-medium text-purpleDark mt-16">Friends Who Enrolled</h4>

      {/* Terms & Conditions */}
      <h4 className="font-medium text-purpleDark mt-6 mb-8 md:mb-16">Terms & Conditions</h4>
    </div>
  );
}

export default WorkingSection;
