let currentDayOfWeek = 1;
let currentTimeOfDay = 2;
displayMeal(data.Dates[currentDayOfWeek], currentTimeOfDay);

//Function for the JSON inputfield and changing data
function openForm() {
  let jsonString = prompt("Enter new JSON data:");

  let jsonObject = JSON.parse(jsonString);
  data = jsonObject;
  displayMeal(data.Dates[0]);
}

function displayMeal(meal, timeOfDay) {
  //Header
  document.getElementById("weekday").innerHTML = meal.Tag;
  document.getElementById("meal-dateofDay").innerHTML = meal.Datum;

  //Time of day
  document.getElementById("meal-timeOfDay").innerHTML = meal.Mahlzeiten[timeOfDay].Name;

  //Recipe
  document.getElementById("meal-recipe-name").innerHTML = meal.Mahlzeiten[timeOfDay].Gericht;

  //Zutaten
  updateIngredients(meal.Mahlzeiten[timeOfDay].Zutaten);

  //Preperations (also loop)
  let preperation = meal.Mahlzeiten[timeOfDay].Zubereitung;
  let preperationsHtml = document.getElementById("meal-preperations");

  preperationsHtml.innerHTML = "Zubereitung: </br>";
  preperationsHtml.innerHTML += "<ol>";

  for (let i = 0; i < preperation.length; i++) {
    let currentStep = preperation[i];
    preperationsHtml.innerHTML += "<li type='1'>" + currentStep[1] + "</li></br>";
  }
  preperationsHtml.innerHTML += "</ol>";
}

let styleHeader = document.getElementById("date-container").style;
let styleImage = document.getElementById("img-magiic-chef").style;

//Sidebar
function openfunction() {

  if(window.matchMedia("(max-width:400px)").matches){
    document.getElementById("sidenav").style.width = "125px";
    document.getElementById("section").style.marginLeft = "130px";
    
    styleHeader.fontSize = "80%";
    styleHeader.marginLeft = "130px";
    styleHeader.transitionDuration = "1s"
    styleHeader.transitionDelay = "0.2s";
    styleImage.right = "25px";
    styleImage.maxWidth = "100px";
    styleImage.transitionDuration = "1s";
    
    
  }
  else{
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("section").style.marginLeft = "250px";
  }
  document.getElementById("sidenav").style.transition = "width 0.8s";
}

function closefunction() {

  if(window.matchMedia("(max-width:400px)").matches){

    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("section").style.marginLeft = "30px";
    styleHeader.fontSize = "100%";
    styleHeader.marginLeft = "70px";
    styleImage.maxWidth = "120px";
    styleImage.right = "-5px";
  }
  else{
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("section").style.marginLeft = "130px";
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

function calculatePortions() {
  let portion = document.getElementById("portionInput").value;
  let zutaten = data.Dates[currentDayOfWeek].Mahlzeiten[currentTimeOfDay].Zutaten;

  // Deep copy the zutaten array to prevent mutation
  let zutatenCopy = zutaten.map(z => ({
    ...z,
    Amount: z.Amount * portion
  }));

  updateIngredients(zutatenCopy);
}

function updateIngredients(ingredients) {
  //Ingredients aka zutaten
  let ingredientsHtml = document.getElementById("meal-ingredients");
  ingredientsHtml.innerHTML = "Zutaten: </br>";
  ingredientsHtml.innerHTML += "<ul>";

  //Loop over all the ingredients, and display them in a list-style fashion onto the webpage
  for (let i = 0; i < ingredients.length; i++) {
    let currentIngredient = ingredients[i];

    ingredientsHtml.innerHTML += "<li><span class='inline-block'>" + currentIngredient.Amount + " " + currentIngredient.Metric + "</span>" + "<span class='inline-block' style='width:100px;'>" + currentIngredient.Name + "</span>" + "</li>";
  }

  ingredientsHtml.innerHTML += "</ul> </br>"
}

function resetPortion(){
  portion = 1;
  document.getElementById("portionInput").value = 1;
}
