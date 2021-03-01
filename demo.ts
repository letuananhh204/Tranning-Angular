function anhlt(): Boolean {
    var x = 1;
    var customer: Customer = {
        id: 3
    }
    console.log(customer.id)
    console.log("Hello World");
    return true;
}

anhlt();

interface Customer {
    id: number;
    name?: string;

}