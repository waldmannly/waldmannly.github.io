/*
 * http://timpietrusky.com/star-wars-opening-crawl-from-1977
 * 
 * Thanks to Craig Buckler for his amazing article 
 * which helped me to create this remake of the Star Wars opening crawl. 
 * http://www.sitepoint.com/css3-starwars-scrolling-text/ 
 *
 * Sound copyright by The Walt Disney Company.
 * 
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 * 
 */
StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // Start the animation
    this.start = this.el.find('.start');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      //await new Promise(resolve => setTimeout(resolve, 15000));
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});