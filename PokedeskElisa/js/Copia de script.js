const pokeCard = document.querySelector('[data-poke-card]');
const pokemonname = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const poke_container = document.querySelector('[data-poke-container]');
const pokeid = document.querySelector('[data-poke-id]');
const poke_types = document.querySelector('[data-poke-types]');
const poke_stats = document.querySelector('[data-poke-stats]');

/*pintar card pokemon*/
function showpoke_types(typescolors){
    const poke_types= {
      
      fire: '#B52F25',
	    grass: '#5FB94A',
      electric: '#EBF22B',
      water: '#1155E6',
      ground: '#B56528',
      rock: '#A7A097',
      poison: '#612D8E',
      bug: '#83C30B',
      dragon: '#F5BA32',
      psychic: '#E8498F',
      flying: '#3688B4',
      fighting: '#EC6533',
      ice:'#55BFD7',
	    normal: '#D49EAC',
      ghost: '#33346D',
      dark:'#686564',
      fairy:'#E94367',
      steel:'#63C99B', 
      light:'#FAF80C',
      virus:'#2EF80C',
      time:'#408080',
      sound:'#CBF6E5',
      cosmic:'#3F3B98',
      space: '#DC2CAC',
      death: '#7E4344',
      wood: '#7F802E',
      animal: '#D4A36B',
      moist: '#6B80C1',
      giant: '#7BC9EC',
      enemy: '#EF9495',
      baby: '#66E1FB',
      furry: '#D4836B',
      spider: '#39484F',
      stinky: '#B9BD8F',
      fucker: '#705B70',
      rat:'#AEBAAD',
}

const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
const sprite =  data.sprites.front_default;
const { stats, types, , abilities, weakness } = data;

pokemonname.textContent = data.name;
pokeImg.setAttribute('src', sprite);
pokeId.textContent = `Nº ${data.id}`;
setCardColor(types);
renderPokemonTypes(types);
renderPokemonStats(stats);
}


const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    poke_Stats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokemonname.textContent = 'No encontrado';
    pokeImg.style.background =  '#fff';
    poke_Types.innerHTML = '';
    poke_Stats.innerHTML = '';
    pokeId.textContent = '';
  
  poke_types()
  poke_stats()
  pokeId()
  