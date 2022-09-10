var sum = 0;
var salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
}
function sumSalaries(salaries) {
    
    let values = Object.values(salaries);

    for (const vale of values) {
        sum += vale;
    }
    return sum;
}


console.log(sumSalaries(salaries));
document.querySelector('.victory').innerHTML = "Jami: " + sum;