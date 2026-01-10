export default function TableList({ handleOpen }) {

    const items = [ {
        id: 1,
        numero_nota_fiscal: "012",
        cnpj: 1,
        descricao: "Descreve o produto 1",
        data: new Date(),
        valor: 10,
    },
    {
        id: 2,
        numero_nota_fiscal: 2,
        cnpj: 2,
        descricao: "Descreve o produto 2",
        data: new Date(),
        valor: 20,
    },
    {
        id: 3,
        numero_nota_fiscal: 3,
        cnpj: 3,
        descricao: "Descreve o produto 3",
        data: new Date(),
        valor: 30,
    } ]

    return (
        <>
        <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Data</th>
                <th>CNPJ</th>
                <th>Nota Fiscal</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody className="hover">
            {/* row 1 */}
            {items.map((item) => (
                <tr key={item.id}>
                <th>{item.id}</th>
                <td>{item.data.getDay()}/{item.data.getMonth()+1}/{item.data.getFullYear()}</td>
                <td>{item.numero_nota_fiscal}</td>
                <td>{item.cnpj}</td>
                <td>{item.valor}</td>
                <td><button onClick={() => handleOpen('edit') } className="btn btn-secondary w-20">Atualizar</button></td>
                <td><button className="btn btn-accent w-20">Deletar</button></td>
                </tr>
            ))}

            </tbody>
        </table>
        </div>
        </>
    )
}