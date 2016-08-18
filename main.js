console.log("hello world!");

document.addEventListener('DOMContentLoaded', function() {
  function setInputAsTitle () {
    var title = document.getElementById("title");
    var input = document.getElementsByTagName("input")[0];
    title.textContent = input.value;
  }

  document.getElementById("set-title").addEventListener("click", function() {
    console.log("set title button clicked");
    setInputAsTitle();
  });
});
