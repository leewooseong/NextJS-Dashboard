import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*antialiased는 tailwind 클래스 이름*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
