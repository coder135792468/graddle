import { Header } from 'apps/note-share/features';

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
    <>
      <Header />
      {children}
    </>
  );
}
