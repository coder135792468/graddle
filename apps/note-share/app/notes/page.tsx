'use client';
import { SearchBarContainer } from '@frontend/ui-components';
import { Header, Notes } from '../../features';

export default async function NotePage() {
  return (
    <div>
      <Header />
      <Notes />
    </div>
  );
}
