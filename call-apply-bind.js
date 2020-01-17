const profile = {
    name: 'Dion',
    age: 30
}

const setProfile = function(name, age) {

    this.name = name;
    this.age = age;
}

/*
                            ++++++++++++++++
                            |AD HOC CALLING|
                            ++++++++++++++++
*/
//setProfile.call(profile, 'Ricky', 29);
// let params = ['ricky', 29];
// setProfile.apply(profile, params)
// console.log(profile);

/*
                            +++++++++++++++
                            |TIGHT BINDING|
                            +++++++++++++++
*/


const boundProfile = setProfile.bind(profile);
boundProfile('alex', 27);
console.log(profile);