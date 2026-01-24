import sql from "../db.js";

const validateCNPJ = async( nota_cnpj ) => {
    const empresa = await sql`
        SELECT empresa_cnpj FROM "Empresas" WHERE empresa_cnpj = ${nota_cnpj}
    `;
    return empresa.length > 0;
};

export const getItems = async() => {
    const rows = await sql`SELECT * FROM "Notas"`;
    return rows;
};

export const createItem = async( itemData ) => {
    const { nota_numero, nota_cnpj, nota_valor, nota_descricao, nota_data } = itemData;
    
    const cnpjExists = await validateCNPJ( nota_cnpj );
    if ( !cnpjExists ) {
        throw new Error( `CNPJ ${nota_cnpj} não encontrado na tabela de Empresas` );
    }
    
    const result = await sql`
        INSERT INTO "Notas" (nota_numero, nota_cnpj, nota_valor, nota_descricao, nota_data)
        VALUES (${nota_numero}, ${nota_cnpj}, ${nota_valor}, ${nota_descricao}, ${nota_data})
        RETURNING *
    `;
    return result;
};

export const updateItem = async( itemId, itemData ) => {
    const { nota_numero, nota_cnpj, nota_valor, nota_descricao, nota_data } = itemData;
    
    const cnpjExists = await validateCNPJ( nota_cnpj );
    if ( !cnpjExists ) {
        throw new Error( `CNPJ ${nota_cnpj} não encontrado na tabela de Empresas` );
    }
    
    const result = await sql`
        UPDATE "Notas"
        SET nota_numero = ${nota_numero}, nota_cnpj = ${nota_cnpj}, nota_valor = ${nota_valor}, nota_descricao = ${nota_descricao}, nota_data = ${nota_data}
        WHERE nota_id = ${itemId}
        RETURNING *
    `;
    return result;
};

export const deleteItem = async( itemId ) => {
    const result = await sql`DELETE FROM "Notas" WHERE nota_id = ${itemId}`;
    return result > 0;
};

export const searchItem = async( searchTerm ) => {
    const result = await sql`
    SELECT * 
    FROM "Notas" 
    WHERE nota_descricao ILIKE ${'%'+searchTerm+'%'}`;
    return result;
};
