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

console.log(x().returnX());
