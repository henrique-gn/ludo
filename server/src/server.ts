import fastify from "fastify";
import { applyCreateGame } from "./controllers/create-game";
import { applyGetStatus } from "./controllers/get-status";
import { ZodError } from "zod";

const app = fastify();

applyCreateGame(app);
applyGetStatus(app);

app.setErrorHandler((error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: error.issues[0].message,
    });
  }

  return reply.status(500).send({
    message: "Erro interno",
    details: error.message,
  });
});

const port = 3000;
const host = "localhost";

app.listen({ port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`[server] listening at http://${host}:${port}`);
});
