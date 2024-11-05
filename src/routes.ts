import fastify, {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyReply,
    FastifyRequest,
} from "fastify";
import { CreateControllerDoenca } from "./controllers/CreateControllerDoenca";

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

    // Rota para criar uma doença
    fastify.post(
        '/doenca',
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateControllerDoenca().handle(request, reply); 
        }
    );
}
