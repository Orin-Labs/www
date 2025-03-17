import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = "https://office.learnwithorin.com";
  }, []);

  return null;
}

export default App;
