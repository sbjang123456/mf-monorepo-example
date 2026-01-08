import sharedPreset from "../../packages/shared/tailwind.preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [sharedPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    // Remote 앱들의 소스 파일도 스캔하여 Tailwind 클래스 생성
    "../remote-products/src/**/*.{js,ts,jsx,tsx}",
    "../remote-users/src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
