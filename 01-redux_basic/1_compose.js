import { compose } from "redux";

const makeUpper = (str) => str.toUpperCase();
const repeatTwo = (str) => str.repeat(2);
const makeBold = (str) => str.bold();

const makeSometing = makeBold(repeatTwo(makeUpper("messi")));
const makeSometing2 = compose(makeBold, repeatTwo, makeUpper);
