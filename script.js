// عرض الأسماء تدريجياً مع التأثير
let nameParts = ["منار", "محمد", "حميد"];
let nameContainer = document.getElementById("nameContainer");
let index = 0;

function displayName() {
    if (index < nameParts.length) {
        let span = document.createElement("span");
        span.className = "name-part";
        span.innerText = nameParts[index];
        span.style.opacity = "0";
        nameContainer.appendChild(span);
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transition = "opacity 0.8s ease-in";
        }, 200 * index);
        index++;
        setTimeout(displayName, 600);
    }
}

displayName();

// زر معلوماتي
document.getElementById('infoBtn').addEventListener('click', function() {
    let infoDiv = document.getElementById('info');
    infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
    infoDiv.classList.toggle("fadeSlideIn");
});

// زر نبذة عن أعمالي
document.getElementById('workBtn').addEventListener('click', function() {
    let workDiv = document.getElementById('work');
    workDiv.style.display = (workDiv.style.display === 'none' || workDiv.style.display === '') ? 'block' : 'none';
    workDiv.classList.toggle("fadeSlideIn");
});
