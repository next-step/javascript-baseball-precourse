let value = [];

export function Random(){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    value.length=0;
    for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * (array.length - i));
    value.push(array[randomIndex]); 
    array.splice(randomIndex, 1);// 중복 제거.
    }

    document.querySelector('.result').style.display = 'none';
    document.getElementById('num').value = ' ';
}

export{value};