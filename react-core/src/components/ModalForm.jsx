import { useState } from "react" 

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {

    const [number, setNumber] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState('');

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

                    <form className="space-y-4" method="dialog" onSubmit={onSubmit}>
                        <div className="form-control">
                            <label className="label" htmlFor="numero">
                                <span className="label-text">Número</span>
                            </label>
                            <input
                                id="numero"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Informe o número"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label" htmlFor="cnpj">
                                <span className="label-text">CNPJ</span>
                            </label>
                            <input
                                id="cnpj"
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="00.000.000/0000-00"
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
                                placeholder="0,00"
                                step="0.01"
                                min="0"
                                required
                            />
                        </div>

                        <div className="modal-action flex items-center justify-end gap-3 pt-2">
                            <button type="reset" className="btn btn-outline">Resetar</button>
                            <button type="submit" className="btn btn-success">{mode === 'edit' ? 'Salvar' : 'Adicionar Nota'}</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}