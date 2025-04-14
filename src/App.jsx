import Header from './components/Header';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem' }}>
      </main>
    </div>
  );
}

export default App;
