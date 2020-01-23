const x = () => {
    let i = 0;

    const returnX = () => {
        i++;
        console.log(i);
    }

    return {
        returnX
    }
}

//x().returnX()


const counter = () => {

    let i = 0;


    const add = (value) => {
        i+= value;
        
    };

    const subtract = (value) => {
        i+= value;
    };


    const print = () => {

        console.log(i)
    };


    return {

        add,
        subtract,
        print
    }
}

let outerCounter = counter();
outerCounter.add(3);
outerCounter.print();