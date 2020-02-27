<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Formulario</h1>
        <form class="mid-form" @submit.prevent="mostrarUsuario">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model="user.nombre" id />
            <div v-if="!$v.user.nombre.required">Este campo es requerido</div>
            <div v-if="!$v.user.nombre.minLength">Minimo 2 letras</div>
          </div>

          <div class="form-group">
            <label for="apellido">Apellidos</label>
            <input type="text" v-model="user.apellido" name="apellido" id />
            <div v-if="!$v.user.apellido.required">Este campo es requerido</div>
            <div v-if="!$v.user.apellido.minLength">Minimo 2 letras</div>
          </div>

          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" v-model="user.biografia"></textarea>
            <div v-if="!$v.user.biografia.required">Este campo es requerido</div>
            <div v-if="!$v.user.biografia.minLength">Minimo 10 letras</div>
          </div>

          <div class="form-group radiobuttons">
            <input type="radio" v-model="user.genero" name="genero" checked id value="Hombre" /> Hombre
            <input type="radio" v-model="user.genero" name="genero" id value="Mujer" /> Mujer
            <input type="radio" v-model="user.genero" name="genero" id value="Otro" /> Otro
          </div>
          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <sidebar />
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  components: {
    Sidebar
  },
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        biografia: "",
        genero: ""
      }
    };
  },
  methods: {
    mostrarUsuario() {}
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellido: {
        required,
        minLength: minLength(2)
      },
      biografia: {
        required,
        minLength: minLength(10)
      }
    }
  }
};
</script>