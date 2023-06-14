let btn = document.querySelector('.night-mode-btn');

btn.addEventListener('click', function() {
    if (document.body.classList.contains('night')) {
        document.body.classList.remove('night');
    } else {
        document.body.classList.add('night');
    };

    if (btn.innerText === 'Включить ночной режим') {
        btn.innerText = 'Выключить ночной режим';
    } else {
        btn.innerText = 'Включить ночной режим';
    }
});

// btn.addEventListener('click', function() {
//     document.body.classList.toggle('night');
//     btn.innerHTML = (btn.innerHTML === 'Включить ночной режим') ? btn.innerHTML = 'Выключить ночной режим' : btn.innerHTML = 'Включить ночной режим';
// });