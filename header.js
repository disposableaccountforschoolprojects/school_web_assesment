// The header html that is going to be enjected into the website
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

// selects the div and insets a the code in it
document
  .querySelector("#header_con")
  .insertAdjacentHTML("beforeend", headerContent);



// bar hider, hides the header bar when at the very top of the page 
// activates when the user scrolls
onscroll = (event) => {
  // selects the header via html class
  var header_bar = document.querySelector('.header_bar');
  
  // checks if the user is at the top of the page when scrolled.
  if (window.scrollY === 0) {

    // if it is then a class header_con_down will be removed to hide the header
    header_bar.classList.remove('header_con_down');
  } else {

    // if it is then a class header_con_down will be removed to show the header
    header_bar.classList.add('header_con_down');
  }
}