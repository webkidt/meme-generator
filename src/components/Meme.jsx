import { useState } from 'react';
import memesData from '../memesData';

function Meme() {
  let [memeImage, setMemeImage] = useState('');

  function getMemeImage() {
    let memesArray = memesData.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray.at(randomNumber).url);
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
      {memeImage && <img className='meme--image' src={memeImage} alt='meme image' />}
    </main>
  );
}

export default Meme;
