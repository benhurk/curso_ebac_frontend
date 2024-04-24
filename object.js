function Card(name, level, damage, hp) {
    this.name = name;
    let _level = level;
    let _damage = damage;
    let _hp = hp;

    this.attack = function() {
        console.log(name + " attacked, dealing " + damage + " damage!");
    }

    this.setLevel = function(levelUp) {
        if (typeof levelUp === 'number' && levelUp > 0) {
            _level += levelUp;
            _hp = _hp * _level;
            _damage = _damage * _level;
        }
    }
}

function FireCard(name, level, damage, hp, special) {
    this.type = "fire";
    this.counter = "water";
    this.special = special

    Card.call(this, name, level, damage, hp);
}

function WaterCard(name, level, damage, hp, special) {
    this.type = "water";
    this.counter = "plant";
    this.special = special

    Card.call(this, name, level, damage, hp);
}

function PlantCard(name, level, damage, hp, special) {
    this.type = "plant";
    this.counter = "fire";
    this.special = special

    Card.call(this, name, level, damage, hp);
}

const card1 = new FireCard("Dragon", 1, 2, 2, DragonsBreath);
const card2 = new WaterCard("Shark", 1, 3, 1, WaterPulse);
const card3 = new PlantCard("Ancient Tree", 1, 1, 3, RootAttack);