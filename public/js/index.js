// FAQ Section for Visit Page

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


///////////////////////////////// CONNECT TO API  //////////////////////////////////////////

// $(document).ready(function(){
//   $.getJSON("https://rest-api-alexrich700.c9users.io/api/text")
//   .then(app);
//   function app(text){
//     console.log(text[0].text);
//   }
// })

// //displays text
// function addTexts(texts) {
//   //add texts to page here
//   texts.forEach(function(text){
//     addText(text);
//   });
// }

// //format text
// function addText(text){
//   var newText = $('<div class="sermon-text col-md-6">'+text.text +'</div><div class="sermon-text sermon-speaker col-md-6">' +text.name+'</div>');
//   newText.data('id', text._id);
//   $('.list').append(newText);
// }