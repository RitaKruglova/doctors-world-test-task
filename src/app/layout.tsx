import pageStyles from './page.module.css';
import './globals.css';
import Head from 'next/head';

export type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Doctor's world",
  description: 'Test task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <Head>
      <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Тестовое задание для 'МирВрача'" />
        <meta name="keywords" content="ХОБЛ, ингаляционный, заболевания, болезнь" />
        <meta name="author" content="Маргарита Круглова" />
        <title>{metadata.title}</title>
      </Head>
      <body>
        <div className={pageStyles.page}>
          {children}
        </div>
      </body>
    </html>
  )
}
