document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.getElementById("typing-text");

    if (typingElement) {

        const messages = [
            "> welcome to jkidblox.top",
            "> building digital things",
            "> visit games page",
            "> system online"
        ];

        let messageIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function type() {

            const currentMessage = messages[messageIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentMessage.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;

                if (characterIndex === currentMessage.length) {

                    deleting = true;

                    setTimeout(type, 2200);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentMessage.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;

                if (characterIndex === 0) {

                    deleting = false;

                    messageIndex =
                        (messageIndex + 1) % messages.length;

                }

            }

            const speed = deleting ? 35 : 65;

            setTimeout(type, speed);
        }


        type();
    }


    /* PAGE FADE */

    const links =
        document.querySelectorAll(
            'a[href$=".html"]'
        );


    links.forEach(link => {

        link.addEventListener("click", event => {

            const target =
                link.getAttribute("href");

            if (
                target &&
                !target.startsWith("#") &&
                !link.target
            ) {

                event.preventDefault();

                document.body.style.opacity = "0";

                setTimeout(() => {

                    window.location.href = target;

                }, 180);

            }

        });

    });


});
