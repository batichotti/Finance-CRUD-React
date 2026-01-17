import { useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [itemData, setItemData] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleOpen = (mode, item = null) => {
    setModalMode(mode);
    setItemData(item);
    setIsOpen(true);
  }

  const triggerRefresh = () => setRefreshKey((prev) => prev + 1);

  const handleSubmit = async(newItem) => {
    if (modalMode === 'add') {
      try {
        const formattedData = {
          nota_numero: newItem.numero,
          nota_cnpj: newItem.cnpj,
          nota_descricao: newItem.descricao,
          nota_data: newItem.data,
          nota_valor: newItem.valor
        };
        const response = await axios.post('http://localhost:3001/api/notas', formattedData);
        console.log('Item criado com sucesso:', response.data);
        triggerRefresh();
      } catch (err) {
        console.error('Erro ao adicionar item', err);
      }

    } else if (modalMode === 'edit') {
      try {
        const formattedData = {
          nota_numero: newItem.numero,
          nota_cnpj: newItem.cnpj,
          nota_descricao: newItem.descricao,
          nota_data: newItem.data,
          nota_valor: newItem.valor
        };
        const response = await axios.put(`http://localhost:3001/api/notas/${itemData.nota_id}`, formattedData);
        console.log('Item atualizado com sucesso:', response.data);
        triggerRefresh();
      } catch (err) {
        console.error('Erro ao atualizar item', err);
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/notas/${id}`);
      triggerRefresh();
    } catch (err) {
      console.error('Erro ao deletar item', err);
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} onRefresh={triggerRefresh} />
      <TableList searchTerm={searchTerm} onEdit={(item) => handleOpen('edit', item)} onDelete={handleDelete} refreshKey={refreshKey} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} itemData={itemData} />
      <Footer />
    </>
  )
}

export default App
