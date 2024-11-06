// src/controllers/GetControllerDoenca.ts
import { FastifyRequest, FastifyReply } from "fastify";
import prismaClient from "../prisma"; 

class GetControllerDoenca {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {
            // Buscando todas as doenças na tabela
            const doencas = await prismaClient.doencas.findMany();
            
            // Retorna os dados encontrados
            reply.send(doencas);
        } catch (error) {
            // Em caso de erro, retorna uma mensagem de erro
            reply.status(500).send({ message: "Erro ao buscar doenças", error });
        }
    }
}

export { GetControllerDoenca };
