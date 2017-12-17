const { get } = require('crocks/State');
const Pair = require('crocks/Pair');
const compose = require('crocks/helpers/compose');

// State s a
// (s -> (a, s))

// add :: Number -> Number -> Number
const add = x => y => x + y;

// pluralize :: (String, String) -> Number -> String
const pluralize = (single, plural) => num =>
    `${num} ${Math.abs(num) === 1 ? single : plural}`;

// makeAwesome :: Number -> String
const makeAwesome = pluralize('awesome', 'awesomes');

// flow :: Number -> String
const flow = compose(makeAwesome, add(69));

// map :: State(s, a) -> (a -> b) -> State(s, b)

//updateValue :: Number -> State Number
console.log(
    get()
        .map(flow)
        .runWith(-48)
        .fst()
);
