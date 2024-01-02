const input_a = document.getElementById('nA');
const input_b = document.getElementById('nB');
const form = document.querySelector('form');

function formValidator(a, b) {
    let dif = b > a;
    return dif;
}

form.addEventListener('submit', function(e) {
    let formIsValid;
    e.preventDefault();

    formIsValid = formValidator(input_a.value, input_b.value);
    let validMessage = `${input_b.value} é maior que ${input_a.value}`;
    
    if (formIsValid) {
        document.querySelector('.success_message').style.display = 'inline-block';
        document.querySelector('.error_message').style.display = 'none';
        document.querySelector('.success_message').innerHTML = validMessage + ' &check;';
        input_a.value = '';
        input_b.value = '';
    } else {
        document.querySelector('.error_message').style.display = 'inline-block';
        document.querySelector('.success_message').style.display = 'none';
        input_a.value = '';
        input_b.value = '';
        console.log(error_message_list);
    }
})