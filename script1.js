var modal = document.getElementById('myModal');
var btn = document.getElementById('openFormButton');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};






var form = document.getElementById('myForm');





    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var emailError = document.getElementById('emailError');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Validation logic
      if (usernameInput.value === '') {
        usernameError.textContent = 'Username is required';
      } else {
        usernameError.textContent = '';
      }

     var passwordValue = passwordInput.value;
     if(passwordValue === ''){
        passwordError.textContent = 'Password is required';
     }else if(passwordValue.length < 8){
        passwordError.textContent = 'The length of the password should be more than 8 characters!';
     }else if(!/[A-Z]/.test(passwordValue)){
        passwordError.textContent = 'The password should have atleast 1 Uppercase letter';
     }else if(!/[a-z]/.test(passwordValue)){
        passwordError.textContent = 'The password should have atleast 1 Lowercase charcater';
     }else if(!/[!@#$%^&*-=+_/?><]/.test(passwordValue)){
        passwordError.textContent = 'The password should have atleast 1 special character';
     }else{
        passwordError.textContent = 'Thank you for connecting with us!';
     }
    });