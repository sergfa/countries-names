import originalData from './data';
import {map} from 'ramda';
import {prop} from 'ramda';
import {find} from 'ramda';
import {pipe} from 'ramda';
import {defaultTo} from 'ramda';
import {toLower} from 'ramda';
import {equals} from 'ramda';

const findBy = (value, searchProperty, returnProperty) => pipe(find(country => equals(toLower(country[searchProperty]),value)), defaultTo({}), prop(returnProperty));

const mainExport = {
    names: () => map(prop('Name'))(originalData),
    codes: () => map(prop('Code'))(originalData),
    countryByCode: country => findBy(toLower(country || ''), 'Code', 'Name')(originalData),
    codeByCountry: code => findBy(toLower(code || ''), 'Name', 'Code')(originalData),
    all: () => map(item=>({name:item.Name, code: item.Code}))(originalData)
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatibility