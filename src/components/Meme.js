import React from 'react';
import memesData from '../data/memesData.js';

export default function Meme() {

  const [memeURL, setMemeURL] = React.useState('');

  function changeMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random()*memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeURL(url);
  }

  return (
    <main className="meme">
      <div className="meme__form">
        <input className="meme__input"></input>
        <input className="meme__input"></input>
        <button className="meme__get-image" onClick={changeMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className='meme__image' alt='Meme' src={memeURL}></img>
    </main>
  );
}