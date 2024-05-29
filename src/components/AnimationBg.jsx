import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
// import data from '../util/data.json' 
const colors = ["blue", "pink", "green", "purple", "orange"];

const reminders = [
    "Don't forget - dentist at 2pm!",
    "Call Mom - birthday wishes!",
    "Pick up milk & bread on way home.",
    "Reply to Sarah's email.",
    "Water the plants!",
    "Take out the trash tonight.",
    "Research weekend trip ideas.",
    "Finish that report (due tomorrow!).",
    "Practice for presentation.",
    "Pack gym clothes for tomorrow.",
    "You've got this!",
    "Be kind to yourself today.",
    "One step at a time.",
    "Focus on the good things. ✨",
    "Deep breaths. Inhale peace, exhale stress.",
    "Smile! It's contagious.",
    "Make today amazing!",
    "Believe in your dreams.",
    "Spread sunshine wherever you go. ☀️",
    "You are worthy.",
    "Coffee first, talk later. ☕️",
    "Warning: May nap later.",
    "Brain = on vacation. ️",
    "Need more sleep.",
    "Adulting is hard. Send wine.",
    "Running on fumes (and caffeine).",
    "Hibernation mode: activated.",
    "Did I leave the oven on?",
    "Please don't make me talk before coffee.",
    "Sending hugs (or high fives, whichever you prefer!).",
    "Eggs, milk, bread (the essentials).",
    "Fruits & veggies for healthy week.",
    "Cat food (don't forget the kitty!).",
    "Birthday card for John.",
    "Lightbulbs - they're all out again!",
    "Need new running shoes.",
    "Batteries (for the millionth time).",
    "Gift for teacher appreciation week.",
    "Pick up dry cleaning.",
    "Dog treats (Fido needs spoiling!).",
    "Meeting in conference room at 10am.",
    "Deadline for project: Friday!",
    "School play tonight at 7pm.",
    "Dinner with friends on Saturday.",
    "Carpool Sarah on Wednesday.",
    "Doctor's appointment: next Tuesday.",
    "Book club meeting on Thursday.",
    "Password: (write it down securely)",
    "Remember - locked door code is 1234.",
    "Don't double book appointments! ️",
];

const distinctIndexGenerator = () => {
    const numbersSet = new Set();
    while (numbersSet.size < 8) {
        numbersSet.add(Math.floor(Math.random() * reminders.length));
    }
    return Array.from(numbersSet);
};

export default function AnimationBg() {
    useEffect(() => {
        
        const container = document.querySelector(".anim-container");
        const selectedRemindersIndexes = distinctIndexGenerator();
        for (let i = 0; i < 8; i++) {
            const blocks = document.createElement("div");
            // blocks.textContent = `${i}`;
            const text = document.createElement("p");
            text.classList.add("sticky-text");
            const tape = document.createElement("div");
            tape.classList.add("tape-section");
            // text.textContent =
            //     "Roses are red; violets blue; css go bbbbrrrbbbbrrr";
            text.textContent = reminders[selectedRemindersIndexes[i]];
            // text.textContent = reminders[Math.floor(Math.random() * reminders.length)]
            // console.log(reminders[Math.floor(Math.random() * reminders.length)])
            blocks.classList.add("block");
            blocks.classList.add(
                colors[Math.floor(Math.random() * colors.length)]
            );

            blocks.appendChild(tape);
            blocks.appendChild(text);
            container.appendChild(blocks);
        }

        function animateBlock() {
            anime({
                targets: ".block",
                translateX: function () {
                    const xCoordinate = anime.random(
                        (0.65 * innerWidth) / 2,
                        (0.9 * innerWidth) / 2
                    );
                    const sign = Math.floor(Math.random() * 2);
                    const newTranslateX = sign ? xCoordinate : -1 * xCoordinate;
                    return newTranslateX;
                    // return anime.random(-innerWidth/2,innerWidth/2)*0.6
                },
                translateY: function () {
                    return (
                        anime.random(-innerHeight / 2, innerHeight / 2) * 0.8
                    );
                },
                scale: function () {
                    return anime.random(1, 1.2);
                },
                easing: "spring(1, 40, 10, 0)",
                // easing: 'cubicBezier(.5, .05, .1, .3)',
                // easing: 'linear',
                duration: 3000,
                delay: 1000,
                // complete: animateBlock, //this makes the background to continue the animations
            });
        }
        animateBlock();
    }, []);

    return (
        <div className="animation-bg" id="animation-bg">
            <div className="anim-container">
                <h2 className="center-title"></h2>
            </div>
        </div>
    );
}
