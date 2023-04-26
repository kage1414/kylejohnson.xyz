import { SignupPage } from '@/components/SignupPage';

import HomePage from '../components/HomePage';

export default function App() {
  return <HomePage Component={SignupPage} disableTabs={true} />;
}
