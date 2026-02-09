import { z } from 'zod';
import { businesses, offices, teamMembers, advantages } from './schema';

export const api = {
  content: {
    businesses: {
      method: 'GET' as const,
      path: '/api/businesses',
      responses: {
        200: z.array(z.custom<typeof businesses.$inferSelect>()),
      },
    },
    offices: {
      method: 'GET' as const,
      path: '/api/offices',
      responses: {
        200: z.array(z.custom<typeof offices.$inferSelect>()),
      },
    },
    team: {
      method: 'GET' as const,
      path: '/api/team',
      responses: {
        200: z.array(z.custom<typeof teamMembers.$inferSelect>()),
      },
    },
    advantages: {
      method: 'GET' as const,
      path: '/api/advantages',
      responses: {
        200: z.array(z.custom<typeof advantages.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
