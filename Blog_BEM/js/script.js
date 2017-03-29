$el = $('<div id="lightbox"></div>');
$el.append('<img src="img/close-icon.png" class="lightbox__close" />');
$el.append('<div class="lightbox__overlay"></div>');
$el.append('<div class="lightbox__content"></div>');
$el.find('.lightbox__content').append('<img src="img/placeholder.png" class="lightbox__content__image" />');
$el.find('.lightbox__content').append('<span class="lightbox__content__caption"></span>');
$('body').append($el);
$el = false;

$('.container .blog > .blog__item > img').click(function(){
  $('#lightbox > .lightbox__content > span').text($(this).attr('title'));
  $('#lightbox > .lightbox__content > img').attr('src',$(this).attr('src'));
  $('#lightbox').fadeIn();
});
$('#lightbox > .lightbox__overlay, #lightbox > .lightbox__close').click(function(){$('#lightbox').fadeOut();});
