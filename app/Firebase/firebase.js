import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Auth Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };
