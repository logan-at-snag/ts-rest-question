import { createNextRoute, createNextRouter } from '@ts-rest/next';
import { testContract } from '../../test.contract';

const testRouter = createNextRoute(testContract, {
    getHelloWorld: async (args) => {
      console.log('args', args.query.name);
      const name = args.query.name;
        return {
            status: 200,
            body: { message: `Get Hello ${name}` },
          };
    },
    postHelloWorld: async (args) => {
      console.log('args', args.body.name);
      const name = args.body.name;
        return {
            status: 200,
            body: { message: `Post Hello ${name}` },
          };
    },
  });
  
  export default createNextRouter(testContract, testRouter);