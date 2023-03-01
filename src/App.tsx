import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
