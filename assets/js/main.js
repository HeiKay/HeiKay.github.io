$(document).ready(function() {
  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function(e) {
    e.preventDefault()
    $('.flex-container').toggleClass('active')
  })

  // Search Settings
  $('.search-icon').on('click', function(e) {
    e.preventDefault()
    $('.search-box').toggleClass('search-active')

    if ($('.search-box').hasClass('search-active')) {
      $('.search-icon-close').on('click', function(e) {
        e.preventDefault()
        $('.search-box').removeClass('search-active')
      })
    }
  })

  $.ajax({
    type: 'GET',
    url:
      'https://api.github.com/repos/HeiKay/HeiKay.github.io/issues/1/comments',
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        $('.issues-box').append(`<div><div>`)
      }
    }
  })
})
