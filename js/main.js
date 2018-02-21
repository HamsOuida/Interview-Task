
// popover // 
$(document).ready(function() {

  $('[data-toggle="popover"]').popover({
    html: true,
    placement: 'top',
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

      var modal = document.getElementById('popup');
      var newImage = (this.getAttribute('src'));
    
      var modalImg = document.getElementById('newimg');
      
          modal.style.display = "block";
          modalImg.src = newImage;

     var span = document.getElementsByClassName("close")[0];
     span.onclick = function() { 
    modal.style.display = "none";
}
})
  }
  (i))
}


