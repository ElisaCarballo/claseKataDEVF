const pokeContent = document.getElementById('pokemonContent');
let pokeForm = document.getElementById('searchPokemon');
let generationshow = 1
const modalSearch = document.getElementById('pokemonContent')
const divGeneration = document.getElementById('textGen')


function showPokemonGen(gen){
    const pokemonGen = {
        1:[1, 151],
        2:[152,251],
        3:[252, 386],
        4:[38, 493],
        5:[494, 649],
        6:[650, 722],
        7:[723, 803],
        8:[804,862],
    };


    const pokemonGenDefault = [1, 862];
    const generacion = pokemonGen[gen] || pokemonGenDefault;
    return generacion;

}

let pokemonGeneration = showPokemonGen(generationshow)


/*cambiar de generacion*/

let arrowRight = document.getElementById('arrow-right').addEventListener('click', e=>{

    if (generationshow < 8){
            modalSearch.innerHTML = '';
        generationshow += 1
        pokemonGeneration = showPokemonGen(generationshow)
        divGeneration.innerHTML = 'Gen ' + generationshow
        drawPokemon()
    }
})


let arrowleft = document.getElementById('arrow-left').addEventListener('click', e=>{
    
    if (generationshow > 1){
        modalSearch.innerHTML = '';
        generationshow -= 1
        pokemonGeneration = showPokemonGen(generationshow)
        divGeneration.innerHTML = 'Gen ' + generationshow
        drawPokemon()
        console.log(generationshow)
    }
})


const drawPokemon = async () =>{
    for (let i = pokemonGeneration[0]; i <= pokemonGeneration[1]; i++) {
		await getPokemon(i);
	}
}

const getPokemon = async (id, modal) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const rest = await fetch(url);
    const pokemon = await rest.json();
    createPokemon(pokemon, modal);
}

/*pintar card pokemon*/
const colors = {
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

const main_types = Object.keys(colors)


function  createPokemon(pokemon, modal){
    const pokemonEl = document.createElement('div');
    
	pokemonEl.classList.add('pokemon');
    
	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	

	if (modal !==true){
        const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(8, ' ')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Tipo: <span>${type}</span></small>
        </div>
    `;
        pokemonEl.innerHTML = pokeInnerHTML;
        pokeContent.appendChild(pokemonEl);
    }

    else{
        const pokeInnerHTML = `
        <div class="modal" id="modalPokemon">
        <div class="pokemon">
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(8, ' ')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Tipo: <span>${type}</span></small>
        </div>
        </div>
    
    </div>`;
                

    modalSearch.innerHTML = pokeInnerHTML;
        
    }
}

drawPokemon()

/*Buscar pokemon*/

pokeForm.addEventListener('submit', e =>{
    e.preventDefault();
    let searchPokemon = document.getElementById('pokemon').value;
    getPokemon(searchPokemon, true);
})

function exitModal(){
    const modalPokemon = document.getElementById('modalPokemon');
    modalPokemon.style.display ='none'
    drawPokemon()
}
