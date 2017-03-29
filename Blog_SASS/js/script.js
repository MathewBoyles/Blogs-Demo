$el = $('<div id="lightbox"></div>');
$el.append('<img src="img/close-icon.png" class="lightbox-close" />');
$el.append('<div class="lightbox-overlay"></div>');
$el.append('<div class="lightbox-content"></div>');
$el.find('.lightbox-content').append('<img src="img/placeholder.png" />');
$el.find('.lightbox-content').append('<span></span>');
$('body').append($el);
$el = false;

$('.container .blog > .blog-item > img').click(function(){
  $('#lightbox > .lightbox-content > span').text($(this).attr('title'));
  $('#lightbox > .lightbox-content > img').attr('src',$(this).attr('src'));
  $('#lightbox').fadeIn();
});
$('#lightbox > .lightbox-overlay, #lightbox > .lightbox-close').click(function(){$('#lightbox').fadeOut();});
