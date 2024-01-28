'use client';
import { Notes } from '../features';

export default async function NotePage({ ...props }) {
  return (
    <div>
      <Notes {...props} />
    </div>
  );
}
