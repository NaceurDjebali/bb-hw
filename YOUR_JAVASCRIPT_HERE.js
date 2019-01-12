const hero = {
    name: 'Dragonborn',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }
}

function rest(player) {
    player.health = 10
    return player
}; 

function pickUpItem(player,weapon) {
    player.inventory.push(weapon) 

};

function equipWeapon() {

    
};


document.getElementById("inn").onclick

 
