// 1. Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCnMqHAkR9WTVpPOrVLfTTvi068w0x9QaI",
  authDomain: "digideporte.firebaseapp.com",
  projectId: "digideporte",
  storageBucket: "digideporte.firebasestorage.app",
  messagingSenderId: "412954853887",
  appId: "1:412954853887:web:b65b18b181d057cb51e7ca",
  measurementId: "G-88JXMY13QZ"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 2. Cambia entre formularios
function switchForm(tipo) {
  document.getElementById('btn-login').classList.toggle('active', tipo === 'login');
  document.getElementById('btn-registro').classList.toggle('active', tipo === 'registro');
  document.getElementById('form-login').classList.toggle('active', tipo === 'login');
  document.getElementById('form-registro').classList.toggle('active', tipo === 'registro');
  // Limpia errores al cambiar de formulario
  document.getElementById('login-error').style.display = 'none';
  document.getElementById('registro-error').style.display = 'none';
};

// 3. Registro con Firebase
document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('registro-email').value;
  const password = document.getElementById('registro-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      switchForm('login');
    })
    .catch(error => {
      document.getElementById('registro-error').style.display = 'block';
      document.getElementById('registro-error').textContent = error.message;
    });
});

// 4. Login con Firebase
document.getElementById('form-login').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "index.html"; // Redirige al inicio o donde quieras
    })
    .catch(error => {
      document.getElementById('login-error').style.display = 'block';
      document.getElementById('login-error').textContent = error.message;
    });
});

// 5. Observador de estado de sesión (onAuthStateChanged)
auth.onAuthStateChanged(function(user) {
  if (user) {
    // Usuario autenticado
    console.log("Usuario autenticado:", user.email);
    document.querySelector('.usuario-icono').title = "Hola, " + (user.displayName || user.email);
  } else {
    // Usuario NO autenticado
    console.log("No hay usuario autenticado");
    if (!location.pathname.endsWith('login.html')) location.href = 'login.html';
  }
});

