import fastify, {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest,
} from "fastify";
import { CreateControllerDoenca } from "./controllers/CreateControllerDoenca";
import { GetControllerDoenca } from "./controllers/GetControllerDoenca";
import { DeleteControllerDoenca } from "./controllers/DeleteControllerDoenca"; // Importe o controlador de DELETE

export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    // Rota de teste
    fastify.get(
        "/teste",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return { ok: true };
        }
    );

    // Rota para criar uma doença (POST)
    fastify.post(
        '/doenca',
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateControllerDoenca().handle(request, reply); 
        }
    );

    // Rota para buscar todas as doenças (GET)
    fastify.get(
        '/doenca',
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new GetControllerDoenca().handle(request, reply); 
        }
    );

    // Rota para excluir uma doença (DELETE)
    fastify.delete(
        '/doenca/:id',
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteControllerDoenca().handle(request, reply); // Chama o controlador para deletar a doença
        }
    );
}
