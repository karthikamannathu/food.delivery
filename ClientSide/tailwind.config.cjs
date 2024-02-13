

//** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    screen:{
      sm:'480px',
      md:'768px', 
      lg:'1024px'
    },
    
    extend: {
colors:{
  OrangePeel:'#ff9f00 ',
  PrincetonOrange:'#ff8f00',
  OrangeRyb:'#fb9902',
  greenprimary:"#4CC417",
  gold:"#DAA520"
}



    },
  },
  
  
  plugins: [ require('@tailwindcss/forms')({
    strategy: 'base',
  strategy: 'class',}) ],
}
