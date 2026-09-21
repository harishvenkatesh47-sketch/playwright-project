export function generateRandomNumber() {
    return Math.floor(Math.random() * 100000);
}

export function generateRandomEmail() {
    let randomNumber = generateRandomNumber();
    return "testuser" + randomNumber + "@gmail.com";
}