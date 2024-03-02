'use client';
import { Notes } from '../features';

export default function NotePage({ ...props }: any) {
  return (
    <div>
      <Notes {...props} />
    </div>
  );
}
