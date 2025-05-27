// JSONデータを読み込んで各セレクトボックスに反映
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      const select = document.getElementById(key);
      data[key].forEach(optionText => {
        const opt = document.createElement('option');
        opt.value = optionText;
        opt.textContent = optionText;
        select.appendChild(opt);
      });
    }
  });

document.getElementById('generate').addEventListener('click', function () {
  const genre = document.getElementById('genre').value;
  const expression = document.getElementById('expression').value;
  const costume = document.getElementById('costume').value;
  const prompt = `${genre}な世界観、${expression}の表情、${costume}を着たキャラクター`;
  document.getElementById('promptResult').innerText = prompt;
});
