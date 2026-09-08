
var header_bar = document.getElementById('header_con');

let headerContent = `
<header>
  <div class="flex">
    <a href="index.html">
      <img class="logo small" src="images/Website-logo.svg" alt = "logo">
    </a>
    <h2 id = "header_name">ADEN LEE</h2>
  </div>

  <nav class="navi">

    <a href="https://example.com">
      Other projects
    </a>

    <a href="https://duckduckgo.com">
      Future projects
    </a>

    <a href="https://figma.com">
      About Me  
    </a>
  </nav>
</header>
`;
document
  .querySelector("#header_con")
  .insertAdjacentHTML("beforeend", headerContent);



onscroll = (event) => {
  if (window.scrollY === 0) {
    header_bar.style.display = "none";
  } else {
    header_bar.style.display = "block";
  }
}