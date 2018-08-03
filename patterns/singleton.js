const SingletonFactory = function(obj = {}) {
    let instance;

    const init = () => {
        return obj
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
}

var singleton = new SingletonFactory()
console.log(singleton.getInstance() === singleton.getInstance())