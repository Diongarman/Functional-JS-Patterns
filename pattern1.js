let profile = {
    name: "Dion",
    children:[
        {
            name:"Ricky",
            getName() {
                return this.name
            }
        }
    ],
    getName() {
        return this.name
    }

}

console.log(profile.children[0].getName())

const getNameLoose = profile.getName;

console.log(getNameLoose())