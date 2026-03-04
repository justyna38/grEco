import { createContext, useContext, useEffect, useState } from 'react';

const TEST_EMAIL = 'demo@greco.local';
const TEST_PASSWORD = 'Demo123!';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;

    try {
      const stored = window.localStorage.getItem('greco_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (user) {
        window.localStorage.setItem('greco_auth_user', JSON.stringify(user));
      } else {
        window.localStorage.removeItem('greco_auth_user');
      }
    } catch {
      // stockage local non critique pour la démo
    }
  }, [user]);

  const login = (email, password) => {
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      const authenticatedUser = {
        email: TEST_EMAIL,
        name: 'Utilisateur test'
      };

      setUser(authenticatedUser);
      return { success: true };
    }

    return {
      success: false,
      message: 'Identifiants incorrects. Utilisez le compte de démonstration indiqué.'
    };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout,
    testCredentials: {
      email: TEST_EMAIL,
      password: TEST_PASSWORD
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth doit être utilisé à l’intérieur d’un AuthProvider');
  }

  return context;
}

