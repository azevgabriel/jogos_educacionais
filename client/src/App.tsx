import AppProvider from './hooks';
import { LessonOne } from './pages/LessonOne';

function App() {
  return (
    <AppProvider>
      <main className="containerMother">
        <LessonOne />
      </main>
    </AppProvider>
  );
}

export default App;
