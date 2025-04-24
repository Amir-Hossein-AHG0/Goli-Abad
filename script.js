document.addEventListener("DOMContentLoaded", function () {
    const typingEffect = document.querySelector(".typing-effect");
    const text = typingEffect.innerText;
    let index = 0;

    typingEffect.innerText = "";
    function typeWriter() {
        if (index < text.length) {
            typingEffect.innerText += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
