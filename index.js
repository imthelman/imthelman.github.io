var bar = document.getElementById("searchbar");
bar.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    search();
  }
});

function search() {
  var url = toString(
    "https://www.bing.com/search?q=" +
      toString(document.getElementById("searchbar").value)
  );
  window.location.replace(url);
}
