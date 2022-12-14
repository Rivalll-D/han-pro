require('dotenv').config();

const hapi = require('@hapi/hapi');


const init = async () => {

    const server = Hapi.server({
        host: process.env.HOST,
        port: process.env.PORT,
        routes: {
          cors: {
            origin: ['*'],
          },
        },
      });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => ({
            name: 'bobbi',
        }),
    });

    await server.start();
    console.log('Server running at ${server.info.uri}');

};