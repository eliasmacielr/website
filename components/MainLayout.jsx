import { createTheme, ThemeProvider } from '@mui/material';
import 'computer-modern/index.css';
import Container from '@mui/material/Container';
import Header from './Header';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#35bbca',
    },
    secondary: {
      main: '#f15d30',
    },
    text: {
      primary: '#2a303b',
      hint: '#ffffff',
    },
    background: {
      default: '#f8f8ff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '"CMU Serif"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Arial',
      'Roboto',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontFamily: '"CMU Serif Extra"'
    },
    h2: {
      fontSize: '2rem',
    },
  },
});

export default function MainLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header/>
        <main>
          {children}
        </main>
      </Container>
    </ThemeProvider>
  );
}
