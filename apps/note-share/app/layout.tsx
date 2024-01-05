import StateProvider from '../store/provider';
import './global.css';

export const metadata = {
  title: 'Note share',
  description: 'Share your notes with everyone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
