import fp from "fastify-plugin";

export default fp(async (fastify) => {
    fastify.register(require('@fastify/swagger'),  {
        routePrefix: '/documentation',
        swagger: {
          info: {
            title: 'Test SOYYO',
            description: 'Test ingreso soyyo',
            version: '1.0.0'
          },
          host: 'localhost:3000',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json']
        },
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        exposeRoute: true
    })
})
