import Wrapper from '../wrapper/Wrapper';
import './header.css';

function Header() {
  // pass to props isDarMode and change btn-dark-mode
  return (
    <header className="header">
      <Wrapper>
        <div className="header-content">
          <div className="header__headline">
            <h1>Where in the world?</h1>
          </div>
          <div className="btn-dark-mode">🌑 Dark Mode</div>
        </div>
      </Wrapper>
    </header>
  );
}
export default Header;
