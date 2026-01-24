import sql from "../db.js";


export const getEmpresa = async() => {
    const rows = await sql`SELECT * FROM "Empresas"`;
    return rows;
};

export const createEmpresa = async( empresaData ) => {
    const { empresa_cnpj, empresa_nome } = empresaData;
    
    const result = await sql`
        INSERT INTO "Empresas" (empresa_cnpj, empresa_nome)
        VALUES (${empresa_cnpj}, ${empresa_nome})
        RETURNING *
    `;
    return result;
};

export const updateEmpresa = async( empresaCnpj, empresaData ) => {
    const { empresa_cnpj, empresa_nome} = empresaData;
    
    const result = await sql`
        UPDATE "Empresas"
        SET empresa_nome = ${empresa_nome}
        WHERE empresa_cnpj = ${empresaCnpj}
        RETURNING *
    `;
    return result;
};

export const deleteEmpresa = async( empresaCnpj ) => {
    const result = await sql`DELETE FROM "Empresas" WHERE empresa_cnpj = ${empresaCnpj}`;
    return result > 0;
};

export const searchEmpresa = async( searchTerm ) => {
    const result = await sql`
    SELECT * 
    FROM "Empresas" 
    WHERE empresa_nome ILIKE ${'%'+searchTerm+'%'}`;
    return result;
};
