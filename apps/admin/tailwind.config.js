const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    '**/**.{js,tsx,jsx}',
    '**.{jsx,tsx,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
