/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#D3D3D3",
        // secondary: "#580B57",
        // tertiary: "#FFFFFF",
        // ctcprimary: "#580B57",
        // ctcSecondary: "#D3D3D3",
        // textprimary: "#ffffff",
        // textSecondary: "#580B57",
        // ctcprimaryLight:"#8a0b88"
        primary: "#E5F3FD", // Light Blue  
        secondary: "#0B3D91", // Dark Blue  
        tertiary: "#FFFFFF", // White  
        ctcprimary: "#0B3D91", // Dark Blue  
        ctcSecondary: "#ADD8E6", // Light Blue  
        textprimary: "#FFFFFF", // White  
        textSecondary: "#0B3D91", // Dark Blue  
        ctcprimaryLight: "#1465C0" // Brighter Blue  
      },

      fontFamily: {
        custom: ["Urbanist", "sans-serif"],
        handwritting: ["Dancing Script"],
        title: ["Annapurna SIL"],
        description: ['Open Sans Light', 'sans-serif'],
        subtext: ['EB Garamond'],
        Bnumber: ['Open Sans']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("flowbite/plugin")],
};