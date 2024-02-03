import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <h1 className='font-bold'>Play song</h1>
      <audio controls autoplay loop>
        <source src="./public/song-seyi.mp3" type="audio/mpeg" />
      </audio>
      {yesPressed ? (
        <>
        <img src="data:image/jpeg;base64,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" />
        <div className="text-4xl font-bold my-4">Ok yayyyy!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="data:image/jpeg;base64,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" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
