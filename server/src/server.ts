import fastify from "fastify";
import { applyCreateGame } from "./controllers/create-game";
import { applyGetStatus } from "./controllers/get-status";

const app = fastify();

applyCreateGame(app);
applyGetStatus(app);

const port = 3000;
const host = "localhost";

app.listen({ port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`[server] listening at http://${host}:${port}`);
});
