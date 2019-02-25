import {expect} from 'chai';
import C from './index.js';
import * as R from 'ramda';
import originalData from './data';

describe('countries-names', () => {

    const isAllStrings = R.all(R.is(String));

    it('original list should have Name property for each item', () => {
        //originalData
        const names = R.map(R.prop('Name'))(originalData);
        expect(isAllStrings(names)).to.be.equal(true);
    });

    it('original list should have Code property for each item', () => {
        //originalData
        const codes = R.map(R.prop('Code'))(originalData);
        expect(isAllStrings(codes)).to.be.equal(true);
    });


    it('should have not empty code property from all()', () => {
        //all
        const codes = R.map(R.pipe(R.prop('code'), R.trim))(C.all());
        expect(R.all(code => code.length > 0)(codes)).to.be.equal(true);

    });

    it('should have not empty name property from all()', () => {
        //all
        const names = R.map(R.pipe(R.prop('name'), R.trim))(C.all());
        expect(R.all(name => name.length > 0)(names)).to.be.equal(true);

    });


    it('should get a list of all country names', () => {
        //names()
        expect(C.names().length).to.be.equal(originalData.length);
    });

    it('all country names should be strings', () => {
        //names()
        expect(isAllStrings(C.names())).to.be.equal(true);
    });

    it('should get a list of all country codes', () => {
        //codes()
        expect(C.codes().length).to.be.equal(originalData.length);
    });

    it('all country names should be strings', () => {
        //codes()
        expect(isAllStrings(C.codes())).to.be.equal(true);
    });


    it('should get undefined country when for invalid code', () => {
        //nameByCode()
        expect(C.nameByCode('WWW')).to.be.equal(undefined);
    });

    it('should get undefined country when for undefined code', () => {
        //nameByCode()
        expect(C.nameByCode()).to.be.equal(undefined);
    });

    it('should get undefined country when for null code', () => {
        //nameByCode()
        expect(C.nameByCode(null)).to.be.equal(undefined);
    });

    it('should get country name when for the specified code', () => {
        //nameByCode()
        const expectedCountry = originalData[0];
        expect(C.nameByCode(expectedCountry.Code)).to.be.equal(expectedCountry.Name);
    });


    it('should get country name  for the specified code in lower case', () => {
        //nameByCode()
        const expectedCountry = originalData[originalData.length - 1];
        const actualCountry = C.nameByCode(R.toLower(expectedCountry.Code));
        expect(actualCountry).to.be.equal(expectedCountry.Name);
    });


    it('should get undefined code when for invalid country', () => {
        //codeByName()
        expect(C.codeByName('Apple')).to.be.equal(undefined);
    });

    it('should get undefined code when for undefined country', () => {
        //codeByName()
        expect(C.codeByName()).to.be.equal(undefined);
    });

    it('should get undefined code when for null country', () => {
        //codeByName()
        expect(C.codeByName(null)).to.be.equal(undefined);
    });

    it('should get code name when for the specified country', () => {
        //codeByName()
        const expectedCountry = originalData[0];
        expect(C.codeByName(expectedCountry.Name)).to.be.equal(expectedCountry.Code);
    });

    it('should get code name when for the specified country in upper case', () => {
        //codeByName()
        const expectedCountry = originalData[0];
        const actualCode = C.codeByName(R.toUpper(expectedCountry.Name));
        expect(actualCode).to.be.equal(expectedCountry.Code);
    });

    it('should get country info from wikipedia', (done) => {
            C.searchWiki('Israel').subscribe(
                result => {
                    expect(result.length > 0).to.be.equal(true);
                    done();
                }
            )
    });




});