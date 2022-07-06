import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from 'react-router-dom';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_APP_FIREBASE_API_KEY}`,
    authDomain: `${import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${import.meta.env.VITE_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${import.meta.env.VITE_APP_FIREBASE_APP_ID}`,
    measurementId: `${import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID}`
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Il se connecte à Google, obtient les données de l'utilisateur, puis les ajoute à la base de données
 * si elles n'existent pas déjà.
 */
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Il crée un utilisateur avec l'e-mail et le mot de passe donnés, puis ajoute un document à la
 * collection d'utilisateurs avec l'uid, le login, l'authProvider et l'e-mail de l'utilisateur.
 * @param login - chaîne de caractères
 * @param email - chaîne de caractères
 * @param password - "123456"
 */
export const registerWithEmailAndPassword = async (login, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            login,
            authProvider: "local",
            email,
        });
        alert("Inscription reussie ! ");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * Il envoie un e-mail de réinitialisation du mot de passe à l'utilisateur
 * @param email - L'adresse e-mail de l'utilisateur.
 */
export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Reset mot de passe envoyé ");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};