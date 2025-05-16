const calcularMedia = require('./src/scripts/calcularMedia.js');

test('Media da nota (4 + 4) / 2 = 4', () => {
    expect(calcularMedia(4, 4)).toBe(4);
})