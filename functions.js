module.exports = {
    returnTwo: () => {
        return 2
    },

    greeting: (name) => {
        return `Hello, ${name}`

    },

    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        let result = 0
        for (let i = 0; i < arguments.length; i++) {
            if (arguments.length > 2)
            console.log('Error here')
        } else {
            result = num1 - num2
        }
        return result
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1 / num2
    }




}