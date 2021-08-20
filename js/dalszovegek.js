var dalszovegek = 
[
    {
        "cim"    : "Szentlélek jöjj",
        "tipus"  : "ifiének",
        "szoveg" :
        [
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj el élő vízforrás,"          ,
                "Jöjj, a szívünk Téged vár!"      ,
                "Jöjj, ki fényt adsz lelkünknek," ,
                "Jöjj, úgy vágyunk Rád!",
            ],
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj igazság forrása,"           ,
                "Jöjj, imádunk mindnyájan!"       ,
                "Jöjj, reményünk éleszd fel,"     ,
                "Jöjj kegyelmeddel!",
            ],
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj, a néped gyűjtsd egybe,"    ,
                "Jöjj, az alvót ébreszd fel!"     ,
                "Jöjj, a bűntől tisztíts meg,"    ,
                "Bátoríts minket!"
            ]
        ]
    },
    {
        "cim"    : "Urunk, add Lelkedet",
        "tipus"  : "dicséret",
        "szoveg" :
        [
            [
                "496."                         ,
                "Urunk add lelkedet,"          ,
                "Újítsd meg népedet."          ,
                "Lélek gyümölcse,"             ,
                "szívünket töltse"             ,
                "Láttassék bőviben életünkön!" ,
                "Szeretet, békesség,"          ,
                "Szent öröm, jóság,"           ,
                "Türelem, szelídség,"          ,
                "Hűség, józanság"              ,
                "Láttassék bőviben életünkön!"
            ]
        ]
    }
];

function dallista_betoltese()
{
    var t_ifi   = "<option value=''>-- ifiének --</option>";
    var t_dicsi = "<option value=''>-- dicséret --</option>";
    
    for(var i = 0, n = dalszovegek.length; i < n; i++)
    {
        var dal = dalszovegek[i];
        var div = "";
        switch (dal.tipus)
        {
            case "ifiének":
                div = "ifienek_valasztasa";
                t_ifi += "<option value='" + i + "'>" + dal.cim + "</option>\n";
                break;
            case "dicséret":
                div = "dicseret_valasztasa";
                t_dicsi += "<option value='" + i + "'>" + dal.cim + "</option>\n";
                break;
            default:
                console.log("ilyen típusú ének még nem volt: " + dal.tipus);
                break;
        }
    }
    
    $(".ifienek_valasztasa").html(t_ifi);
    $(".dicseret_valasztasa").html(t_dicsi);
}
