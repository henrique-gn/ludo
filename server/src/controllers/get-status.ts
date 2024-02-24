import { FastifyInstance } from "fastify";

export function applyGetStatus(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    return { status: "ok" };
  });
}
