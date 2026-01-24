export default function NavBar({ onOpen, onSearch, onRefresh }){
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return(
        <>
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">

            <a className="btn btn-ghost text-xl">Controle Financeiro</a>
        </div>
        <div className="navbar-center">
            <div className="form-control">
                <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-48 md:w-auto" />
            </div>
        </div>
        <div className="navbar-end">
            <a className="btn btn-outline mr-2" onClick={onRefresh}>♻️</a>
            <a className="btn btn-primary" onClick={onOpen}>Nova Nota</a>
        </div>
        </div>
        </>
    )
}