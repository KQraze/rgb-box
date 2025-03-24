const div = document.querySelector('div');



// Черный - rgba(0, 0, 0)
// Красный - rgba(255, 0, 0)
// Белый - rgba(255, 255, 255)
// Синий - rgba(0, 0, 255)


onmousemove = (e) => {
    e.preventDefault();

    const { clientX, clientY } = e;
    const { left, right, top, bottom, height, width } = div.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    const diagonalK = Math.abs(x / width - y / height);

    const diagonalPercent = (Math.sqrt(x ** 2 + y ** 2) / Math.sqrt(width ** 2 + height ** 2)) * (1 - diagonalK);

    const rgb = {
        red: 255 * (x / width),
        green: 255 * diagonalPercent,
        blue: 255 * (y / height),
    }

    const clientInside = clientX > left && clientX < right && clientY > top && clientY < bottom;

    if (!clientInside) {
        rgb.red = 0;
        rgb.green = 0;
        rgb.blue = 0;
    }

    div.style.background = `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    div.innerHTML = `rgba(${~~rgb.red}, ${~~rgb.green}, ${~~rgb.blue})`;
}
