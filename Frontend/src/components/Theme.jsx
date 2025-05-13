// src/components/Theme.jsx
import { createTheme } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@mui/styles';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: `'Noto Nastaliq Urdu', 'JameelNoori', 'serif'`,
  },
});

// Export the RTL-configured JSS instance
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// ✅ Named exports
export { theme, jss };
