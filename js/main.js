
// popover // 
$(document).ready(function() {

  $('[data-toggle="popover"]').popover({
    html: true,
    placement: 'auto',
    trigger: 'hover',
    content: function() {
      var url = $(this).data('content');
      return '<img src="' + url + '">'
    }
  });
});


/// popup ///
var getImages = document.getElementsByTagName('img');
for (var i = 0; i < getImages.length; i++) {
  (function(x) {  
    getImages[x].addEventListener('click', function() {

      var popup = document.getElementById('popup');
      var newImage = (this.getAttribute('src'));
    
      var popImg = document.getElementById('newimg');
      
          popup.style.display = "block";
          popImg.src = newImage;

     var span = document.getElementsByClassName("close")[0];
     span.onclick = function() { 
    popup.style.display = "none";
}
})
  }
  (i))
}


