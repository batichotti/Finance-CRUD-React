import * as empresaService from "../services/empresaService.js";


export const getEmpresa = async(req, res) => {
    try {
        const empresas = await empresaService.getEmpresa();
        res.status(200).json(empresas);
    } catch (err){
        console.error('Error fetching items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const createEmpresa = async(req, res) => {
    try {
        const empresaData = req.body;
        const newEmpresa = await empresaService.createEmpresa(empresaData);

        res.status(200).json(newEmpresa);
    } catch (err){
        console.error('Error creating items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const updateEmpresa = async(req, res) => {
    try {
        const empresaCnpj = req.params.cnpj;
        const empresaData = req.body;
        const updatedEmpresa = await empresaService.updateEmpresa(empresaCnpj, empresaData);
        
        (updatedEmpresa)?(res.status(200).json(updatedEmpresa)):(res.status(404).json({ message: "Item not founded" }));
    } catch (err){
        console.error('Error updating items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const deleteEmpresa = async(req, res) => {
    try {
        const empresaCnpj = req.params.cnpj;
        const deletedEmpresa = await empresaService.deleteEmpresa(empresaCnpj);
        
        (deletedEmpresa)?(res.status(200).send()):(res.status(404).json({ message: "Item not founded" }));
    } catch (err){
        console.error('Error deleting items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
export const searchEmpresa = async(req, res) => {
    try {
        const searchTerm = req.query.q;
        const empresas = await empresaService.searchEmpresa(searchTerm);
        
        res.status(200).json(empresas);
    } catch (err){
        console.error('Error searching items:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}