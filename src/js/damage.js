import Character from "./character";

export default class Damage extends Character {
    constructor(name) {
        super(name);
        this.stonedDamage = false;
        this.rangeAttack = undefined;
    };

    set attackChange(range) {
        this.rangeAttack = range;
    };

    get attackChange() {
        const damage = 100 - (this.rangeAttack - 1) * 10;
        let changeAttack = (this.attack * damage) / 100;
        if (this.stonedDamage) {
            changeAttack -= Math.log2(this.rangeAttack) * 5;
        }
        return Math.round(changeAttack);
    };

    set stoned(value) {
        this.stonedDamage = value;
    };

    get stoned() {
        return this.stonedDamage;
    };
}