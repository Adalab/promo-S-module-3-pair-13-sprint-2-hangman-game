import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Letters.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';

import Header from './Header';
import SectionDummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Footer from './Footer';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section>
          <SolutionLetters
            word={word}
            userLetters={userLetters}
          ></SolutionLetters>
          <ErrorLetters word={word} userLetters={userLetters}></ErrorLetters>
          <form className="form" onSubmit={handleSubmit}>
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoFocus
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </form>
        </section>

        <SectionDummy number={getNumberOfErrors()}></SectionDummy>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
