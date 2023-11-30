/**
 * Cardコンポーネントの引数として受け取る thumbnail の型
 * 扱いが若干煩雑なので別ファイルに切り出している
 */
import { z } from 'astro:content';

/**
 * mdxImage は mdx の frontmatter に含まれる画像の型
 */
export type MdxImage = {
  height: number;
  src: string;
  width: number;
  format: 'avif' | 'png' | 'webp' | 'jpeg' | 'jpg' | 'svg' | 'tiff' | 'gif';
};

/**
 * mdxImage の型ガード
 */
export const isMdxImage = (val: unknown): val is MdxImage => {
  const schema = z.object({
    height: z.number(),
    src: z.string(),
    width: z.number(),
    format: z.enum([
      'avif',
      'png',
      'webp',
      'jpeg',
      'jpg',
      'svg',
      'tiff',
      'gif',
    ]),
  });
  return schema.safeParse(val).success;
};
