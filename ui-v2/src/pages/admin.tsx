import { useUser } from "../lib/hooks";

import { AdminContainer } from "../components/Admin/AdminContainer";
import HomePage from "../components/HomePage";

export default function App() {
  const [user] = useUser();
  return <HomePage Component={AdminContainer} disableTabs={!user?.username} />;
}
