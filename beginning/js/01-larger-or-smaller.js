var integer1 = window.prompt("Please type an integer");
var integer2 = window.prompt("Please type another integer");

if (integer1 > integer2) {
    document.write(integer1);
} else if (integer1 < integer2) {
    document.write(integer2);
} else {
    document.write("The integers are the same: " + integer1);
}
