import trollface from '../images/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img className='header__image' src={trollface} alt='trollface'></img>
      <h1 className="header__title">Meme Generator</h1>
    </header>
  )
}
