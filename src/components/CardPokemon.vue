<template>
  <div id="poke_container" class="poke-container">
    <div class="pokemon" >
      <div class="img-container">
        <img :src="imgCard" alt="" />
      </div>
      <div class="info">
        <span class="number">{{ id }}</span>
        <h3 class="name">{{ name }}</h3>
        <small class="type"
          >Type:
          <span
            id="Tipos"
            v-for="(type, index) in tipos"
            :key="index"
            :class="'Span-' + type.type.name"
            >{{ type.type.name }}</span
          >
        </small>
      </div>
    </div>
  </div>
</template>
  
  <script>
//import gsap from "gsap";
export default {
  name: "card-pkemon",
  methods: {
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "No Existe",
    },
    imgCard: {
      type: String,
      default: "https://coacademy-server-jc.com/uploads/courses/images/890.jpg",
    },
    tipos: {
      type: Array,
    },
  },
};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato:300,400&display=swap");

* {
  box-sizing: border-box;
}
.poke-container {
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.pokemon {
  background-color: #eee;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  border: black 3px solid;
  width: 320px;
  display: flex;
  height: 170px;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
  border: black 2px solid;
  margin: 5px;
}

.pokemon .img-container img {
  margin-top: 20px;
  max-width: 90%;
  object-fit: fill;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .number {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
}

.pokemon .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}
span {
  border-radius: 10px;
  padding: 7px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 5px;
  border: black 1px solid;
  font-weight: bold;
  width: 55px;
}
.type {
  display: flex;
}

/*Estilos Card */
.normal .pokemon {
  background-color: #a8a878;
}
.fire .pokemon {
  background-color: #f08030;
}
.water .pokemon {
  background-color: #6890f0;
}
.grass .pokemon {
  background-color: #78c850;
}
.electric .pokemon {
  background-color: #f8d030;
}
.ice .pokemon {
  background-color: #98d8d8;
}
.fighting .pokemon {
  background-color: #bf2f27;
}
.poison .pokemon {
  background-color: #a040a0;
}
.ground .pokemon {
  background-color: #e0c068;
}
.flying .pokemon {
  background-color: #a890f0;
}
.psychic .pokemon {
  background-color: #f85888;
}
.bug .pokemon {
  background-color: #a8b820;
}
.rock .pokemon {
  background-color: #b8a038;
}
.ghost .pokemon {
  background-color: #705898;
}
.dark .pokemon {
  background-color: #705848;
}
.dragon .pokemon {
  background-color: #7038f8;
}
.steel .pokemon {
  background-color: #b8b8d0;
}
.fairy .pokemon {
  background-color: #f0b5bb;
}
/*Estilos Span */
.Span-normal {
  background-color: #a8a878;
}
.Span-fire {
  background-color: #f08030;
}
.Span-water {
  background-color: #6890f0;
}
.Span-grass {
  background-color: #78c850;
}
.Span-electric {
  background-color: #f8d030;
}
.Span-ice {
  background-color: #98d8d8;
}
.Span-fighting {
  background-color: #bf2f27;
}
.Span-poison {
  background-color: #a040a0;
}
.Span-ground {
  background-color: #e0c068;
}
.Span-flying {
  background-color: #a890f0;
}
.Span-psychic {
  background-color: #f85888;
}
.Span-bug {
  background-color: #a8b820;
}
.Span-rock {
  background-color: #b8a038;
}
.Span-ghost {
  background-color: #705898;
}
.Span-dark {
  background-color: #705848;
}
.Span-dragon {
  background-color: #7038f8;
}
.Span-steel {
  background-color: #b8b8d0;
}
.Span-fairy {
  background-color: #f0b5bb;
}
</style>