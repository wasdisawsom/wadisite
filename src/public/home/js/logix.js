try {
    document.addEventListener("DOMContentLoaded", async function() {
        const testElement = document.createElement("div");

        testElement.id = "test"

        testElement.innerHTML = `
        <p>Test0</p>
        <p>Test1</p>
        <img src="/images/wad.jpg" alt="wadiImage">
        `

        const content = document.getElementById("content");

        content.insertBefore(testElement, content.children[0])
    })
} catch (error) {
    console.error("Error occured somewhere, please yell at wadi on discord to fix it\nError: \n" + error);
}