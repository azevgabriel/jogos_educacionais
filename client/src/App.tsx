import AppProvider from './hooks';
import { AppRoutes } from './routes/index.routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
