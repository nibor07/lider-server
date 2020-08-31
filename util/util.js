const clean = (palabra) => palabra.toLowerCase().replace(/[\W_]/g, '');

const isPalindrome = ( palabra ) =>{
    const cleanPalabra = clean(palabra);
    const charPalabra = cleanPalabra.split('');

    for( let letra of charPalabra ){
        if( letra !== charPalabra.pop() ){
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;