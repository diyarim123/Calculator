const userInput = document.querySelector("#user_input");

var expression = '';

function press(num) {
    expression += num;
    userInput.value = expression;
}
function equal() {
    userInput.value = eval(expression); /* eval function means evaluate the expression, so if you press + it sums them
                                        if you press multiply it will multiply them...*/
    expression = ''; // this is just for if the user want to add new numbers, the value will be null again
}
function erase() {
    expression = '';
    userInput.value = expression;
}