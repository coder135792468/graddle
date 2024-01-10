'use client';
import { Button, SearchBarContainer } from '@frontend/ui-components';
import { Header } from '../../features';
// import { Button } from 'apps/note-share/src/components/ui/button';

export default async function Notes() {
  return (
    <div>
      <Header />
      <SearchBarContainer />
      <Button>Hello</Button>
    </div>
  );
}
