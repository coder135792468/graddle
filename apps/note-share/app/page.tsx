import { SearchBarContainer } from '@frontend/ui-components';
import { Header, Notes } from '../features';

export default async function Home(props: any) {
  return (
    <div>
      <Header />
      <SearchBarContainer />
      <Notes />
    </div>
  );
}
