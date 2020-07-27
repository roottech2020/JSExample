let quotes = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
    }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
    }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
    }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
    }, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
    }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
    }, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
    }, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
    }, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
    }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
    }];

    var rand;  
    function setup(){
        createCanvas(windowWidth, windowHeight);
        background = (0,0,0);
        rand = random(quotes.length);

    }

   function draw(){
       fill(255,255,255);
       textSize(32);
       text(""+quotes[rand].quoteText, 1/8*width, 1/2*height);
   }
