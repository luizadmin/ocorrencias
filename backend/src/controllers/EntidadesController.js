const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response)  {
        const entidades = await connection('entidades').select('*');
        return response.json(entidades);
    },

    async create(request, response) {
        const { nome, email, whatsapp, cidade, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('entidades').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        })
        return response.json({id});
    }
};