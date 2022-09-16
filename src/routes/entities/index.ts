import { FastifyPluginAsync } from "fastify";

import { FILTER_ENTITY } from "../../schemas/entity";
import { IFilter } from "../../interface/entity.interface";

const entities: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<{ Body: IFilter }>(
    "/filter",
    { schema: FILTER_ENTITY },
    async function (request, reply) {
      const { startId, endId } = request.body;
      if (endId < startId) {
        reply
          .code(400)
          .send({ Error: "Error en validación datos de entrada." })
        return;
      }
      const entities = [];
      for (let i = startId; i < endId + 1; i++) {
        const url = `https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/${i}`;
        const { data } = await fastify.axios.get(url)
        if(!Object.keys(data.data).length) {
            reply.code(404).send({ Error: "Error en validación datos de entrada." })
            return
        }
        entities.push(data.data)
      }
      reply.code(200).send(entities);
    }
  );
};

export default entities;
