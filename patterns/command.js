const CommandFactory = actions => {
    return {
        execute(command, ...args) {
            return actions[command](...args)
        }
    }
}

const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    pow: (a, b) => Math.pow(a, b),
}
console.log(CommandFactory(calculator).execute('pow', 2, 3))