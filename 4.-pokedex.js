const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pichuSad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeType1 = data.types[0].type.name;
            let pokeHp = data.stats[0].base_stat;
            let pokeAttack = data.stats[1].base_stat;
            let pokeDefense = data.stats[2].base_stat;
            let pokeSpecialA = data.stats[3].base_stat;
            let pokeSpecialD = data.stats[4].base_stat;
            let pokeSpeed = data.stats[5].base_stat;  
            let pokeMov1 = data.moves[0].move.name;
            let pokeMov2 = data.moves[1].move.name;
            let pokeMov3 = data.moves[2].move.name;
            let pokeMov4 = data.moves[3].move.name;
            let longPoke = (data.types).length;
            if (longPoke == "2"){
                let pokeType2 = data.types[1].type.name;
                pokeTypes2x(pokeType1, pokeType2);
                console.log(pokeType2);
            }
            console.log(pokeType1);
            pokeImage(pokeImg);
            if(longPoke == "1"){
            pokeTypes(pokeType1);
            }
            pokeStats(pokeHp, pokeAttack, pokeDefense, pokeSpecialA, pokeSpecialD,pokeSpeed);
            pokeMoves(pokeMov1, pokeMov2, pokeMov3, pokeMov4);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeTypes = (pokeType1) => {
    const pokeTypes1 = document.getElementById("type1");
    pokeTypes1.innerHTML = pokeType1;
}

const pokeTypes2x = (pokeType1,pokeType2) => {
    const pokeTypes1 = document.getElementById("type1");
    pokeTypes1.innerHTML = pokeType1;
    const pokeTypes2 = document.getElementById("type2");   
    pokeTypes2.innerHTML = pokeType2;
}

const pokeStats = (pokeHp, pokeAttack, pokeDefense, pokeSpecialA, pokeSpecialD,pokeSpeed) => {

    const pokemonHp = document.getElementById("hp");
    pokemonHp.innerHTML = pokeHp;
    const pokemonAt = document.getElementById("attack");
    pokemonAt.innerHTML = pokeAttack;
    const pokemonDe = document.getElementById("defense");
    pokemonDe.innerHTML = pokeDefense;
    const pokemonSa = document.getElementById("special-atack");
    pokemonSa.innerHTML = pokeSpecialA;
    const pokemonSd = document.getElementById("special-defense");
    pokemonSd.innerHTML = pokeSpecialD;
    const pokemonSp = document.getElementById("speed");
    pokemonSp.innerHTML = pokeSpeed;

}

const pokeMoves = (pokeMov1, pokeMov2, pokeMov3, pokeMov4) => {
    const pokeMovi1 = document.getElementById("mov1");
    pokeMovi1.innerHTML = pokeMov1;
    const pokeMovi2 = document.getElementById("mov2");
    pokeMovi2.innerHTML = pokeMov2;
    const pokeMovi3 = document.getElementById("mov3");
    pokeMovi3.innerHTML = pokeMov3;
    const pokeMovi4 = document.getElementById("mov4");
    pokeMovi4.innerHTML = pokeMov4;
}
