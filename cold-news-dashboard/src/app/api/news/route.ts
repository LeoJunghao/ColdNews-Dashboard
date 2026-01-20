import { NextResponse } from 'next/server';
import { getDashboardNews } from '@/lib/news';

export const dynamic = 'force-dynamic';

export async function GET() {
    const data = await getDashboardNews();
    return NextResponse.json(data);
}
