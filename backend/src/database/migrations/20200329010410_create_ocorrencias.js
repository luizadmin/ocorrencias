
exports.up = function(knex) {
    return knex.schema.createTable('ocorrencias', function(table){
        table.increments();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('valor').notNullable();

        table.string('entidade_id').notNullable();
        
        table.foreign('entidade_id').references('id').inTable('entidades');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ocorrencias');  
};
