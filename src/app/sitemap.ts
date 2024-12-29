import { i18n } from '@/i18n/i18n-config';
import { fetchIdQuizzes } from '@/lib/services/quizService';
import { MetadataRoute } from 'next';
import { siteConfig } from '../config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const quizzes = await fetchIdQuizzes();

  const quizRoutes = quizzes.flatMap((quiz) =>
    i18n.locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}/quiz/${quiz.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  const routes = i18n.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1,
  }));

  return [...routes, ...quizRoutes];
}
