/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
      galactica: ['GalacticaBold', 'sans-serif'],
      chilanka: ['Chilanka', 'cursive'],
     
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs:"300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
          
        },
       
      },
     
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FE6E33",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#50e2d4",
          foreground: "hsl(var(--secondary-foreground))",
          lighter: "#f0fdfc",
          50: "#e0f9f7",  // Lightest shade
          100: "#c2f3f0",
          200: "#a3ece8",
          300: "#85e6e1",
          400: "#66dfd9",
          500: "#50e2d4",  // Original color
          600: "#41b8ac",
          700: "#329082",
          800: "#24675a",
          900: "#153f32"   // Darkest shade
        },
        
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sky: {
          300: '#60a5fa',
          400: '#3b82f6',
        },
        pink: {
          300: '#f472b6',
          400: '#ec4899',
        },
        green: {
          300: '#4ade80',
          400: '#22c55e',
        },
        yellow: {
          300: '#facc15',
          400: '#eab308',
        },
        red: {
          300: '#f87171',
          400: '#ef4444',
        },
        purple: {
          300: '#c084fc',
          400: '#a855f7',
        },
        blue: {
          300: '#60a5fa',
          400: '#3b82f6',
        },
        indigo: {
          300: '#818cf8',
          400: '#6366f1',
        },
        violet: {
          300: '#a78bfa',
          400: '#8b5cf6',
        },
      
        green: {
          100: "#FE6E33",
          DEFAULT: "#FE6E33",
          300: '#9dbc2f', 
          400: '#87a225', 
          500: '#6d8f1c', 
        },
        
        orange: {
          50: '#fffaf0',
          100: '#feebc8',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936',
          500: '#dd6b20',
          600: '#c05621',
          700: '#9c4221',
          800: '#7b341e',
          900: '#652b19',
        },

        secondGreen: {
          500:'#22c55e',
          600:'#b7ebbf'
            
        }


      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'border': {
          to: { '--border-angle': '360deg' },
        },
        "code-1": {
          "0%": { opacity: 0 },
          "2.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-2": {
          "16.2%": { opacity: 0 },
          "18.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-3": {
          "32.5%": { opacity: 0 },
          "35%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-4": {
          "48.75%": { opacity: 0 },
          "51.25%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-5": {
          "65%": { opacity: 0 },
          "72.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-6": {
          "81.25%": { opacity: 0 },
          "83.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        line: {
          "0%, 100%": { left: 0, opacity: 0 },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "10%, 40%, 60%, 90%": { opacity: 0 },
          "25%, 75%": { opacity: 1 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "radar-spin": {
          from: {
            transform: "rotate(20deg)",
          },
          to: {
            transform: "rotate(380deg)",
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        'border': 'border 4s linear infinite',
        rotate: 'rotate 30s linear infinite',
        "radar-spin": "radar-spin 10s linear infinite",
        'border-spin': 'border-spin 7s linear infinite',

      },
      backgroundImage: {
        hero: "url(/hero/hero-bg.png)",
        cta_img: "url('/media/mic.png')",
        hero_shape: "url(/hero/shape-1.svg)",
        hero_shape2_light: "url(/hero/shape-2-light.svg)",
        hero_shape2_dark: "url(/hero/shape-2-dark.svg)",
        about_shape_light: "url(/about/shape-light.svg)",
        about_shape_dark: "url(/about/shape-dark.svg)",
        dots_light: "url(/dots-light.svg)",
        dots_dark: "url(/dots-dark.svg)",
        work_project_bg_light: "url(/work/project-bg-light.png)",
        work_project_bg_dark: "url(/work/project-bg-dark.png)",
        contact_illustration_light: "url(/contact/illustration-light.svg)",
        contact_illustration_dark: "url(/contact/illustration-dark.svg)",
        customGreenGradient: 'linear-gradient(to right, #b8d941, #b0d24b, #b7d64c)',
        primaryImage: "url('/images/wave_colored.png')",
        secondaryImage: "url('/images/waves.png')",
      },
     
      
    },
  },
  plugins: [require("tailwindcss-animate"),  function ({ addUtilities }) {
         const newUtilities = {
             ".no-scrollbar::-webkit-scrollbar": {
                 display: "none",
             },
             ".no-scrollbar": {
                 "-ms-overflow-style": "none",
                 "scrollbar-width": "unset",
             },
         };
         addUtilities(newUtilities);
     },],


};
