import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'movies/:movieId',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() 
    {
      const movieIds = ['1', '2', '3'];
      return movieIds.map((id) => ({ movieId: id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];