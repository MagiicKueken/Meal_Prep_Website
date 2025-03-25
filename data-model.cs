using System;
using System.Collections.Generic;

public class Wochenplan
{
    public List<Wochentag> Wochentage { get; set; }
}

public class Wochentag
{
    public string Tag { get; set; }
    public List<Mahlzeit> Mahlzeiten { get; set; }
    public Nährwerte Nährstoffübersicht { get; set; }
}

public class Mahlzeit
{
    public string Name { get; set; }
    public string Gericht { get; set; }
    public Dictionary<string, string> Zutaten { get; set; }
    public List<string> Zubereitung { get; set; }
    public Nährwerte Nährwerte { get; set; }
}

public class Nährwerte
{
    public int Kcal { get; set; }
    public int Protein { get; set; }
    public int KH { get; set; }
    public int Fett { get; set; }
}