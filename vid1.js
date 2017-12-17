const State = require('crocks/State')
const Pair = require('crocks/Pair')

// State s a
// (s -> (a, s))

//updateValue :: Number -> State Number

updateValue = x => 
    State(state => Pair(state + x, state))

updateState = x => 
    State(state => Pair(state, state + x))
console.log(
    updateState(10)
        .runWith(45)
        .fst()
)