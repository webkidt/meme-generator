import { useState, useEffect } from 'react';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(jsonData => setAllMemes(jsonData.data.memes));
  }, []);

  function getMemeImage() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    let url = allMemes.at(randomNumber).url;
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
