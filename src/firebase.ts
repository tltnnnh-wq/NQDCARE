import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  addDoc, 
  serverTimestamp, 
  getDocFromServer 
} from 'firebase/firestore';

import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Connection test
async function testConnection() {
  try {
    // Try to read a document to check connectivity
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase connected successfully.");
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. The client is offline.");
    } else {
      console.error("Firebase connection error:", error);
    }
  }
}

testConnection();

// Export Firestore functions if needed elsewhere
export {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp
};
