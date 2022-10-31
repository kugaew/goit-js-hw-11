import getPfoto from './js/getConnection';

getPfoto('tesla').then(resp => {
    console.log(resp.map(el => el.pageURL));
}).catch(console.log);
