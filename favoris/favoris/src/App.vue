<script setup>
import { ref, computed } from '@vue/reactivity';
import AjoutFavoris from './components/AjoutFavoris.vue'

const tabFavoris = ref([]);

//ajouter un élément au tableau
const ajoutFavoris = (fav) => {
  //ajouter un id
  tabFavoris.value.push(fav);
  console.log(tabFavoris);
}

ajoutFavoris({id:Date.now(), nom:"gaps", url:"https://gaps.heig-vd.ch/consultation/controlescontinus/consultation.php?idst=17749", categories:["cours", "agenda"]});
ajoutFavoris({id:Date.now(), nom:"doc vue", url:"https://vuejs.org/guide/introduction.html#what-is-vue", categories:["cours"]});

</script>

<template>
  <div>
    <h1>Liste favoris</h1>
    <ul>
      <p v-for="favoris of tabFavoris">
        {{ favoris.nom }}
        <a :href="favoris.url">url</a>
      </p>
    </ul>
  </div>
  <div>
    <h1>Ajouter un favoris</h1>
    <AjoutFavoris  @add:fav="ajoutFavoris($event)"/>
  </div>
</template>

<style scoped></style>
