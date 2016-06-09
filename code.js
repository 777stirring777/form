// var count = 0; // To count blank fields.
// function validation(event) {
// var radio_check = document.getElementsByName('gender'); // Fetching radio button by name.
// var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
// var text_area = document.getElementsByTagName('textarea');
// // Validating radio button.
// if (radio_check[0].checked == false && radio_check[1].checked == false) {
// var y = 0;
// } else {
// var y = 1;
// }
// // For loop to count blank inputs.
// for (var i = input_field.length; i > count; i--) {
// if (input_field[i - 1].value == '' || text_area.value == '') {
// count = count + 1;
// } else {
// count = 0;
// }
// }
// if (count != 0 || y == 0) {
// alert("*All Fields are mandatory*"); // Notifying validation
// event.preventDefault();
// } else {
// return true;
// }
// }

 $(function(){
  $('form input, form textarea').on('keydown', function(){
    $(this).parent().removeClass('error-required');
    $(this).parent().removeClass('error-invalid');
  });

  $('form input[type=button]').on('click', function(){
    var nameElm = $('.name'); // кусок html - div
    var name = nameElm.find('input').val(); // строка
    nameElm.removeClass('error-required');
    nameElm.removeClass('error-min');
    if(!name){
      nameElm.addClass('error-required');
    }else if(name.length < 2){ // значение инпута name не менее 2 символов
      nameElm.addClass('error-min');
    }

    var emailElm = $('.email');
    var email = emailElm.find('input').val();
    emailElm.removeClass('error-required');
    emailElm.removeClass('error-invalid');
    if(!email){
      emailElm.addClass('error-required');
    }else if(!validateEmail(email)){
      emailElm.addClass('error-invalid');
    }

    var messageElm = $('.message'); // кусок html - div
    var message = messageElm.find('input').val(); // строка
    messageElm.removeClass('error-required');
    messageElm.removeClass('error-min');
    if(!message){
      messageElm.addClass('error-required');
    }else if(message.length < 10){ // значение инпута name не менее 10 символов
      nameElm.addClass('error-min');
    }

    var genderElm = $('.gender');
    var gender = genderElm.find('input:checked').val();
    genderElm.removeClass('error-required');
    if(!gender){
      genderElm.addClass('error-required');
    }

    var boxElm = $('.box');
    var box = boxElm.find('input:checked').val();
    boxElm.removeClass('error-required');
    if(!box){
      boxElm.addClass('error-required');
    }

    var phoneElm = $('.phone'); // кусок html - div
    var phone = phoneElm.find('input').val(); // строка
    phoneElm.removeClass('error-required');
    phoneElm.removeClass('error-invalid');
    if(!phone){
      phoneElm.addClass('error-required');
    }else if(isNaN(phone)){ 
        phoneElm.addClass('error-invalid');
    }
	});   
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}