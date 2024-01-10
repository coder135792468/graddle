'use client';
import { Header } from '../features';
import { Landing } from '../features/landing-page/landing';

export default async function Notes() {
  return (
    <div>
      <Header />
      <Landing />
    </div>
  );
}
