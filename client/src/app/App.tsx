import { Button, ThemeProvider, ToasterComponent, ToasterProvider, configure } from '@gravity-ui/uikit';
import { toaster } from '@gravity-ui/uikit/toaster-singleton';
import './global.css';

configure({ lang: 'en' });

const App = () => (
  <ThemeProvider theme="light">
    <ToasterProvider toaster={toaster}>
      <Button
        onClick={() => {
          toaster.add({
            name: 'test',
            title: 'Hello, world!',
            content: 'This is a toast',
            theme: 'danger',
          });
        }}
      >
        Click me
      </Button>
      <ToasterComponent />
    </ToasterProvider>
  </ThemeProvider>
);

export default App;
