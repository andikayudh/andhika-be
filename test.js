console.log('-- mulai test');

const variable1 = 'test';
const variable2 = 'saja';

const variable3 = 81090;
const variable4 = 81090.4267;

const person1 = {
    nik: 9001,
    name: 'Jufri',
    alamat: 'Griyasoka',
    pendidikan: 'IT',
    usia: 38,
    gaji: 17892888.2389,
    bith_date: new Date(1986, 1, 1),
}

const person2 = {
    nik: 9002,
    name: 'Andhika P',
    alamat: 'Griyasoka',
    pendidikan: 'IT',
    usia: 38,
    gaji: 17892888.2389,
    bith_date: new Date(1986, 1, 1),
}

const aVar1 = [1, 12, 35, person1, person2]

// console.log('-- variable1 --', variable1, typeof (variable1));
// console.log('-- variable2 --', variable2, typeof (variable2));
// console.log('-- variable3 --', variable3, typeof (variable3));
// console.log('-- variable4 --', variable4, typeof (variable4));
// console.log('-- decimal to integer  --', Math.round(variable4));
// console.log('-- sample object  --', person1, typeof (person1));
console.log('-- sample array  --', aVar1);
console.log('-- single  --', aVar1[4]);
console.log('-- single  --', aVar1[5]);
console.log('-- single  --', aVar1[3]);

console.log('-- akhir test');