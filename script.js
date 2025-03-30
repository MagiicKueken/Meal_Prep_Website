var initialData = {
    "Wochentage": [
      {
        "Tag": "Dienstag",
        "Mahlzeiten": [
          {
            "Name": "Abendessen",
            "Gericht": "Rindersteak mit Ofengemüse",
            "Zutaten": [
              ["2", "Rindersteaks (je 150 g)"],
              ["300 g", "Gemüse (Paprika, Zucchini, Möhren)"],
              ["1 EL", "Olivenöl"],
              ["Salz", "Pfeffer"]
            ],
            "Zubereitung": [
              ["1", "Den Backofen auf 200 °C (Ober-/Unterhitze) vorheizen."],
              ["2", "Das Gemüse waschen, in mundgerechte Stücke schneiden und mit Olivenöl, Salz und Pfeffer vermengen."],
              ["3", "Das Gemüse auf einem Backblech verteilen und ca. 20 Minuten im Ofen garen."],
              ["4", "Währenddessen das Steak mit Salz und Pfeffer würzen."],
              ["5", "Eine Pfanne stark erhitzen und das Steak je nach gewünschtem Gargrad ca. 3 Minuten pro Seite braten."],
              ["6", "Das Steak mit dem Ofengemüse servieren."]
            ],
            "Nährwerte": {
              "Kcal": 600,
              "Protein": 65,
              "Kohlenhydrate": 35,
              "Fett": 20
            }
          }
        ],
        "Nährwerte": {
          "Kcal": 600,
          "Protein": 65,
          "Kohlenhydrate": 35,
          "Fett": 20
        }
      }
    ]
  }
   
  
  

displayMeal(initialData);


//Function for the JSON inputfield and changing data
function openForm(){
  let jsonString = prompt("Enter new JSON data:");
  
  let jsonObject = JSON.parse(jsonString);
  displayMeal(jsonObject);
}

function displayMeal(data){

let currentDayOfWeek = 0;
let currentMeals = 0;


//Header
document.getElementById("header").innerHTML = data.Wochentage[currentDayOfWeek].Tag;

//Button 

//Time of day
document.getElementById("meal-left-timeOfDay").innerHTML = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Name;

//Recipe
document.getElementById("meal-left-recipe-name").innerHTML = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Gericht;

//Ingredients aka zutaten

let ingredients = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zutaten;
let ingredientsHtml = document.getElementById("meal-left-ingredients");
ingredientsHtml.innerHTML = "Zutaten: </br>";
ingredientsHtml.innerHTML += "<ul>";

//Loop over all the ingredients, and display them in a list-style fashion onto the webpage
for (let i = 0; i < ingredients.length; i++){
  let currentIngredient = ingredients[i];

  ingredientsHtml.innerHTML += "<li>" + currentIngredient[0] + " " + currentIngredient[1] + "</li>";
}

ingredientsHtml.innerHTML += "</ul> </br></br>"

//Preperations (also loop)

let preperation = data.Wochentage[currentDayOfWeek].Mahlzeiten[currentMeals].Zubereitung;
let preperationsHtml = document.getElementById("meal-left-preperations");

preperationsHtml.innerHTML = "Zubereitung: </br>";
preperationsHtml.innerHTML += "<ol>";

for (let i = 0; i < preperation.length; i++){
  let currentStep = preperation [i];
  preperationsHtml.innerHTML += '<li type="1">' + currentStep[1] + "</li>";
}

preperationsHtml.innerHTML += "</ol>";
}