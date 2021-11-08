document.addEventListener("DOMContentLoaded" , () => {
    const $celsius = document.querySelector("#celsius");
    const $fahrenheit = document.querySelector("#fahrenheit");
    
    $celsius.addEventListener("input", (e) => {
        const fahrenheit = parseFloat(e.target.value) * 9/5 + 32 || 0;
        $fahrenheit.value = fahrenheit;
    });

    $fahrenheit.addEventListener("input" , (e) => {
        const celsius = (parseFloat(e.target.value) -32) * (5/9) || 0;
        $celsius.value = celsius;
    });
});