import React from 'react';
import RouteApp from './routes/RouteApp';
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/header';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  function handleDarkMode(mqLis) {
    setDarkMode(mqLis.matches);
  }

  React.useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)');
    mqList.addEventListener('change', handleDarkMode);
    setDarkMode(mqList.matches);
  }, []);

  const classNameDarkMode = isDarkMode
    ? 'countries-app dark-mode'
    : 'countries-app ligth-mode';

  return (
    <div className={classNameDarkMode}>
      <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Wrapper>
        <RouteApp />
      </Wrapper>
    </div>
  );
}

export default App;
