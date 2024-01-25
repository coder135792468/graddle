import { Test } from '../component/Test';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@frontend/ui-components';
import './global.css';

export default async function Index() {
  return (
    <div className="font-bold">
      <Card>
        <Test />
      </Card>
    </div>
  );
}
