import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Doctor's world",
  description: 'Test task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Тестовое задание для 'МирВрача'" />
        <meta name="keywords" content="ХОБЛ, ингаляционный, заболевания, болезнь" />
        <meta name="author" content="Маргарита Круглова" />
      </head>
      <body>{children}</body>
    </html>
  )
}
