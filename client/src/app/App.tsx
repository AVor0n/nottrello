import { ThemeProvider, ToasterComponent, ToasterProvider, configure } from '@gravity-ui/uikit';
import { toaster } from '@gravity-ui/uikit/toaster-singleton';
import { RouterComponent } from './router';
import './global.css';

configure({ lang: 'en' });

const App = () => (
  <ThemeProvider theme="light">
    <ToasterProvider toaster={toaster}>
      <RouterComponent />
      <ToasterComponent />
    </ToasterProvider>
  </ThemeProvider>
);

export default App;
