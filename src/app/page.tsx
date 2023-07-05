"use client";

import { useState } from "react";
import { Collapse } from "react-collapse";

const ITEMS = ["first", "second", "third"];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col p-4 bg-[#f8f9fa] sm:p-24">
      <h2 className="py-6">TailwindCss Accordion</h2>
      <div className="bg-white rounded">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className={`border-gray-200 border-[#00000020] border ${
              !(index === 0) && !(index === ITEMS.length - 1) && "border-y-0"
            } ${index === 0 && "rounded-t"} ${
              index === ITEMS.length - 1 && "rounded-b"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`${
                openIndex === index &&
                "text-[#0c63e4] bg-[#e7f1ff] shadow-[inset_0_-1px_0_rgba(0,0,0,.125)]"
              } py-3 px-4 text-base font-normal w-full text-left flex justify-between items-center`}
            >
              Accordion Item #{index + 1}
              <span
                className={openIndex === index ? "arrow-up" : "arrow-down"}
              ></span>
            </button>
            <Collapse isOpened={openIndex === index}>
              <div className="py-4 px-6">
                <strong>This is the {item} item's accordion body.</strong> It is shown by default,
                until the collapse plugin adds the appropriate classes that we
                use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the <code className="text-[#d63384] text-sm">.accordion-body</code>, though
                the transition does limit overflow.
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </main>
  );
}
