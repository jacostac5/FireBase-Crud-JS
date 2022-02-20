// TODO: Agrega SDK para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
  // Pon tus credenciales aquí
  apiKey: "AIzaSyDkdZo_Q4vlBusBXkaI7nfBxUNypkPpXQ0",
  authDomain: "fir-crud-js-48fce.firebaseapp.com",
  projectId: "fir-crud-js-48fce",
  storageBucket: "fir-crud-js-48fce.appspot.com",
  messagingSenderId: "942113054516",
  appId: "1:942113054516:web:c294b749b4035246e84f61"
};

// Inicializar base de fuego
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

/**
 * guarda una nueva tarea en firebase
 * @param {string} title el título de la tarea
 * @param {string} description la descripcion de la tarea
 */
export const saveTask = (title, description) => addDoc(collection(db, "tasks"), { title, description });
export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);
export const getTasks = () => getDocs(collection(db, "tasks"));
