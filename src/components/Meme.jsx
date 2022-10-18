import memesData from '../memesData';

function getMemeImage() {
  let memesArray = memesData.data.memes;
  let randomNumber = Math.floor(Math.random() * memesArray.length);
  let url = memesArray.at(randomNumber).url;
  console.log(url);
}

function Meme() {
  return (
    <main>
      <div className='form'>
        <input type='text' className='form--input' placeholder='Top text' />
        <input type='text' className='form--input' placeholder='Bottom text' />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}

export default Meme;
