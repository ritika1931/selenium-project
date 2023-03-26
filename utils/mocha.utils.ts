import { assert } from 'console';
import {ChaiAssert, expect} from '../libs/mocha-libs';

function verifyEquals(actualValue:any, expectedValue:any, messageOnFailure:string) {
    expect(actualValue).to.equal(expectedValue, messageOnFailure);
}

function verifyIsFalse(actualValue:boolean, messageOnFailure:string) {
    expect(actualValue, messageOnFailure).to.be.false;

}

function verifyIsTrue(actualValue:boolean, messageOnFailure:string) {
    ChaiAssert.isTrue(actualValue, messageOnFailure)
}

function verifyContainsText(actualValue:string, expectedValue:string, messageOnFailure:string) {
    expect(actualValue).to.include(expectedValue, messageOnFailure);
}

const MochaUtils = {
    verifyEquals,
    verifyIsTrue,
    verifyIsFalse,
    verifyContainsText
}
export default MochaUtils