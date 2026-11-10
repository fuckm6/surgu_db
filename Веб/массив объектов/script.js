
const rectangles = [
    { width: 50, height: 40 },
    { width: 100, height: 60 },
    { width: 80, height: 100 },
    { width: 120, height: 50 }
];

const root = document.getElementById('root');

for (let i = 0; i < rectangles.length; i++) {

    const element = document.createElement('div');

    element.style.width = rectangles[i].width + 'px';
    element.style.height = rectangles[i].height + 'px';

    element.className = 'rectangle';

    root.appendChild(element);
}