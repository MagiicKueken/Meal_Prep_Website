var data = {
  "Wochentage": [
      {
          "Tag": "Montag",
          "Mahlzeiten": [
              {
                  "Name": "Frühstück",
                  "Gericht": "Overnight Oats mit Erdnussbutter & Beeren",
                  "Zutaten": [
                      [
                          "Haferflocken",
                          "50g"
                      ],
                      [
                          "Milch",
                          "200 ml"
                      ],
                      [
                          "Erdnussbutter",
                          "1 TL"
                      ],
                      [
                          "Beeren",
                          "50 g"
                      ],
                      [
                          "Honig",
                          "1 TL"
                      ]
                  ],
                  "Zubereitung": [
                      [
                          1,
                          "Bring water to boil"
                      ],
                      [
                          2,
                          "Put noodles in"
                      ]
                  ],
                  "Nährwerte": {
                      "Kcal": 450,
                      "Protein": 24,
                      "KH": 50,
                      "Fett": 15
                  }
              },
              {
                  "Name": "Abendessen",
                  "Gericht": "Hähnchenpfanne mit Brokkoli & Süßkartoffeln",
                  "Zutaten": {
                      "Hähnchenbrust": "300 g",
                      "Brokkoli": "300 g",
                      "Süßkartoffeln": "300 g",
                      "Olivenöl": "1 EL",
                      "Salz, Pfeffer": "nach Geschmack"
                  },
                  "Nährwerte": {
                      "Kcal": 520,
                      "Protein": 55,
                      "KH": 45,
                      "Fett": 12
                  }
              }
          ]
      }
  ]
}
  
let DayOfWeek = 0;
console.log(data);

document.getElementById("header").innerHTML = data.Wochentage[DayOfWeek].Tag;
document.getElementById("meal-left-timeOfDay").innerHTML = data.Wochentage[DayOfWeek].Mahlzeiten[0].Name;

document.getElementById("meal-left-recipe-name").innerHTML = data.Wochentage[DayOfWeek].Mahlzeiten[0].Gericht;

let zutaten = data.Wochentage[DayOfWeek].Mahlzeiten[0].Zutaten[0][1] + " " + data.Wochentage[DayOfWeek].Mahlzeiten[0].Zutaten[0][0]

document.getElementById("meal-left-ingredients").innerHTML = zutaten;

let zubereitung = data.Wochentage[DayOfWeek].Mahlzeiten[0].Zubereitung[0][0] + ". " + data.Wochentage[DayOfWeek].Mahlzeiten[0].Zubereitung[0][1]

document.getElementById("meal-left-preperations").innerHTML = zubereitung;


