<script setup>
import { ref, computed } from '@vue/reactivity';
import AjoutFavoris from './components/AjoutFavoris.vue';
import { favoris as tabFavoris } from './stores/favoris';


//ajouter un élément au tableau
const ajoutFavoris = (fav) => {
  //value parce que c'est une valeur computed
  tabFavoris.value.push(fav);
  console.log(tabFavoris);
}

// ajoutFavoris({nom:"gaps", url:"https://gaps.heig-vd.ch/consultation/controlescontinus/consultation.php?idst=17749", categories:["cours", "agenda"]});
// ajoutFavoris({id:Date.now(), nom:"doc vue", url:"https://vuejs.org/guide/introduction.html#what-is-vue", categories:["cours"]});

//attention il faut mettre -1 pour supprimer le bon élément
const supprimeFavoris = (fav) => {
  tabFavoris.value.splice(tabFavoris.value.indexOf(fav)-1, 1);
  console.log(tabFavoris);
}

</script>

<template>
  <div>
    <h1>Liste favoris</h1>
    <ul>
      <p v-for="favoris of tabFavoris">
        {{ favoris.nom }}
        <!--le : car c'est une donnée réactive-->
        <a :href="favoris.url">url </a>
        <button @click="$event => supprimeFavoris($event)" class="deleteFav">X</button>
      </p>
    </ul>
  </div>
  <div>
    <h1>Ajouter un favoris</h1>
    <AjoutFavoris  @add:fav="ajoutFavoris($event)"/>
  </div>
</template>

<style scoped>
.deleteFav {
  background-color: red;
  color: white;
}
</style>
