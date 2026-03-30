console.log("Hello from JavaScript!");

function isSafeUrl(url) {
    try {
        const parsed = new URL(url, window.location.href);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch (err) {
        return false;
    }
}

document.addEventListener("click", function (event) {
    const target = event.target.closest("a");
    if (target && target.href) {
        if (!isSafeUrl(target.href)) {
            event.preventDefault();
            alert("Tautan ini dianggap tidak aman dan diblokir.");
        }
    }
});