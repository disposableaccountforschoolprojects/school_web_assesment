let headerContent = `
<header class="header_bar">
  <div class="flex">
    <a href="index.html">
      <img class="logo small" src="images/Website-logo.svg" alt = "logo">
    </a>

    <a href="index.html">
    <h2 id = "header_name">ADEN LEE</h2>
    </a>
  </div>

  <nav class="navi">

    <a href="other-projects.html">
      Other projects
    </a>

    <a href="future-projects.html">
      Future projects
    </a>

    <a href="about-me.html">
      About Me  
    </a>
  </nav>
</header>
`;
document
  .querySelector("#header_con")
  .insertAdjacentHTML("beforeend", headerContent);



onscroll = (event) => {
  var header_bar = document.querySelector('.header_bar');
  if (window.scrollY === 0) {
    // header_bar.style.opacity = "0";
    
    header_bar.classList.remove('header_con_down');
  } else {
    // header_bar.style.opacity = "1";
    header_bar.classList.add('header_con_down');
  }
}