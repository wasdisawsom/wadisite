try {
    document.addEventListener("DOMContentLoaded", async function() {
        const headerElement = document.createElement("header");

        headerElement.innerHTML = `
        <li class="home"><a href="/"><img src="/images/wad.jpg" alt="" href="/"><p>Home</p></a></li>
        <li class="apps-dropdown">
            <p class="dropdownbutton">Apps</p>
            <div class="dropdowncontents">
                <a href="/wawa">wawa encoder</a>
                <a href="#">placeholder lmao</a>
            </div>
        </li>
        `;

        const styleLink = document.createElement("link");

        styleLink.id = "headerStyles"
        styleLink.rel = "stylesheet";
        styleLink.href = "/header/css/header.css";

        document.body.insertBefore(headerElement, document.body.children[0]);
        document.head.appendChild(styleLink)

    })
} catch (error) {
    console.error("Error occured somewhere, please yell at wadi on discord to fix it\nError: \n" + error);
}