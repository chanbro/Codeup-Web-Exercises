'use strict';

const sayHello = () => 'hello from say-hello';

// module.exports = {sayHello};



export const power = (base, exponent) => {
    let product = 1
    for (let i=0;i<exponent;i++) {
        product *= base
    }
    return product
};

export let banana = 'banana';
export default {sayHello, banana, power}