'use client';
import { SearchBarContainer } from '@frontend/ui-components';
import { Header } from '../../features';

export default async function Notes() {
  return (
    <div>
      <Header />
      <SearchBarContainer />
    </div>
  );
}
