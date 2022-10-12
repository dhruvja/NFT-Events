import React from "react";

export default function AboutSection() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center px-10 flex-wrap">
        <div className="max-w-[608px]">
          <h1 className="text-5xl sm:text-[80px]">Tokenize your Events</h1>
          <p className="text-xl">
          Create NFT Tickets in less than 1 minute and token gate your events with ease and prevent fake tickets with the power of NFTs.
          </p>
        </div>
        < >
          <img src="Group72.png" />
          <div className="absolute  -z-10 right-0   ">
            <img src="Ellipse21.svg" className="h-[60rem]" />
          </div>
        </>
      </div>
    </div>
  );
}
