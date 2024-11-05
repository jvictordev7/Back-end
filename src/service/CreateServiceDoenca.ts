import prismaClient from "../prisma"; 

interface CreateDoencaProps {
    titulo: string;
    descricao: string;
    author: string; 
}

class CreateDoencaService {
    async execute({ titulo, descricao, author }: CreateDoencaProps) { 
        
        if (!titulo || !descricao || !author) { 
            throw new Error("Preencha todos os campos");
        }

        
        const doenca = await prismaClient.doencas.create({
            data: {
                titulo,
                descricao,
                author 
            },
        });

        return doenca;
    }
}

export { CreateDoencaService };
