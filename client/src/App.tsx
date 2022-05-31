import { LessonOneWrapper } from './components/LessonOneWrapper';

import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <main className="containerMother">
        <LessonOneWrapper animal="Bode" />
      </main>
    </AppProvider>
  );
}

export default App;
