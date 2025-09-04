import { NextRequest, NextResponse } from 'next/server';

const spec = {
  openapi: '3.0.0',
  info: {
    title: 'Good Hands API',
    version: '0.1.0',
    description: 'API specification for booking services via Good Hands.'
  },
  paths: {
    '/api/bookings': {
      post: {
        summary: 'Create a booking request',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  phone: { type: 'string' },
                  service: { type: 'string' },
                  date: { type: 'string', format: 'date', nullable: true },
                  time: { type: 'string', nullable: true },
                  notes: { type: 'string', nullable: true }
                },
                required: ['name', 'phone', 'service']
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Successful booking request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    ok: { type: 'boolean' }
                  }
                }
              }
            }
          },
          '500': {
            description: 'Internal server error'
          }
        }
      }
    }
  }
};

export async function GET() {
  return new NextResponse(JSON.stringify(spec), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}