import { NextResponse } from 'next/server';

type Data = {
  message: string;
};

export async function GET() {
  return NextResponse.json<Data>({ message: 'Hello, Next.js!' });
}
