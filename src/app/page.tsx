"use client";

import { useState } from "react";
import { Collapse } from "react-collapse";

const ITEMS = [1, 2, 3];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<any>(null);

  return (
    <main className="flex min-h-screen flex-col p-8 bg-[#f8f9fa] sm:p-24">
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
              } py-3 px-4 text-base font-medium w-full text-left flex justify-between items-center`}
            >
              Accordion Item #{item}
              <span
                className={openIndex === index ? "arrow-up" : "arrow-down"}
              ></span>
            </button>
            <Collapse isOpened={openIndex === index}>
              <div className="py-4 px-6">
                <strong>This is the {item} item's accordion body.</strong> You
                can modify any of this with custom CSS or overriding our default
                variables. It's also worth noting that just about any HTML can
                go within the{" "}
                <code className="text-[#d63384] text-sm">.accordion-body</code>,
                though the transition does limit overflow.
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </main>
  );
}
