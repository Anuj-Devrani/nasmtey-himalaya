/**
 * @type {import('prettier').Options}
 **/
const config = {
  singleQuote: true,
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
}

module.exports = config
