import originalData from './data';
import {map} from 'ramda';
import {prop} from 'ramda';
import {find} from 'ramda';
import {pipe} from 'ramda';
import {defaultTo} from 'ramda';
import {toLower} from 'ramda';
import {equals} from 'ramda';
import {Observable} from 'rxjs'
import axios from "axios";


const findBy = (value, searchProperty, returnProperty) => pipe(find(country => equals(toLower(country[searchProperty]),value)), defaultTo({}), prop(returnProperty));



const searchWiki = (countryName) => {
    return Observable.create((observer)=>{
        let cancelled = false;
        axios.get( `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${countryName}&limit=1`
        ).then(response => {
            if (cancelled) {
                return;
            }
            if(response.data.error) {
                observer.next('');
            } else {
                observer.next(response.data[2][0]);
            }
            observer.complete(); 
        
         })
        .catch(error =>  {
            observer.error(error)
        }); 
        
        return () => {
            cancelled = true;
        }
        
    });
};

const mainExport = {
    names: () => map(prop('Name'))(originalData),
    codes: () => map(prop('Code'))(originalData),
    nameByCode: code => findBy(toLower(code || ''), 'Code', 'Name')(originalData),
    codeByName: country => findBy(toLower(country || ''), 'Name', 'Code')(originalData),
    all: () => map(item=>({name:item.Name, code: item.Code}))(originalData),
    searchWiki
};

export default mainExport;
module.exports = mainExport; // for CommonJS compatibility