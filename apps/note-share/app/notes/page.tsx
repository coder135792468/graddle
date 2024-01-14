'use client';
import { Button, SearchBarContainer } from '@frontend/ui-components';
import { Header } from '../../features';

export default async function Notes() {
  return (
    <div>
      <Header />
      <SearchBarContainer show={true} formClass="w-[400px]" />
      <Button>Hello</Button>
    </div>
  );
}
