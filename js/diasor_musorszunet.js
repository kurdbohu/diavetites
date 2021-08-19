var Diasor_Musorszunet =
{
    uj_diasor : function()
    {
        var diak =
        [
            {   // 1 dia objektumokkal
                kijelolve  : false,
                csoport    : "",
                objektumok :
                [
                    {   // 1 objektum
                        "tipus"     : "kep",
                        "kep"       : "kepek/kezdolap.png",
                        "poz_x"     : 0,            // %
                        "poz_y"     : 0,            // %
                        "szelesseg" : 100,          // %
                        "magassag"  : 100           // %
                    }
                ]
            }
        ];
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td>műsorszünet címlap</td>\n"
              + " <td><button onclick=\"dia_keszitese_specialisan('musorszunet');\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
