const quotes = [{
    quote: '“Do not spend time beating on a wall, hoping to transform it into a door.”',
    writer: '-Coco Chanel'
}, {
    quote: '"The role of genius is not to complicate the simple, but to simplify the complicated."',
    writer: '-Criss Jami'
}, {
    quote: '"A sigh is an amplifier for people who suffer in silence."',
    writer: '-Robert Orben'
}, {
    quote: '"A mistake cannot be repeated twice because the second time is not a mistake, it is a choice."',
    writer: '-Steven Denn'
}, {
    quote: '"Two things define you: your patience when you have nothing, your attitude when you have everything."',
    writer: '- George Bernard Shaw'
}, {
    quote: '"Genius is 1% inspiratio, 99% perspiration."',
    writer: '-Thomas Edison'
}, {
    quote: '"If you do not sacrifice for what you want, what you want becomes the sacrifice."',
    writer: '-Jay Shetty'
}, {
    quote: '"They say that nothing lasts forever, but they are just scared it will last longer than they can love it."',
    writer: '-Ocean Vuong'
}, {
    quote: '"When you are a kid, you do not realize that you are also watching your parents growing up."',
    writer: '-Unkown'
}, {
    quote: '“What you get by achieving your goals is not as important as what you become by achieving your goals.”',
    writer: '-Henry David Thoreau'
}, {
    quote: '“Do not live the same year 75 times and call it a life.”',
    writer: '-Robin Sharma'
}, {
    quote: '“You cannot save people, you can just love them.”',
    writer: '-Anaïs Nin'
}, {
    quote: '“There is no way to happiness. Happiness is the way.”',
    writer: '-Thich Nhat Hanh'
}, {
    quote: '“Holding onto anger is like drinking poison and expecting the other person to die.”',
    writer: '-Buddha'
}, {
    quote: '“Numbing the pain for a while will only make it worse when you finally feel it.”',
    writer: '-Albus Dumbledore'
}, {
    quote: '“If you want to live a happy life, tie it to a goal, not to people or objects.”',
    writer: '-Albert Einstein'
}, {
    quote: '“Sometimes you win, sometimes you learn.”',
    writer: '-John Maxwell'
}, {
    quote: '"Believe you can and you are halfway there."',
    writer: '-Theodore Roosevelt'
}, {
    quote: '"Build your own dreams, or someone else will hire you to build theirs."',
    writer: '-Farrah Gray'
}, {
    quote: '"Nothing lasts forever. Not even your troubles."',
    writer: '-Arnold H. Glasgow'
}, {
    quote: 'Innovation distinguishes between a leader and a follower.',
    writer: '-Steve Jobs'
}, {
    quote: '"Age is something that does not matter, unless you are a cheese."',
    writer: '-Billie Burke'
}, {
    quote: '"Someone is sitting in the shade today because someone planted a tree a long time ago."',
    writer: '-Warren Buffett'
}, {
    quote: '"The most difficult thing is the decision to act, the rest is merely tenacity."',
    writer: '-Amelia Earhart'
}, {
    quote: '"Life is not about finding yourself. Life is about creating yourself."',
    writer: '-George Bernard Shaw'
},]

let btn = document.querySelector("#btn-quote");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})