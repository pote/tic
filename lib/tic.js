var Tic = function Tic(presenter_id, content_id) {
  this.presenter = document.getElementById(presenter_id);
  this.content = document.getElementById(content_id);

  this.BONUS_SECONDS_PER_IMAGE_COUNT = {
    0 : 0,
    1 : 9,
    2 : 17,
    3 : 24,
    4 : 30,
    5 : 35,
    6 : 39,
    7 : 42,
    8 : 44,
    9 : 45
  };
};

Tic.prototype = {
  constructor: Tic,

  estimate: function() {
    let text_nodes = [].slice.call(this.content.querySelectorAll("h1,h2,h3,h4,h5,p"));

    let text_reading_time = text_nodes.map(function(node) {
      return (node.textContent.split(" ").length / 275) // Estimating 275 words per minute.
    }).reduce(function(total, time) {
      return total + time;
    });

    let image_count = this.content.querySelectorAll("img").length;

    let image_time =  (
      (image_count * 3)
      + (this.BONUS_SECONDS_PER_IMAGE_COUNT[image_count] || 45)
    ) / 60;

    this.presenter.innerHTML = Math.round(text_reading_time + image_time);
  },
};

