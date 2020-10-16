$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            uname:{
            required:true,
            minlength:4
                },
            pword:{
                required:true,
                minlength:6,
                maxlength:10
            }

            }
        
    })
        
})
