// Boolean

console.log(5 > 3)  // True
console.log(42 < 10)  // False

console.log(typeof true)
console.log(typeof false)

// Operadores Relacionais (>, <, >=, <=, ==, ===, !=, !==)

console.log(10 > 2)
console.log(7 < 3)
console.log(5 >= 5)
console.log(1 <= 2)
console.log(10 == '10')  // True
console.log(10 === '10')  // False

// Operadores Lógicos (&&, ||, !)

console.log(5 > 3 && 10 < 20)  // True
console.log(8 > 0 && 10 == 20)  // False
console.log(10 < 5 && 34 < 72)  // False
console.log(9 > 10 && 2 >= 20)  // False

console.log(5 >= 5 || 10 < 15)  // True
console.log(72 >= 30 || 7 < 5)  // True
console.log(30 >= 25 || 50 <= 100)  // True
console.log(10 == 9 || 10 < -30) // False

console.log(!(10 > 10))  // True
console.log(!(10 < 100)) // False

// Operador Ternário (<expressão> ? <valor caso seja 'true'> : <valor caso seja 'false'>)

console.log(5 > 3 ? 'True':'False')
