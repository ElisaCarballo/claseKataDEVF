const pokedex = document.getElementById('pokedex');

const getPokemon = () => {
    const promesas = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promesas.push(fetch(url).then(res => res.json()));
    }
    
    Promise.all(promesas).then(resultados => {
        const pokemons = resultados.map((result) => ({
            name : result.name,
            id : result.id,
            img : result.sprites.front_default,
            type : result.types.map(type => type.type.name)
        }));

        showPokemon(pokemons);

    });
}

const showPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTML = 
        pokemon.map((poke)=> 
            `<li class="card">
                <img class="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png,${poke.img}"/>
                <h2 class="card-subtitle">${poke.name}</h2>
                <p class="card-text">${poke.type}</p>
            </li>`
        ).join('');
    pokedex.innerHTML = pokemonHTML;
}

getPokemon();


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const ramdom = getRandomInt(1, 152)
//     fetchData(ramdom)
// })

// const fetchData = async (id) => {
//     try {
//         console.log(id)
        
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         const data = await res.json()
        
//         console.log(data)

//         const pokemon = {
//             img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
//             imgJuego: data.sprites.front_default,
//             imgCvg: data.sprites.other.dream_world.front_default,
//             nombre: data.name,
//             experiencia: data.base_experience,
//             hp: data.stats[0].base_stat,
//             ataque: data.stats[1].base_stat,
//             defensa: data.stats[2].base_stat,
//             especial: data.stats[3].base_stat,
//         }

//         pintarCard(pokemon)
    
//     } catch (error) {
//         console.log(error)
//     }
// } 

// const pintarCard = pokemon => {
//     const flex = document.querySelector('.flex')
//     const template = document.getElementById('card').content
//     const clone = template.cloneNode(true)
//     const fragment = document.createDocumentFragment()

//     clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgCvg)
//     // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego)
//     clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`
//     clone.querySelector('.card-body-text').textContent = pokemon.experiencia + ' exp'
//     clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'K'
//     clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'K'
//     clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'K'

//     fragment.appendChild(clone)
//     flex.appendChild(fragment)
// }