import Daemon from '../daemon';

test('attack', () => {
    const daemon = new Daemon('name');
    daemon.attackChange = 2;
    const received = daemon.attackChange;
    expect(received).toEqual(90);
});

test('attack + stonedDamage', () => {
    const daemon = new Daemon('name');
    daemon.attackChange = 2;
    daemon.stoned = true;
    const received = daemon.attackChange;
    expect(received).toEqual(85);
});

test('attack + stonedDamage', () => {
    const daemon = new Daemon('name');
    daemon.stoned = true;
    const received = daemon.stoned;
    expect(received).toEqual(true);
});
