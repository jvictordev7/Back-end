import { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma"; 

export class DeleteControllerDoenca {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: number };

        try {
            // Exclui a doença pelo ID no banco de dados
            const doenca = await prismaClient.doencas.delete({
                where: { id },
            });

            // Resposta de sucesso
            return reply.send({ message: "Doença excluída com sucesso!", doenca });
        } catch (error) {
            // Se houver erro (por exemplo, se o ID não existir)
            reply.status(500).send({ message: "Erro ao excluir a doença", error });
        }
    }
}
