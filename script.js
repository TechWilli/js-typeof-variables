/* 
    o método explorado aqui é o toString que é herdado de todos os Objetos em JavaScript
    a forma de usá-lo para saber o tipo real de um valor é Object.prototype.toString.call(),
    onde o call() serve para chamar o método toString do argumento passado this

    mais informações sobre o toString em:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

    mais informações sobre o call em:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Call
*/

// criando uma classe com métodos estáticos (só podem ser chamados pela classe sem instanciá-la)
class TypeOf {

    static is(value) {

        const typeOfValue = Object.prototype.toString.call(value)
        // remove as outras partes da string, deixando apenas o nome do tipo do valor
        const typeAfterReplace = typeOfValue.replace(/[\W]|(object)/g, '')

        return typeAfterReplace
    }

    static isString(value) {
        return this.is(value) === 'String'
    }

    static isNumber(value) {
        return this.is(value) === 'Number'
    }

    static isBigInt(value) {
        return this.is(value) === 'BigInt'
    }

    static isBoolean(value) {
        return this.is(value) === 'Boolean'
    }

    static isArray(value) {

        // return this.is(value) === 'Array'
        // neste caso já existe uma função para saber se o valor é um array
        return Array.isArray(value)
    }

    static isObject(value) {
        return this.is(value) === 'Object'
    }

    static isUndefined(value) {
        return this.is(value) === 'Undefined'
    }

    static isNull(value) {
        return this.is(value) === 'Null'
    }

    static isNaN(value) {
        // neste caso é melhor usara forma abaixo
        return Number.isNaN(value)
    }

    static isFunction(value) {
        return this.is(value) === 'Function'
    }

}

const string = 'testando tipo de variável'
const int = 1000
const float = 10.50
const bigInt = BigInt(10)
const boolean = true
const array = ['a', 'b', 'c', 'd']
const object = {
    name: 'William',
    age: 22
}
const undefinedType = undefined
const nullType = null
const nanType = NaN
const functionType = function() { }

const argumentsType = function() {
    // arguments aqui é o parâmetro padrão de todas as funções
    return TypeOf.is(arguments)
}

console.group('Verificando tipos de variáveis:')

// o this mencinado no comentário do topo é o string, numero, boolean...
console.log(`${JSON.stringify(string)}: ${TypeOf.is(string)}`) // [object String]

console.log(`${int}: ${TypeOf.is(int)}`) // [object Number]

console.log(`${float}: ${TypeOf.is(float)}`) // [object Number]

console.log(`${bigInt}: ${TypeOf.is(bigInt)}`) // [object BigInt]

console.log(`${boolean}: ${TypeOf.is(boolean)}`) // [object Boolean]

console.log(`${JSON.stringify(array)}: ${TypeOf.is(array)}`) // [object Array]

console.log(`${JSON.stringify(object)}: ${TypeOf.is(object)}`) // [object Object]

console.log(`${undefinedType}: ${TypeOf.is(undefinedType)}`) // [object Undefined]

console.log(`${nullType}: ${TypeOf.is(nullType)}`) // [object Null]

console.log(`${nanType}: ${TypeOf.is(nanType)}`) // [object Number]

console.log(`${functionType}: ${TypeOf.is(functionType)}`) // [object Function]

console.log(`arumentos de uma função: ${argumentsType()}`) // [object Arguments]

console.groupEnd()

console.log('testando se a variavel "object" é do tipo Object:', TypeOf.isObject(object))
