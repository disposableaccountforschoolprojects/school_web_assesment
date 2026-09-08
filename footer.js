let footerContent = `
<footer>
    <div class="flex">
        <a href="index.html">
        <img class="logo" src="images/Website-logo.svg" alt = "logo">
        </a>
        
        <p id="footer_name">ADEN LEE</p>
    </div>
    
    <div class="flex">
        <nav>
            <h2>Contacts:</h2> <br>
            <a class="footer_links" href="mailto:email@proton.me">EMAIL: example@proton.me </a> <br>
            <p>ㅤ </p>
            <a class="footer_links">Business phone number: 123456789</a> <br>
            <p>ㅤ </p>
            <a class="footer_links" href="https://example.com">Privacy Policy</a> <br>
        </nav>
        
        <a href="https://example.com">Privacy Policy</a>
    </div>
</footer>
`;
document
  .querySelector("#footer_con")
  .insertAdjacentHTML("beforeend", footerContent);
