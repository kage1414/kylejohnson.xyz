import { LoginPage } from '@/components/LoginPage';

import HomePage from '../components/HomePage';

export default function App() {
  return <HomePage Component={LoginPage} disableTabs={true} />;
}
