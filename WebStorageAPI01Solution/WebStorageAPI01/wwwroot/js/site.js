// source:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage

// All needed elements are defined as constants at script start.
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalizedParagraph = document.querySelector('.personalizedParagraph');

// If you don't want an automatic page reload when pressing 'Enter' or 'Forget'
// include the next part.

// form.addEventListener('submit', function (e) 
// {
//     e.preventDefault();
//     alert("Submit btn's default behavior deactivated.");
// });

// This function runs when the 'Hello' button is clicked.
submitBtn.addEventListener('click', function ()
{
    localStorage.setItem('name', nameInput.value);
});

// This function runs when the 'Forget' button is clicked.
forgetBtn.addEventListener('click', function ()
{
    localStorage.removeItem('name');
});

// This function is called 'onload'.
function nameDisplayCheck()
{
    // A personalized view is shown when the key 'name' in the localStorage has a value.
    if (localStorage.getItem('name'))
    {
        h1.textContent = 'Welcome, ' + localStorage.getItem('name');
        personalizedParagraph.textContent = 'This page is for you, ' + localStorage.getItem('name') + '! ;) ';
    }
    // A general view is shown otherwise.
    else
    {
        h1.textContent = 'Welcome';
        personalizedParagraph.textContent = 'This page is public!';
    }
}

// The nameDisplayCheck() function runs every time the page is loaded.
// Otherwise the personalized or general view isn't loaded across page reloads.
document.body.onload = nameDisplayCheck;