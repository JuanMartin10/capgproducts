import AppRouter from './routes';
import DataProvider from './context/data-context';
import './App.css';

const App = () => (
  <DataProvider>
    <AppRouter />;
  </DataProvider>
);

export default App;
