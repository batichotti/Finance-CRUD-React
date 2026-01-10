import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setModalMode(mode)
    setIsOpen(true)
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('Mode - Add');
    } else {
      console.log('Mode - Edit');
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')} />
      <TableList handleOpen={handleOpen} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} />
    </>
  )
}

export default App
