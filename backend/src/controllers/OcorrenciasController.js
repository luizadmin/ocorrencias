const connection = require('../database/connection');

module.exports = {
    async index(request, response)  {
        const { page = 1 } = request.query;

        const [count] = await connection('ocorrencias').count();

        console.log(count);

        const ocorrencias = await connection('ocorrencias')
        .join('entidades', 'entidades.id', '=', 'ocorrencias.entidade_id')
            .limit(5)
            .offset((page -1)*5)
            .select([
                'ocorrencias.*',
                'entidades.nome',
                'entidades.email',
                'entidades.whatsapp',
                'entidades.cidade',
                'entidades.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(ocorrencias);
    },

    async create(request, response) {
        const { titulo, descricao, valor } = request.body;
    
        const entidade_id = request.headers.authorization;

        const [id] = await connection('ocorrencias').insert({
            titulo,
            descricao,
            valor,
            entidade_id,
            
        });
        return response.json({id});
    },
    async delete(request, response) {
        const { id } = request.params;
        const entidade_id = request.headers.authorization; 

        const ocorrencia = await connection('ocorrencias')
        .where('id', id)
        .select('entidade_id')
        .first();

        if (ocorrencia.entidade_id != entidade_id ){
            return response.status(401).json({ error: 'Operação não permitida.'});
        }

        await connection('ocorrencias').where('id', id).delete();
        return response.status(204).send();
    }
};