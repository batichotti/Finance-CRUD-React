import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableList({ searchTerm, onEdit, onDelete, refreshKey }) {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/notas');
                setTableData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [refreshKey]);

    const loweredSearch = searchTerm.toLowerCase();
    const filteredData = tableData.filter((item) =>
        item.nota_descricao.toLowerCase().includes(loweredSearch) ||
        item.nota_numero.toLowerCase().includes(loweredSearch)
    );

    return (
        <>
        
        {error && <div className="alert alert-error">{error}</div>}

        <div className="overflow-x-auto mt-10">
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th>Data</th>
                <th>N° Nota Fiscal</th>
                <th>CNPJ</th>
                <th>Valor</th>
                <th>Descrição</th>
            </tr>
            </thead>
            <tbody className="hover">
            {filteredData.map((item) => (
                <tr key={item.nota_id}>
                <th>{item.nota_id}</th>
                <td>{new Date(new Date(item.nota_data).getTime() + new Date(item.nota_data).getTimezoneOffset() * 60000).toLocaleDateString('pt-BR')}</td>
                <td>{item.nota_numero}</td>
                <td>{item.nota_cnpj}</td>
                <td>{item.nota_valor}</td>
                <td>{item.nota_descricao}</td>
                <td><button onClick={() => onEdit(item)} className="btn btn-secondary w-20">Atualizar</button></td>
                <td><button onClick={() => onDelete(item.nota_id)} className="btn btn-accent w-20">Deletar</button></td>
                </tr>
            ))}

            </tbody>
        </table>
        </div>
        </>
    )
}