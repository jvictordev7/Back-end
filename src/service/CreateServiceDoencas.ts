import prismaClient from "../prisma"; // Certifique-se de que o caminho está correto

interface CreateDoencasProps {
    titulo: string;
    descricao: string;
    author: string; // Adicionei o author aqui
}

class CreateDoencasService {
    async execute({ titulo, descricao, author }: CreateDoencasProps) { // Adicione o author aqui
        // Verifica se os campos estão preenchidos
        if (!titulo || !descricao || !author) { // Inclua author na verificação
            throw new Error("Preencha todos os campos");
        }

        // Cria a nova doença
        const doenca = await prismaClient.doencas.create({
            data: {
                titulo,
                descricao,
                author // Agora isso estará definido
            },
        });

        return doenca;
    }
}

export { CreateDoencasService };
