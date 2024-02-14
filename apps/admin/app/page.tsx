'use client';
import { Notes } from '../features';

export default async function NotePage({ ...props }: any) {
  return (
    <div>
      <Notes {...props} />
    </div>
  );
}
