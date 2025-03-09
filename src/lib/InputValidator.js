export function emailValidate(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}
export function passwordValidate(password){
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,}$/
    return passRegex.test(password);
}