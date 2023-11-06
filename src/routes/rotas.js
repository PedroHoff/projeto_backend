const { Router } = require('express');
const router = Router();
response.send('Método GET: listar informações');
response.send('Método POST: salvar informações');
router.put('/user/:id', (request, response) => {
});
    response.send('Método PUT: atualizar informações');
    router.delete('/user/:id', (request, response) => {
    });
        response.send('Método DELETE: remover informações');
        module.exports = router;
