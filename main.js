const BTN = document.querySelector('button');
const H1 = document.querySelector('h1');

const kim = function () {
    console.log(2);
}

const WN = function () {
    H1.innerHTML = '하이루';
}

const HAHA = () => H1.innerHTML = '하이 화살표함수';

const S = function () {
    this.classList.toggle('on');
    console.log(this);
}

const AS = e => {
    //this.classList.toggle('on');
    console.log(this, e, e.target);
}
//화살표함수에서는 this가 없다. 콘솔 실행시 window 옵션 뜸

BTN.addEventListener('click', AS);

function lee() {
    console.log(1);
}



// lee();