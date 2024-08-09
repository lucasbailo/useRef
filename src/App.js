import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {

  const labelRef = useRef('')
  const inputRef = useRef('')

  useEffect(() => {
    labelRef.current.innerHTML = "USER NAME"
    labelRef.current.style.fontStyle = 'italic'
  }, [])

  const sendForm = (event) => {
    event.preventDefault()
    // send data...
    inputRef.current.focus()
  }

  return (
    <div className="App">
      <form onSubmit={sendForm}>
        <div>
          <label ref={labelRef}>Name</label>
        </div>
        <div>
          <input placeholder='Type your name...' ref={inputRef} />
        </div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input placeholder='Type your email...' type='email' />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
