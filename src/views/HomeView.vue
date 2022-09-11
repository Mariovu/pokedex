<template>
  <div class="app">
    <div class="top">
      <img src="https://fontmeme.com/images/Pokemon-Logo.jpg" />
    </div>

    <div class="pokemones">
      <CardPokemon
        v-for="(data, index) in pokemons"
        :key="index"
        :class="data.tipos[0].type.name"
        :name="data.name"
        :imgCard="data.url"
        :id="data.id"
        :tipos="data.tipos"
      />
    </div>
  </div>
</template>
  
  <script>
import CardPokemon from "@/components/CardPokemon";
import axios from "axios";

export default {
  name: "Home-view",
  data() {
    return {
      pokemons: [],
    };
  },
  created() {
    let instance = this;
    for (let i = 0; i < 100; i++) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + (i + 1))
        .then((response) => {
          let pokemon = {
            id: response.data.id,
            name: response.data.name,
            url: response.data.sprites.front_default,
            tipos:response.data.types,
          };
          instance.pokemons.push(pokemon);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  components: {
    CardPokemon,
  },
  methods: {
    prueba(pokemon_info) {
      console.log(pokemon_info);
    },
  },
};
</script>
  
  <style scoped>
.app {
  width: 100%;
}
.top {
  width: 100%;
  height: 150px;
  text-align: center;
}
.top img {
  width: 500px;
  height: auto;
  max-width: 100%;
  max-height: 150px;
}

.pokemones {
  display: flex;
  flex-wrap: wrap;
}


</style>