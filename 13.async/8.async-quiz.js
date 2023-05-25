function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
    //return Promise.resolve(`닭이다`);
    return Promise.reject(new Error('can not find 🐓'));
}


// getChicken()
//   .catch(() => '🐔')
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((meal) => console.log(meal))
//   .catch((error) => console.log(error));

async function makeFriedEgg(){
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

makeFriedEgg().then(console.log);


async function getChicken1(){
    const chicken = await fryEgg(await fetchEgg(await getChicken().catch(() => '🐔')));
    return chicken;
}

getChicken1()
.then(console.log);
