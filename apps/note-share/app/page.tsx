import { SearchBarContainer } from '@frontend/ui-components';
import { Notes } from '../features';

export default async function Home() {
  return (
    <div>
      <SearchBarContainer />
      <Notes />
    </div>
  );
}
