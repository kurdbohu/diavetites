var Diasor_Cim =
{
    uj_diasor : function(cim)
    {
        var diak = 
        [
            {   // 1 dia objektumokkal
                kijelolve  : false,
                csoport    : "",
                objektumok :
                [
                    {   // 1 objektum
                        "tipus"      : "szovegdoboz",
                        "poz_x"      : 0,           // %
                        "poz_y"      : 0,           // %
                        "szelesseg"  : 100,         // %
                        "magassag"   : 100,         // %
                        "igazitas_x" : "kozepre",
                        "igazitas_y" : "kozepre",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : cim,
                                "betumeret" : 44,       // pt
                                "betutipus" : "Gill Sans MT",
                            }
                        ]
                    }
                ]
            }
        ];
        
        if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
        {
            diak = [];
        }
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id, cim, kivalasztva)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' "
              + (kivalasztva == true ? "checked='checked'" : "")
              + "     ><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "</td>\n"
              + " <td><button onclick=\"diasor_bovitese(Diasor_Cim.uj_diasor('" + cim + "'));\">&rarr;</button></td>\n"
              + "</tr>\n";
        
        return(t);
    },
};
