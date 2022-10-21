import { useState } from 'react';
import memesData from '../memesData';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });
  const [allMemeImages] = useState(memesData);

  function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray.at(randomNumber).url;
    setMeme(m => ({ ...m, randomImage: url }));
  }

  return (
    <main>
      <div className='form'>
        <input type='text' className='form--input' placeholder='Top text' />
        <input type='text' className='form--input' placeholder='Bottom text' />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {meme.randomImage && (
        <img className='meme--image' src={meme.randomImage} alt='meme image' />
      )}
    </main>
  );
}

export default Meme;
