import { Inter, Lusitana } from 'next/font/google';

// nextjs에서 제공하는 폰트를 이용해서 Font 객체를 받환받는다.
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
