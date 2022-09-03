const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const de_range = getComputedStyle(e.target).getPropertyValue("width");
  const de_label = getComputedStyle(label).getPropertyValue("width");

  const fi_range = +de_range.substring(0, de_range.length - 2);
  const fi_label = +de_label.substring(0, de_label.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (fi_range / max) - fi_label / 2 + scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
  label.innerText = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
