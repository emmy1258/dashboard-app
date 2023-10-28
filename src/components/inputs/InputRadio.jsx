/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const memoryOptions = ["Male", "Female"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InputRadio({ value, handleChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Gender</h2>
      </div>

      <RadioGroup value={value} onChange={handleChange} className="mt-2">
        <RadioGroup.Label className="sr-only">
          {" "}
          Choose a memory option{" "}
        </RadioGroup.Label>
        <div className="flex gap-4">
          {memoryOptions.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  "cursor-pointer focus:outline-none overflow-hidden",
                  active ? "ring-2 ring-offset-2 ring-sky-500" : "",
                  checked
                    ? "bg-sky-600 border-transparent text-white hover:bg-sky-700"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                  "border rounded-md py-3 px-8 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                )
              }
            >
              <RadioGroup.Label as="span">{option}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
