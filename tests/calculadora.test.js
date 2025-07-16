const calculator = require("../models/calculator.js");

test('sum 2+2: EXPECT 4', ()=> {
    const result = calculator.summ(2,2);
    expect(result).toBe(4);
});

test('sum 5+100: EXPECT 105', ()=> {
    const result = calculator.summ(5,100);
    expect(result).toBe(105);
});

test('sum "banana" +100: EXPECT Error', ()=> {
    const result = calculator.summ("banana",100);
    expect(result).toBe('Error');
});

test('sum "banana" +100: EXPECT Error', ()=> {
    const result = calculator.summ(5,"banana");
    expect(result).toBe('Error');
});