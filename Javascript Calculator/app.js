document.addEventListener("DOMContentLoaded", () => {
    const $display = document.querySelector("#display");
    const $buttons = document.querySelectorAll(".num");
    const $resultBtn = document.querySelector(".result-btn");
    const $clearBtn = document.querySelector(".clear-btn");

    $buttons.forEach(($button) => {
        $button.addEventListener("click", (e) => {
            $display.value += e.target.dataset.num;
        });
    });

    $clearBtn.addEventListener("click", (e) => {
        $display.value = "";
    });

    $resultBtn.addEventListener("click", (e) => {
        if (display.value !== "") {
        const result = eval($display.value);
        $display.value = result;
        }
    });

});
