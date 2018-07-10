import all from './data';
import uniqueRandomArray from 'unique-random-array';

const random = uniqueRandomArray(all);

const mainExport =  {
    all,
    random
};
export default mainExport;
module.exports = mainExport; // for CommonJS compatibility