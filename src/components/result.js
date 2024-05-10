// components/result.js

export function result(strikes, balls) {
    let result;

    switch (true) {
        case strikes > 0 && balls > 0:
            result = `${strikes} 스트라이크, ${balls} 볼`;
            break;
        case (strikes > 0 && strikes < 3) && balls === 0:
            result = `${strikes} 스트라이크`;
            break;
        case strikes === 0 && balls > 0:
            alert(`${balls} 볼`);
            break;
        case strikes === 3:
            document.querySelector('.result').style.display = 'block';
            break;
        default:
            result = '낫싱';
            break;
    }

    if (result) {
        alert(result);
    }
}
