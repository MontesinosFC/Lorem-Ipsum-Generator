import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [paragraphs, setParagraphs] = useState(data);
  const [items, setItems] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  console.log(paragraphs.slice(0, 3))
  return (
  <>
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form>
        <label htmlFor='paragraph'>paragraphs: </label>
        <input
          type='number'
          id='paragraph'
          name='paragraph'
          //value={value}

        ></input>
        <button className="btn" type='submit' onClick={handleSubmit}>generate</button>
      </form>
      <article className="lorem-text">
        <p>somethin</p>
      </article>
    </section>
  </>
    )
}

export default App;
