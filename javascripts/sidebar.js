//Sidebar

let styleSidenav = document.getElementById("sidenav").style;
let styleSection = document.getElementById("section").style;
let styleHeader = document.getElementById("date-container").style;
let styleImage = document.getElementById("img-magiic-chef").style;

function openfunction() {

    if (window.matchMedia("(max-width:400px)").matches) {        //Phone Resolution

        styleSidenav.width = "125px";
        styleSection.marginLeft = "130px";

        styleHeader.fontSize = "80%";
        styleHeader.marginLeft = "130px";
        styleHeader.transitionDuration = "1s"
        styleHeader.transitionDelay = "0.2s";

        styleImage.right = "25px";
        styleImage.maxWidth = "100px";
        styleImage.transitionDuration = "1s";
    }
    else {
        styleSidenav.width = "200px";
        styleSection.marginLeft = "250px";
    }
    styleSidenav.transition = "width 0.8s";
}

function closefunction() {

    if (window.matchMedia("(max-width:400px)").matches) {        //Phone Resolution

        styleSidenav.width = "0px";
        styleSection.marginLeft = "30px";
        styleHeader.fontSize = "100%";
        styleHeader.marginLeft = "70px";
        styleImage.maxWidth = "120px";
        styleImage.right = "-5px";
    }
    else {
        styleSidenav.width = "0px";
        styleSection.style.marginLeft = "130px";
    }
}

function selectDay(day) {
    try {
        currentDayOfWeek = day;
        displayMeal(data.Dates[day], currentTimeOfDay);
    }
    catch (ex) {

    }

    for (let i = 0; i < 7; i++) {
        if (i == day) {
            let element = document.getElementById("container-" + day);
            element.style.display = "block";
        }
        else {
            document.getElementById("container-" + i).style.display = "none";
        }
    }
    resetPortion();
}

function selectMeal(meal) {
    currentTimeOfDay = meal;
    resetPortion();
    displayMeal(data.Dates[currentDayOfWeek], currentTimeOfDay)
}