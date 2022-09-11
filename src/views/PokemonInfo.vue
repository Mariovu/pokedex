<template>
  <div class="body">
    <div class="container">
    <div id="pokeball-1" class="pokeball">
      <button id="toggle-button" @click="togglePokeball"></button>
      <article>
        <h1><span>Charizard</span><span>#006</span></h1>
        <div class="species">Flame Pokemon</div>
        <p>
          Flies around the sky in search of powerful opponents. It breathes fire
          of such great heat that it melts anything. However, it never turns its
          fiery breath on any opponent weaker than itself.
        </p>
        <ul>
          <li>
            <label><span>HP</span><span>330</span></label>
            <meter
              min="266"
              low="293"
              high="333"
              optimum="360"
              max="360"
              value="330"
            >
              330/360
            </meter>
          </li>
          <li>
            <label><span>Speed</span><span>280</span></label>
            <meter
              min="184"
              low="236"
              high="276"
              optimum="328"
              max="328"
              value="280"
            >
              280/328
            </meter>
          </li>
          <li>
            <label><span>Attack</span><span>280</span></label>
            <meter
              min="155"
              low="204"
              high="244"
              optimum="293"
              max="293"
              value="270"
            >
              280/293
            </meter>
          </li>
          <li>
            <label><span>Defense</span><span>190</span></label>
            <meter
              min="144"
              low="192"
              high="232"
              optimum="280"
              max="280"
              value="190"
            >
              190/280
            </meter>
          </li>
          <li>
            <label><span>Sp. Atk</span><span>340</span></label>
            <meter
              min="200"
              low="254"
              high="294"
              optimum="348"
              max="348"
              value="340"
            >
              340/348
            </meter>
          </li>
          <li>
            <label><span>Sp. Def:</span><span>230</span></label>
            <meter
              min="157"
              low="206"
              high="246"
              optimum="295"
              max="295"
              value="230"
            >
              230/295
            </meter>
          </li>
        </ul>
      </article>
    </div>
    <div class="pokemon">
      <img src="https://i.imgur.com/E4t72wb.png" alt="charizard" />
      <div class="tags">
        <span class="fire">Fire</span>
        <span class="flying">Flying</span>
        <span class="height">1.7 m</span>
        <span class="weight">90.5 kg</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "pokemon-info",
  methods: {
    togglePokeball() {
      const pokeball = document.getElementById("pokeball-1");
      if (pokeball.classList.contains("open")) {
        pokeball.classList.remove("open");
      } else {
        pokeball.classList.add("open");
      }
    },
  },
};
</script>


<style scoped>
.container {
  margin: 0;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  background-color: #7dabdc;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");

.hidden {
  position: absolute;
  top: -1px;
  left: -1px;
  height: 1px;
}

/*este*/
.pokeball {
  min-width: 300px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: grey;
  background-repeat: no-repeat;
  background-size: 350px 350px;
  background-position: 50px 200px;
  transition: all 0.5s ease-in 0.3s;
}

.pokeball.open {
  background-color: #fffffd;
  transition: all 0.5s ease-in;
}

.pokeball button {
  border: 1px solid #615e69;
  background-color: #f0f0f0;
  box-shadow: inset 0px -3px 0px 0px #bdbdbd, inset 0px -4px 0px 0px #615e69,
    0px 0px 0px 10px #f0f0f0, 0px 0px 0px 10px #f0f0f0, 0px 0px 0px 24px #615e69;
  padding: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  transition: top 1s;
  transition-delay: 0.3s;
  cursor: pointer;
}

.pokeball button:active {
  outline: 0;
  box-shadow: inset 0px 3px 0px 0px #bdbdbd, inset 0px 4px 0px 0px #615e69,
    0px 0px 0px 10px #f0f0f0, 0px 0px 0px 24px #615e69;
}

.pokeball button:focus {
  outline: 0;
}

.pokeball.open button {
  top: 10%;
  box-shadow: inset 0px -3px 0px 0px #bdbdbd, inset 0px -4px 0px 0px #615e69,
    0px 0px 0px 10px #f0f0f0, 0px 0px 0px 10px #f0f0f0, 0px 0px 0px 24px #615e69,
    0px 5px 0px 24px rgba(0, 0, 0, 0.1);
  transition-delay: 0s;
}

.pokeball.open button:active {
  outline: 0;
  box-shadow: inset 0px 3px 0px 0px #bdbdbd, inset 0px 4px 0px 0px #615e69,
    0px 0px 0px 10px #f0f0f0, 0px 0px 0px 10px #f0f0f0, 0px 0px 0px 24px #615e69,
    0px 5px 0px 24px rgba(0, 0, 0, 0.1);
}

/*Raya Boton*/
.pokeball::before {
  content: "";
  width: 100%;
  top: 0;
  background-color: #fd5365;
  position: absolute;
  height: calc(55% - 12px);
  border-bottom: 18px solid #615e69;
  transition: all 1s;
  transition-delay: 0.3s;
}

.pokeball.open::before {
  top: -40%;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.1);
  transition-delay: 0s;
}

