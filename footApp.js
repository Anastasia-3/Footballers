function GetChoice() {
    let choice = document.getElementById('season').value;
    if (choice == 1) {
        document.getElementsByClassName('season2')[0].style.display ="none";
        document.getElementsByClassName('season3')[0].style.display ="none";
        // console.log('Ничего не выбрано');
    } else if (choice == 2) {
        document.getElementsByClassName('season2')[0].style.display ="flex";
        document.getElementsByClassName('season3')[0].style.display ="none";
        // document.getElementById('season2').display ="flex";
        // console.log('Сезон 2010/2011');
    } else {
        document.getElementsByClassName('season3')[0].style.display ="flex";
        document.getElementsByClassName('season2')[0].style.display ="none";

    }
}
