var disqus_shortname = "whitepaper-ia";
var disqus_config = function () {
    this.page.url = "https://whitepaper-ia.readthedocs.io/it/latest/index.html";
    this.page.identifier = "whitepaper-ia-index";
    this.page.title = "White paper IA";
};

// Loads the Disqus JS file that will create the comment form and threads.
var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;
dsq.src = "https://" + disqus_shortname + ".disqus.com/embed.js"; // Found in disqus.js script
$("head").append(dsq);

// Called in each location you want to show the thread.

// Disqus searches for 'disqus-thread' elements and uses the first one it finds so to
// overcome this, the function will clear any previous comment threads (by finding 'comments-load' elements)
function loadDisqus(element, identifier, title) {
  // Including the hashbang ('/#!') is important.
  var url = window.location.href + "/#!" + identifier;

  if (window.DISQUS) {
    $(".disqus-comments").empty();
    $(element + "-hide").show();
    $(element + "-show").hide();

    $(element).append('<div class="disqus-thread" id="disqus_thread"></div>');

    /** if Disqus exists, call it's reset method with new parameters **/
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = identifier;
        this.page.url = url;
        this.page.title = title;
      }
    });
  }
};

function hideDisqus(element) {
  $(".disqus-comments").empty();
  $(element + "-hide").hide();
  $(element + "-show").show();
}
