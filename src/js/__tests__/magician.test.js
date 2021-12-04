import Magician from '../magician'

test('attack', () => {
    const magician = new Magician('name');
    magician.attackChange = 2;
    const received = magician.attackChange;
    expect(received).toEqual(90);
});

test('attack + stonedDamage', () => {
    const magician = new Magician('name');
    magician.attackChange = 2;
    magician.stoned = true;
    const received = magician.attackChange;
    expect(received).toEqual(85);
});

test('attack + stonedDamage', () => {
    const magician = new Magician('name');
    magician.stoned = true;
    const received = magician.stoned;
    expect(received).toEqual(true);
});