/*Esta*/

.pokeball::after {
  content: "";
  width: 100%;
  background-color: white;
  position: absolute;
  top: calc(50% + 9px);
  height: calc(50% - 2px);
  border-top: 2px solid #615e69;
  background-image: radial-gradient(#615e69 35px, transparent 35px),
    radial-gradient(black 35px, transparent 36px),
    radial-gradient(#615e69 47px, transparent 47px);
  background-size: 96px 96px;
  background-position: 50% -57px;
  background-repeat: no-repeat;
  transition: all 1s;
  transition-delay: 0.3s;
}

.pokeball.open::after {
  top: 90%;
  box-shadow: 0px -5px 0px 0px rgba(0, 0, 0, 0.1);
  transition-delay: 0s;
}

.pokeball button svg {
  margin: 0 0 4px 4px;
}

.pokeball button:active svg {
  margin: 4px 0 0 4px;
}

.pokeball article {
  padding: 0 20px;
  font-size: 13px;
  line-height: 1.5;
}

.pokeball h1 {
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 21px;
  font-weight: normal;
  color: #111;
}

.pokeball h1 span:last-child {
  font-weight: lighter;
}

.pokeball p {
  margin: 20px 0;
}

.pokeball ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr 1fr 1fr;
  column-gap: 22px;
}

.pokeball li {
  margin: 0 0 4px 0;
}

.pokeball label {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}

.pokeball label span:last-child {
  color: black;
}

.pokeball meter {
  width: 100%;
  height: 6px;
  display: block;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  color: transparent;
  font-size: 0;
}

.pokeball meter::-webkit-meter-bar {
  background: none;
  background-color: #d8d8d8;
  border: none;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.pokeball meter::-webkit-meter-optimum-value {
  background: none;
  background-color: #60ca60;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.pokeball meter::-webkit-meter-suboptimum-value {
  background: none;
  background-color: #f0c85c;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.pokeball meter::-webkit-meter-even-less-good-value {
  background: none;
  background-color: #ee7863;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.tags span {
  background-color: #f1f1f1;
  border-radius: 20px;
  padding: 6px 16px;
  font-weight: normal;
  letter-spacing: 2px;
  margin-right: 4px;
}

span.fire {
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  background-color: #fb613e;
}

span.flying {
  color: white;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  background-color: #5684b5;
}

.pokemon {
  position: relative;
  text-align: center;
  margin-left: 60px;
}

.pokemon img {
  width: 400px;
  background-image: radial-gradient(#5684b5 60%, transparent 60%);
  background-size: 300px 300px;
  background-repeat: no-repeat;
  background-position: 50% 90%;
  filter: url(#test);
}

.summon {
  position: absolute;
}

@media only screen and (min-width: 765px) {
  .pokebody {
    transform: scale(0.8);
  }
}
</style>