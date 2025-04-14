function Header() {
    return (
      <header style={{
        width: '100vw',
        height: '7vw',
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem 2rem',
        backgroundColor: '#111',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
      }}>
        <div style={{ flex: '0 0 25%', display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="ReelItIn Logo" 
            style={{ width: '100%', maxWidth: '280px' }} 
          />
        </div>
      </header>
    );
  }
  
  export default Header;
  