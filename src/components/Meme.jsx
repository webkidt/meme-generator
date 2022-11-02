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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(m => {
      return {
        ...m,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='form--input'
          placeholder='Top text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          className='form--input'
          placeholder='Bottom text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {meme.randomImage && (
        <div className='meme'>
          <img className='meme--image' src={meme.randomImage} alt='meme image' />
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}

export default Meme;
