import { FastifyInstance } from "fastify";
import { z } from "zod";

export function applyCreateGame(app: FastifyInstance) {
  app.post("/create-game", async (request, reply) => {
    const createGameSchema = z.object({
      players: z
        .array(
          z.string({ invalid_type_error: "O nome do usuário é inválido." }),
          { required_error: "Informe os jogadores." }
        )
        .min(2, { message: "Informe pelo menos 2 jogadores." })
        .max(4, { message: "Informe no máximo 4 jogadores." }),
    });

    const cleanValues = createGameSchema.parse(request.body);

    const game = {
      id: "123",
      players: cleanValues.players,
      rounds: [],
    };

    return game;
  });
}
