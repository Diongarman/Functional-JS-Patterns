const outer = () => {

    let i = 0;

    return {


        add(val) {
            i+=val
            return this
        },
        subtract(val) {
            i-=val;
            return this
        },
        print() {
            return i
        }

    }
}