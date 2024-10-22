import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import PdfUpload from './components/PdfUpload';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log('Intento de inicio de sesión', { email, password });
    // Aquí iría la lógica de autenticación real
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {isLoggedIn && <Header />}
      <main className="flex-grow flex items-center justify-center">
        {isLoggedIn ? (
          <PdfUpload />
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;