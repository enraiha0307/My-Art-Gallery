import './App.css';
import Asta from './imgs/Art Card-Asta.svg';
import Toge from './imgs/Art Card-Toge.svg';
import Ace from './imgs/Art Card-Ace.svg';
import Daisuke from './imgs/Art Card-Daisuke.svg';
import Itachi from './imgs/Art Card-Itachi.svg';
import Luffy from './imgs/Art Card-Luffy.svg';
import Samurai from './imgs/Art Card-samurai.svg';

function App() {
  return (
    <div >
      <div className="body">

      <header>
        <ul>
          <li>HOME</li>
        </ul>
      </header>
      <div className="title">
        <h1 className="title-text">AKANKSHA'S GALLERY</h1>
      </div>
      <div className="gallery-grid-outer">
        <img src={Asta} alt="Asta from Black Clover" />
        <img src={Toge} alt="Inumaki Toge from Jujutsu Kaisen" />
        <img src={Ace} alt="Ace from One Piece" />
        <img src={Luffy} alt="Luffy from One Piece" />
        <img src={Daisuke} alt="Daisuke Kanbe from Billionaire Detective" />
        <img src={Itachi} alt="Itachi from Naruto" />
        <img src={Samurai} alt="Samurai girl" />
      </div>
      </div>
    </div>
  );
}

export default App;
