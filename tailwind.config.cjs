// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerColor: "var(--header-color)", 
        bgColor: "var(--background-color)",
        breadcrumbColor: "var(--breadcrumb-background-color)",
        textColor: "var(--text-color)",
        borderColor: "var(--border-color)"
        // Sử dụng biến CSS
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--header-color": "white", 
          "--background-color": "#f9faff",
          "--breadcrumb-background-color": "#f2f6f9",
          "--text-color": "#494949",
          "--border-color": "#dbdbdb",
          // Định nghĩa biến CSS ở đây
        },
      });
    },
  ],
  variants: {
    extend: {},
  },
  
};
