var mutableExtend = require('./mutable')

module.exports = extend

function extend() {
    var args = [{}]
    for (var i = 0; i < arguments.length; ++i) {
        args.push(arguments[i])
    }
    return mutableExtend.apply(null, args)
}
