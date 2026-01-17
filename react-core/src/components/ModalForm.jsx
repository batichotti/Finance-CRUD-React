import { useEffect, useState } from "react" 

export default function ModalForm({ isOpen, onClose, mode, onSubmit, itemData }) {

    const [numero, setNumero] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');

    useEffect(() => {
        if (mode === 'edit' && itemData) {
            setNumero(itemData.nota_numero || '');
            setCnpj(itemData.nota_cnpj || '');
            setDescricao(itemData.nota_descricao || '');
            const parsedDate = itemData.nota_data ? new Date(itemData.nota_data) : null;
            setData(parsedDate ? parsedDate.toISOString().split('T')[0] : '');
            setValor(itemData.nota_valor ?? '');
        } else if (mode === 'add') {
            handleReset();
        }
    }, [mode, itemData]);

    const handleReset = () => {
        setNumero('');
        setCnpj('');
        setDescricao('');
        setData('');
        setValor('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const numericCnpj = cnpj.replace(/\D/g, "");
            const itemData = {numero, cnpj: numericCnpj, descricao, data: new Date(data), valor: parseFloat(valor)};
            await onSubmit(itemData);
        } catch (e) {
            console.error("Error adding item", e.message)
        }
        onClose();
    }

    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box relative w-11/12 max-w-2xl">
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        x
                    </button>

                    <h3 className="font-bold text-lg py-4">
                        {mode === 'edit' ? 'Modo de Edição' : 'Detalhes da Nota Fiscal'}
                    </h3>

                    <form className="space-y-4" method="dialog" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label" htmlFor="numero">
                                <span className="label-text">Número</span>
                            </label>
                            <input
                                id="numero"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Informe o número"
                                value={numero}
                                inputMode="numeric"
                                maxLength={44}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    if (/^\d*$/.test(value)) {
                                        setNumero(value);
                                    }
                                }}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="cnpj">
                                <span className="label-text">CNPJ</span>
                            </label>
                            <input
                                id="cnpj"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="00.000.000/0000-00"
                                value={cnpj}
                                inputMode="numeric"
                                maxLength={18}
                                onChange={(e) => {
                                    let value = e.target.value;

                                    if (!/^\d*$/.test(value.replace(/\D/g, ""))) return;

                                    value = value.replace(/\D/g, "");
                                    value = value
                                        .replace(/^(\d{2})(\d)/, "$1.$2")
                                        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
                                        .replace(/\.(\d{3})(\d)/, ".$1/$2")
                                        .replace(/(\d{4})(\d)/, "$1-$2");

                                    setCnpj(value);
                                }}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="descricao">
                                <span className="label-text">Descrição</span>
                            </label>
                            <input
                                id="descricao"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Descreva a nota"
                                maxLength={200}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="data">
                                <span className="label-text">Data</span>
                            </label>
                            <input
                                id="data"
                                type="date"
                                className="input input-bordered w-full"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="valor">
                                <span className="label-text">Valor</span>
                            </label>
                            <input
                                id="valor"
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="R$ 0,00"
                                step="0.01"
                                min="0.01"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="modal-action flex items-center justify-end gap-3 pt-2">
                            <button type="button" onClick={handleReset} className="btn btn-outline">Resetar</button>
                            <button type="submit" className="btn btn-success">{mode === 'edit' ? 'Salvar' : 'Adicionar Nota'}</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}