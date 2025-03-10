const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Med";

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// Option 1:
// let starterPokemon;

// for (let i = 0; i < pokemon.length; i++){
//   if (pokemon[i].starter) {
//     starterPokemon = pokemon[i]
//     break; // stop iterating after finding the first starter pokemon
//   }
// }

// game.party.push(starterPokemon)

// Option 2
let starterPokemon = pokemon.find((poke) => {
  return poke.starter;
});

game.party.push(starterPokemon);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// Get a fire pokemon
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "fire") {
    game.party.push(pokemon[i]);
    break;
  }
}

// Get a water pokemon
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "water") {
    game.party.push(pokemon[i]);
    break;
  }
}

// Get a fairy pokemon
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type === "fairy") {
    game.party.push(pokemon[i]);
    break;
  }
}

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
  // console.log(game.gyms[i].difficulty)
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

for (let i = 0; i < game.party.length; i++) {
  let evolvedPokemonIdx = game.party[i].number;
  game.party.splice(i, 1, pokemon[evolvedPokemonIdx]);
}

// console.log(game);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

// console.log(pokemon[0].starter)

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter) {
    console.log(pokemon[i]);
  }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[149]);
game.catchPokemon(pokemon[150]);
