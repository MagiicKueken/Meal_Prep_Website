using System;
using System.Collections.Generic;

public class WochenPlan
{
    public List<Wochentag> Wochentage { get; set; }
}

public class Wochentag
{
    public string Tag { get; set; }
    public List<Mahlzeit> Mahlzeiten { get; set; }
    public Nährwerte Nährwerte { get; set; }
}

public class Mahlzeit
{
    public string Name { get; set; }
    public string Gericht { get; set; }
    public string[][] Zutaten { get; set; }  // Two-dimensional array for Zutaten
    public string[][] Zubereitung { get; set; }  // Two-dimensional array for Zubereitung
    public Nährwerte Nährwerte { get; set; }
}

public class Nährwerte
{
    public int Kcal { get; set; }
    public int Protein { get; set; }
    public int Kohlenhydrate { get; set; }
    public int Fett { get; set; }
}
