import { useState } from 'react';
import { LessonOneWrapper } from './components/LessonOneWrapper';
import { WordsKey } from './components/LessonOneWrapper';

import { words } from './assets/words';

function App() {
  const [animal, setAnimal] = useState<WordsKey>('Bode');

  return (
    <main className="containerMother">
      <LessonOneWrapper animal={animal} />
    </main>
  );
}

export default App;
