import { Header } from '../features';
import StateProvider from '../store/provider';
import './global.css';

export const metadata = {
  title: 'Graddle - Admin Panel',
  description: 'Share your notes with everyone',
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: never;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
