let switching = false;

function updateGallery() {
  $('.gallery__core img, .gallery__bg img').attr('src',galleryItems[0].url);
  $('.gallery__track').empty();
  $.each(galleryItems,function(index,item){
    $('.gallery__track').append('<div class="gallery__search"> <div class="gallery__track__item '+(index==0 ? 'active' : '')+'"><img src="'+item.thumb+'" data-full="'+item.url+'" alt=""> </div> <div ><label>'+ item.id.toString() +'</label></div> </div>');
  });
}

function getNewImages() {

}

$('.gallery__search input').on('keyup',debounce(() => getNewImages()));
$('.gallery__track').on('click','.gallery__track__item',function(){
  if (!switching) {
    switching = true;
    $(this).addClass('active').siblings().removeClass('active');
    // animate in new core image and background image
    const $oldBGImg = $('.gallery__bg img'); 
    const $oldImg = $('.gallery__core img');
    const newImg = $(this).find('img').data('full');
    const $newImg = $('<img class="slide-in" src="'+newImg+'">');
    const $newBGImg = $('<img class="fade-in" src="'+newImg+'">');
    $('.gallery__core').append($newImg);
    $('.gallery__bg').append($newBGImg);
    setTimeout(function(){
      $newImg.addClass('shift-up');
      $oldImg.addClass('shift-up');
      $oldBGImg.addClass('fade-out');
      $newBGImg.addClass('fading');
      setTimeout(function(){
        $('.gallery__core img').eq(0).remove();
        $('.gallery__bg img').eq(0).remove();
        $('.slide-in').removeClass('slide-in shift-up');
        $('.fade-in').removeClass('fade-in fading');
        switching = false;
      },400);
    },10);
  }
});



//need to see if we can just hit this link and pull out all the pictures programatically, that way if we want to add more it will do it automatically
//https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/

let galleryItems = [
  {
    "id": "Length Histogram",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/time%20histogram.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/time%20histogram.png"
  },
  {
    "id": "Top 50 Actors",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Actors.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Actors.png"
  },
  {
      "id": "Bottom 50 Actors",
      "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Actors.png",
      "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Actors.png"
  },
  {
    "id": "Top 50 Directors",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Directors.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Directors.png"
  },
  {
    "id": "Bottom 50 Directors",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Directors.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Directors.png"
  },
  {
    "id": "Rating Boxplots",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20distribution%20by%20Person.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20distribution%20by%20Person.png"
  },
  {
    "id": "Rating versus Length",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/rating%20v%20time%20facet.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/rating%20v%20time%20facet.png"
  },
  {
    "id": "Rating versus Release Date",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20trends%20over%20Release%20Dates.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20trends%20over%20Release%20Dates.png"
  },
  {
      "id": "Top 50 Actors - num movies",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Actors%20-%20num%20movies.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Actors%20-%20num%20movies.png"
  },
  {
      "id": "Bottom 50 Actors - num movies",
      "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Actors%20-%20num%20movies.png",
      "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Actors%20-%20num%20movies.png"
  },
  {
    "id": "Top 50 Directors - num movies",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Directors%20-%20num%20movies.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Top%2050%20Directors%20-%20num%20movies.png"
  },
  {
    "id": "Bottom 50 Directors - num movies",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Directors%20-%20num%20movies.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Bottom%2050%20Directors%20-%20num%20movies.png"
  },
  {
    "id": "Rating trends over date.added.to.sheet",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20trends%20over%20date.added.to.sheet.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/Rating%20trends%20over%20date.added.to.sheet.png"
  },
  {
    "id": "Rating versus Length (bad)",
    "url": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/rating%20v%20time.png",
    "thumb": "https://raw.githubusercontent.com/waldmannly/movie-ratings-analysis/main/rating%20v%20time.png"
  }
];

updateGallery(); // once on load

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}