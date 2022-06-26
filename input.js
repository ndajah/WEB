let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
a = { name: "", phone: "", email: "" };
x = prompt("Please enter a name");
c = confirm(`Are you sure ${x} is correct?`);
if (c == true) {
    a.name = x;
    alert("name has been added to object");
}

ph = prompt("Please enter a phone number");
phc = confirm(`Are you sure ${ph} is correct?`);
if (phc == true) {
    a.phone = ph;
    alert("phone number has been added to object");
}

em = prompt("Please enter an email");
emc = confirm(`Are you sure ${em} is correct?`);
if (emc == true) {
    a.email = em;
    alert("email has been added to object");
}

contacts.push(a);
// write your code here


let last = contacts.length - 1;

console.log('${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}');
console.log('${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}');




INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if (userAge < 21 && hasParentsApproval == false) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval == true) {
    shippingCost -= 5;
} else if ((userAge > 21 && userAge < 65) && (hasParentsApproval || cartValue > 300 || points > 500)) {
    shippingCost = 0;
} else { shippingCost = 9.99; }

/** take account of insurance */
if (addInsurance && isOrderValid && !hasPromoCode) { shippingCost += INSURANCE_COST; }

//if (isOrderValid && addInsurance && !hasPromoCode) {
//shippingCost += INSURANCE_COST;
//}

/** show message */
if (isOrderValid == true) {
    console.log(shippingCost);
} else { "Cannot make order. You are under 21!"; }
/*if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("Cannot order if under 21");
} */