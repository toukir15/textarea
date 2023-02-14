
document.getElementById('bold__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.fontWeight = 'bold';
})
document.getElementById('italic__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.fontStyle = 'italic';
})
document.getElementById('underline__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.textDecoration = 'underline';
})
document.getElementById('left__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.textAlign = 'left';
})
document.getElementById('middle__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.textAlign = 'center';
})
document.getElementById('right__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.textAlign = 'right';
})

document.getElementById('number__btn').addEventListener('click', function () {
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.fontSize = '44px';


})


function getInputColor() {
    const inputFieldValue = document.getElementById('favcolor').value;
    const textFieldValue = document.getElementById('textarea__field');
    textFieldValue.style.color = inputFieldValue;

}


