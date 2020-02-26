<template>
  <header id="header">
    <div class="center">
      <!-- Logo -->
      <div id="logo">
        <img src="../assets/logo.png" alt="Logotipo" class="app-logo" />
        <span id="brand">
          <strong>Curso</strong> Vue
        </span>
      </div>

      <!-- Menu -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario">Formulario</router-link>
          </li>
          <li>
            <router-link
              :to="{name:'pagina', params: {
              id: 'Soy el parametro'
            }}"
            >Pagina 1</router-link>
          </li>
          <li>
            <a href="#">Pagina 2</a>
          </li>
        </ul>
      </nav>

      <!-- Limpiar flotados -->
      <div class="clearfix"></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>