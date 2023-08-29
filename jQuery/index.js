//alert("Working")

// $(document).ready(function(){      //used to insure if our doc is ready then it'll incoporate
//     $("h1").css("color", "red");
// });


/***
 * Selecting element in jQuery
 * You can select one element or multiple it doesn't matter
 * $("button"); or $("h1"); 
 */


/***
 * Manipulating styles using jQuery
 * $("h1").css("color", "green");
 */
$("h1").addClass("big-title margin-50");


// Manipulating text with jQuery
$("button").text("Don't click me");
$("button").html("<en>Heyyy <en>");

// Manipulating Attributes with jQuery
console.log($("img").attr("src"))
$("a").attr("href", "https://www.yahoo.com");

// Adding event listener to jQuery
$("h1").click(function(){
    $("h1").css("color", "purple")
})

  //using javascript
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }

    //using jQuery
$("button").click(function() {
    $("h1").css("color", "Red");
})

  // on keypress
//  $("document").keypress(function(event) {
//     console.log(event.key);
//  }); 

$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
})

//Adding and removing elements -> Do have a look at syntax of below code 
// $("h1").before(<button>New</button>);
// $("h1").after(Heyyaaa);
// $("h1").prepend(content); 
// $("h1").append(content);