import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDoencasService } from "../service/CreateServiceDoencas";

interface CreateDoencasProps {
    titulo: string;
    descricao: string;
    author:   string;
}

class CreateControllerDoencas {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {
            titulo, descricao, author } = request.body as CreateDoencasProps;

        const doencaService = new CreateDoencasService();    

        const doenca = await doencaService.execute({ titulo, descricao, author});
        reply.send(doenca)
    }
}

export {CreateControllerDoencas};