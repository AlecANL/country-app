import React from 'react';
import RouteApp from './routes/RouteApp';
import Wrapper from './components/wrapper/Wrapper';
import Header from './components/header/header';
import './App.css';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);

  function handleDarkMode(mqLis) {
    setDarkMode(mqLis.matches);
    setChecked(mqLis.matches);
  }

  React.useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)');
    mqList.addEventListener('change', handleDarkMode);
    setChecked(mqList.matches);
    setDarkMode(mqList.matches);
  }, []);

  const classNameDarkMode = isDarkMode
    ? 'country-app is-dark'
    : 'country-app ligth';

  return (
    <div className={classNameDarkMode}>
      <Header isDarkMode={isDarkMode} isChecked={isChecked} />
      <Wrapper>
        <RouteApp />
      </Wrapper>
    </div>
  );
}

export default App;
