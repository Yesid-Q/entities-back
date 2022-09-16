import fp from "fastify-plugin";

export default fp(async (fastify) => {
    fastify.register(require('fastify-axios'))
})

declare module 'fastify' {
    export interface FastifyInstance {
      axios: { [key: string]: any };
    }
  }