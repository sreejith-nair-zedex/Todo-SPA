// $(document).ready(function () {
//     // console.log("Working");

//     // If user clicks login button
//     $("#login-btn").on("click",function (e) {  
//         e.preventDefault();
//         // console.log("Login Button Clicked");
//         if ($("#user-login")[0].checkValidity()) {
//           // console.log($("#user-login").serialize());
//             $.ajax({
//                 type: "POST",
//                 url: "Controller/authentication.handler.php",
//                 data: $("#user-login").serialize()+"&action=login",
//                 success: function (response) {
//                     if (response) {
//                         $("#user-login").hide();
//                     }
//                 }
//             });
//         }
//     });

// });