var retries = 0;
do {
    retries++;
    showLoginScreen();
} while (!authenticated() && retries < 3);
if (retries == 3) {
    alert("Too many tries");
}