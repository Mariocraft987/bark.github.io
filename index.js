//Some basic scripts made from Js to work the website, and make it interactive.

function whatsNew() {
    var News;
    News = '<h2>Whats New?</h2><p>The bark editor is being created in.</p>';
    document.getElementById("boxChanger").innerHTML = News;
}

function recentCom() {
    var Commits;
    Commits = '<h2>Recent Commits</h2><p id="latest">Loading...</p>';
    document.getElementById("boxChanger").innerHTML = Commits;
}

function randomTxt() {
    //geeksforgeeks.org for the random text generator.
    var wrd;
    let arr = ["Bark! woof!", "Bark is a mod of scratch with new extensions",
    "Scratch dog 🐶", "Bark is being created, so stay patient!!", "Note: Bark does not support accounts yet", 
    "Funfact: Dogs have insane hearing and smelling.", "We need a scratch dog!", "Who not create a project??", "A special version is here somewere..",
    "Bark is hosted with github."];

    wrd = (arr[(Math.floor(Math.random() * arr.length))]);
    document.getElementById("randomWord").innerHTML = wrd;
}
