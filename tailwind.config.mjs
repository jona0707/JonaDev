/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        //TODO
        // primary: '#FF6363',
        secondary: '#004aad',
        available: '#149603',

      },
      //TODO
      // fontFamily: {
      //   // body: ['Nunito'],
      // },
    },
  },
  plugins: [require('flowbite/plugin')],
}
