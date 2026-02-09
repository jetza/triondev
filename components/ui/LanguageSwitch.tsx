"use client";

import { useState } from "react";
import MenuLayeredButton from "./MenuLayeredButton";

export default function LanguageSwitch() {
  const [currentLocale, setCurrentLocale] = useState<"sr" | "en">("sr");

  const options = [
    { value: "sr", label: "sr" },
    { value: "en", label: "en" },
  ];

  const handleChange = (value: string) => {
    setCurrentLocale(value as "sr" | "en");
    // TODO: Implement actual locale switching with next-intl routing
    console.log("Switching to:", value);
  };

  return (
    <MenuLayeredButton
      options={options}
      value={currentLocale}
      onChange={handleChange}
    />
  );
}
