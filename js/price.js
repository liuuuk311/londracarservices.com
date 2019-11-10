$(document).ready(function () {

    $("#price-btn").click(function () {
        let prices = {
            Stansted: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215],
            Gatwick: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215],
            Heathrow: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215],
            Luton: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215],
            London_City: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215],
            Southend: [80, 85, 90, 95, 100, 180, 185, 190, 195, 200, 205, 210, 215]
        }
        var airport = $("#airport option:selected").text();
        airport_wrk = airport.replace(' ', '_');

        var passeggieri = $("#passeggieri").val();
        console.log(passeggieri);
        if (airport_wrk in prices) {
            console.log('if');
            if (passeggieri > 0 && passeggieri < 17) {
                var price = prices[airport_wrk][passeggieri - 1];
                $("#show-price").empty();
                if (passeggieri == 1){
                    $("#show-price").html("La tariffa da " + airport + " per " + passeggieri + " passeggiero è <b>£" + price + "</b>");
                }
                else{
                    $("#show-price").html("La tariffa da " + airport + " per " + passeggieri + " passeggieri è <b>£" + price + "</b>");
                }
               
            }
            else if (passeggieri > 16) {
                $("#show-price").empty();
                $("#show-price").html("Per un preventivo con " + passeggieri + " passeggieri, contattare info@londracarservices.com");
            }
            else {
                $("#show-price").empty();
                $("#show-price").html("Numero di passeggieri non valido");
            }
        }
    });
})
