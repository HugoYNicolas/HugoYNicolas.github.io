function switchForm(tipo) {
  document.getElementById('btn-login').classList.toggle('active', tipo === 'login');
  document.getElementById('btn-registro').classList.toggle('active', tipo === 'registro');
  document.getElementById('form-login').classList.toggle('active', tipo === 'login');
  document.getElementById('form-registro').classList.toggle('active', tipo === 'registro');
}

function login(e) {
  e.preventDefault();
  alert('¡Inicio de sesión simulado! (aquí iría tu lógica real)');
  // Aquí podrías redirigir o mostrar mensaje de éxito
}

function registrar(e) {
  e.preventDefault();
  alert('¡Registro simulado! (aquí iría tu lógica real)');
  // Aquí podrías redirigir o mostrar mensaje de éxito
}
