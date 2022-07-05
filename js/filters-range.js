const filtersRange = document.querySelector('.filters__range');

noUiSlider.create(filtersRange, {
  start: [55, 155],
  step: 5,
  range: {
    'min': 0,
    'max': 200
  }
});

console.log(filtersRange)
