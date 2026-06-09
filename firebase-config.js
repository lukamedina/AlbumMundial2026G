// firebase-config.example.js
// ─────────────────────────────────────────────────────────────────────────
//  INSTRUCCIONES DE USO LOCAL
//  1. Copia este archivo: cp firebase-config.example.js firebase-config.js
//  2. Rellena los valores con los de tu proyecto Firebase
//     (Firebase Console → Configuración del proyecto → Tus apps → SDK)
//  3. firebase-config.js está en .gitignore → NUNCA se sube a git
// ─────────────────────────────────────────────────────────────────────────

window.FIREBASE_CONFIG = {
  apiKey:            "TU_API_KEY",
  authDomain:        "TU_PROJECT_ID.firebaseapp.com",
  projectId:         "TU_PROJECT_ID",
  storageBucket:     "TU_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId:             "TU_APP_ID",
  measurementId:     "TU_MEASUREMENT_ID"   // opcional — borrar si no usás Analytics
};
