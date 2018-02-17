let Tic = function(content) {
  let words_per_minute =  180;

  let bonus_per_image_count = {
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

  let text_nodes = [].slice.call(content.querySelectorAll("h1,h2,h3,h4,h5,p"));

  let text_reading_minutes = text_nodes.map(function(node) {
    return (node.textContent.split(" ").length / words_per_minute)
  }).reduce(function(total, time) {
    return total + time;
  });

  let image_count = content.querySelectorAll("img").length;
  let image_minutes = (image_count * 3) / 60;
  let bonus_image_seconds = bonus_per_image_count[image_count];

  let total = text_reading_minutes + image_minutes;
  if (bonus_image_seconds != undefined) {
    total = total + (bonus_image_seconds / 60);
  }

  if (total < 1) {
    return 1
  } else {
    return Math.round(total);
  }
};
