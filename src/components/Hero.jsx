import React from "react";

function Hero() {
  return (
    <div className="lg:flex mt-5 mb-10 lg:mb-4 mx-7 justify-between lg:mx-[6.7em] lg:gap-3 xl:gap-10">
      <div className="stat flex flex-wrap shadow-custom rounded-[20px] p-4 items-end justify-between sm:justify-center mb-9">
        <div className="earning w-[40%] sm:w-[33%]">
            <p className="text-sm text-purpleDark">Referral Earning</p>
            <h3 className="text-[32px] font-medium leading-[48px]">₹ 2,500</h3>
        </div>
        <div className="total w-[40%] sm:w-[33%]">
        <p className="text-sm text-purpleDark">Total Referrals</p>
            <h3 className="text-[32px] font-medium leading-[48px]">7</h3>
        </div>
        <div className="balance mt-6 w-[40%] sm:w-[33%]">
        <p className="text-sm text-purpleDark">Wallet Balance</p>
            <h3 className="text-[32px] font-medium leading-[48px]">₹ 500</h3>
        </div>
        <div className="withdrawal bg-purpleDark font-medium px-[16px] py-[8px] rounded-[20px] text-white mb-2 sm:mt-10">Withdraw Balance</div>
      </div>

      <div className="referral">
        <h2 className="text-2xl text-purpleDark font-semibold mb-2">
          Your Referral Code
        </h2>
        <div className="borderGradient bg-gradient-to-r from-purpleLight  to-purpleDark p-0.5 rounded-lg">
          <h2 className="referralCode bg-white uppercase border-white flex justify-center items-center text-xl font-medium tracking-[1.5em] leading-[30px] px-[64px] rounded-lg py-[15px] border-2">
            EDCH54
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
