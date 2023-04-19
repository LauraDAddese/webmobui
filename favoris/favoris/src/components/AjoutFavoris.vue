<script setup>
import { ref } from "vue";

defineProps({});

const emits = defineEmits(["add:fav"]);

const nom = ref("");
const url = ref("");
const categories = ref("");

function ajoutFavoris() {
    emits("add:fav", {id: Date.now(), nom: nom.value, url: url.value, categories: categories.value });
}
</script>

<template>
  <!--le v-model sert à récupérer l'input-->
  <label>Nom </label>
  <input type="text" v-model="nom" />
  <br>
  <label>URL </label>
  <input type="url" v-model="url" />
  <br>
  <label>Catégorie </label>
  <input type="text" v-model="categories" />
  <br>
  <button @click="ajoutFavoris">Ajouter</button>
</template>

<style scoped></style>
