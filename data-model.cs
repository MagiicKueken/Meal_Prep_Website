using System;
using System.Collections.Generic;

public class Root
{
    public List<DateEntry> Dates { get; set; }
}

public class DateEntry
{
    public string Datum { get; set; }
    public string Tag { get; set; }
    public List<Mahlzeit> Mahlzeiten { get; set; }
}

public class Mahlzeit
{
    public string Name { get; set; }
    public string Gericht { get; set; }
    public List<Zutaten> Zutaten { get; set; }
    public List<List<string>> Zubereitung { get; set; } //For example: [["1", "Den Backofen auf 200 °C (Ober-/Unterhitze) vorheizen."]]
    public Naehrwerte Nährwerte { get; set; }
}

public class Zutaten{
    public int Amount { get; set; }
    public string Metric { get; set; }
    public string Name { get; set; }
}   

public class Naehrwerte
{
    public int Kcal { get; set; }
    public int Protein { get; set; }
    public int Kohlenhydrate { get; set; }
    public int Fett { get; set; }
}

