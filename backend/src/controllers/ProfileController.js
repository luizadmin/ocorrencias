const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const entidade_id = request.headers.authorization; 

        const ocorrencias = await connection('ocorrencias')
        .where('entidade_id', entidade_id)
        .select('*');
        
        return response.json(ocorrencias);
    }
}