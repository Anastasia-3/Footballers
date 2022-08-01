function GetChoice() {
    let choice = document.getElementById('season').value;
    if (choice == 1) {
        // console.log('Ничего не выбрано');
    } else if (choice == 2) {
       document.getElementById('season2').display ="flex";
        // console.log('Сезон 2010/2011');
    } else {
        document.getElementById('season3').display ="flex";
    }
}

// function GetSeason() {
//
// }