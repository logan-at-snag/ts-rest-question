import { initContract } from '@ts-rest/core'
import { z } from 'zod'
const c = initContract()

export const testContract = c.router({
  getHelloWorld: {
    method: 'GET',
    path: '/posts',
    query: z.object({
      name: z.string(),
    }),
    responses: {
      200: c.type<{ message: any }>(), 
    },
    summary: 'Get Hello World',
    description:
      'Some nice description',
  },
  postHelloWorld: {
    method: 'POST',
    path: '/posts',
    body: z.object({
      name: z.string(),
    }),
    responses: {
      200: c.type<{ message: string }>(),
    },
  },
})