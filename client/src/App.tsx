import { useState } from 'react';
import { LessonOneWrapper } from './components/LessonOneWrapper';
import { WordsKey } from './components/LessonOneWrapper';

import { words } from './assets/words';

function App() {
  const [animal, setAnimal] = useState<WordsKey>('Bode');
  const [count, setCount] = useState<number>(1);

  return (
    <main className="containerMother">
      <LessonOneWrapper animal={animal} />
      <button
        onClick={() => {
          // transform words in array
          const wordsArray = Object.keys(words);
          setCount((oldValue) => oldValue + 1);
          setAnimal(wordsArray[count] as WordsKey);
        }}
      >
        Troca
      </button>
    </main>
  );
}

export default App;
