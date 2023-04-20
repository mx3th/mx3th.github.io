function score() {
    var exp = "none";
    var style = "none";
    
    var character = "none";

    quiz = document.forms.quiz.elements;

    exp = quiz.exp.value;
    style = quiz.style.value;
    gender = quiz.gender.value;

    if (exp == "new" & style == "rounded" & gender == "male") {
        character = "Ryu";
    }

    if (exp == "modest" & style == "rounded" & gender == "male") {
        character = "Ken";
    }

    alert ("Your experience level is: " + exp + "\nYour playstyle is: " + style + "\nGender pref: " + gender + "\nYour character is: " + character)

}