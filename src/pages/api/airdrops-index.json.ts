import type { APIRoute } from 'astro';
import { airdrops } from '../../data/airdrops';

export const GET: APIRoute = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const activeAirdrops = airdrops
    .filter(a => (!a.publishDate || a.publishDate <= currentDate) && a.status === 'active')
    .map(a => ({
      id: a.id,
      name: a.name,
      logo: a.logo,
      reward: a.reward || (a as any).potentialReward || 'Confirmed Allocation',
      category: a.category || '',
      status: a.status,
      featured: Boolean(a.featured),
      publishDate: a.publishDate || '',
      desc: (a.description || a.overview || '').slice(0, 180)
    }));

  return new Response(JSON.stringify(activeAirdrops), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
