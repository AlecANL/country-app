import Wrapper from '../wrapper/Wrapper';
import './header.css';

function Header({ setDarkMode, isDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <header className="header">
      <Wrapper>
        <div className="header-content">
          <div className="header__headline">
            <h1>Where in the world?</h1>
          </div>
          <div onClick={handleDarkMode} className="btn-dark-mode">
            {isDarkMode ? '☀️ Ligth Mode' : '🌔 Dark Mode'}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
export default Header;
