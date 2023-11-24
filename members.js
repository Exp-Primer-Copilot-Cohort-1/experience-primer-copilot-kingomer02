function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    var memberSkills = memberValue.split(",");
    var skillsList = "";
    for (var i = 0; i < memberSkills.length; i++) {
        skillsList += "<li>" + memberSkills[i] + "</li>";
    }
    skills.innerHTML = "<h3>" + memberName + "</h3><ul>" + skillsList + "</ul>";
}
