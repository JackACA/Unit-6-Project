$(".button").click(function(){
     var First = $(".q1").val();
     var Sport = $(".q2").val();
     var Value = parseInt($(".q3").val());
     var totalValue = (2050-2019)*365*Value;
     var outPut = First + " " + "played" + " " + Sport + " " + totalValue + " " + "hours" + " " + "by 2050";
    $(".results").text(outPut); 
    console.log(First);
    console.log(Sport);
    console.log(totalValue);
    console.log(outPut);
});
