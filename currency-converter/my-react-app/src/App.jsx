import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    console.log("Making API Request");
  }, []);

function handleMouseOver () {
  setModalIsOpen(true);
}

function closeModal () {
  setModalIsOpen(false);
}

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onMouseOver={handleMouseOver}>
      <option value="usd">USD</option>
      <option value="jpy">JPY</option>
      <option value="sgd">SGD</option>
      <option value="myr">MYR</option>
      </select>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Alert Modal"
  className="ReactModal__Content"
  overlayClassName="ReactModal__Overlay"
>
  <div className="modal-header">
    {`localhost:${window.location.port} says`}
  </div>
  <p className="modal-content">Just click!!</p>
  <div className="modal-footer">
    <button className="modal-button" onClick={closeModal}>OK</button>
  </div>
</Modal>
    </>
  );
}

export default App;
