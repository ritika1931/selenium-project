import { assert } from 'console';
import {ChaiAssert, expect} from '../libs/mocha-libs';

function verifyEquals(actualValue:string, expectedValue:string, messageOnFailure:string) {
   ChaiAssert.equal(actualValue,expectedValue, messageOnFailure);
}


function verifyIsTrue(actualValue:boolean, messageOnFailure:string) {
    ChaiAssert.isTrue(actualValue, messageOnFailure)
}

const MochaUtils = {
    verifyEquals,
    verifyIsTrue
}
export default MochaUtils