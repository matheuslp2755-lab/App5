
import type { User, Language } from '../types';

const USERS_KEY = 'social_network_users';
const CURRENT_USER_KEY = 'social_network_current_user';

// --- Helper Functions ---

const getUsers = (): User[] => {
  try {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error("Failed to parse users from localStorage", error);
    return [];
  }
};

const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// In a real application, use a secure hashing algorithm like bcrypt.
// This is a simple simulation for demonstration purposes.
const simpleHash = (password: string): string => {
  return `hashed_${password}_mock`;
};

// --- Public API ---

export const authService = {
  register: (name: string, email: string, password: string, language: Language): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // Simulate network delay
        const users = getUsers();
        const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

        if (existingUser) {
          return reject(new Error('An account with this email already exists.'));
        }

        const newUser: User = {
          id: Date.now().toString(),
          name,
          email,
          passwordHash: simpleHash(password),
          language,
        };

        users.push(newUser);
        saveUsers(users);
        
        // Automatically log in the user after registration
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

        resolve(newUser);
      }, 500);
    });
  },

  login: (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // Simulate network delay
        const users = getUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (user && user.passwordHash === simpleHash(password)) {
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid email or password.'));
        }
      }, 500);
    });
  },

  logout: (): void => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): User | null => {
    try {
      const userJson = localStorage.getItem(CURRENT_USER_KEY);
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.error("Failed to parse current user from localStorage", error);
      return null;
    }
  },
};
