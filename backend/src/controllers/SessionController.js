const connection = require('../database/connection');

module.exports = {
    async create(request, response)  {
        const { id } = request.body;

        const entidade = await connection('entidades')
        .where('id', id)
        .select('nome')
        .first();

        if (!entidade) {
            return response.status(400).json({ error: 'Entidade não encontrada com esse ID.'});
        }
        return response.json(entidade);
    }
}