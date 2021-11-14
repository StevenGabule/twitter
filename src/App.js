import AuthApp from './AuthApp';
import { useAuthUser } from './context/auth-context';
import UnAuthApp from './UnAuthApp';

function App() {
  const authUser = useAuthUser();

  if (authUser) {
    return <AuthApp />;
  } else {
    return <UnAuthApp />;
  }
}

export default App;
