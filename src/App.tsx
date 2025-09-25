import { ELECTION_CONFIG } from './data/elections/florida-hernando-school-board.js';
import ElectionMatcher from './components/ElectionMatcher.jsx';

function App() {
  return <ElectionMatcher config={ELECTION_CONFIG} />;
}

export default App;