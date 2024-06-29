function str_date_fin(){
    //Procedure
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month==1){
      month="January"
    }
    else if (month==2){
      month="February"
    }
    else if (month==3){
      month="March"
    }
    else if (month==4){
      month="April"
    }
    else if (month==5){
      month="May"
    }
    else if (month==6){
      month="June"
    }
    else if (month==7){
      month="July"
    }
    else if (month==8){
      month="August"
    }
    else if (month==9){
      month="September"
    }
    else if (month==10){
      month="October"
    }
    else if (month==11){
      month="November"
    }
    else if (month==12){
      month="December"
    }

    date_full=month + " $ " + day + " , " + year+ " $"
    document.getElementById("date_full").innerHTML=date_full
    
  }

          