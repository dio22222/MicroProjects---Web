document.addEventListener("DOMContentLoaded", () => {
    const $tweet = document.querySelector("#tweet");
    const $remainingChars = document.querySelector("#remaining-chars");
    const $errorMsg = document.querySelector(".text-danger");
    const $extraChars = document.querySelector("#extraChars");
    const $plural = document.querySelector("#plural");

    const MAX_ALLOWED_CHARS = 250;
    $tweet.addEventListener("input", (e) => {
        const remainingChars = MAX_ALLOWED_CHARS - e.target.value.length;
        const extraChars = e.target.value.length - MAX_ALLOWED_CHARS;
        if (remainingChars >= 0) {
            $remainingChars.innerHTML = remainingChars;
            $tweet.classList.remove("is-invalid");
            $errorMsg.classList.add("d-none");
        }
        else {
            $tweet.classList.add("is-invalid");
            $errorMsg.classList.remove("d-none");
            $extraChars.innerHTML = extraChars;
            if (extraChars > 1) {
                $plural.innerHTML = "s";
            }
            else {
                $plural.innerHTML = "";
            }
        }
    });


    $remainingChars.innerHTML = MAX_ALLOWED_CHARS;
});