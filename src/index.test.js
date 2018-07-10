
import {expect} from 'chai';
import names from './index.js';
import * as R from 'ramda';

describe('countries-names', () => {
    it('should get a list of all names',  () => {
        //all
        const isAllNamesStrings = R.all(R.is(String));
        expect(isAllNamesStrings(names.all)).to.be.equal(true);
        
    });


    it('should get a random name', () => {
        //random
        const name = names.random();
        const findName = R.find(R.equals(name));
        expect(name).to.be.equal(findName(names.all));
    });
});