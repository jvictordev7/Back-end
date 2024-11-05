import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDoencaService } from "../service/CreateServiceDoenca";

interface CreateDoencaProps {
    titulo: string;
    descricao: string;
    author:   string;
}

class CreateControllerDoenca {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {
            titulo, descricao, author } = request.body as CreateDoencaProps;

        const doencaService = new CreateDoencaService();    

        const doenca = await doencaService.execute({ titulo, descricao, author});
        reply.send(doenca)
    }
}

export {CreateControllerDoenca};