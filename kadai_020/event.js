//テキスト要素取得
const text = document.getElementById('text');

//ボタン要素の取得
const btn = document.getElementById('btn');

//ボタンをクリックした際の処理
btn.addEventListener('click',() => {

    //画面のテキスト内容を変更する。
    text.textContent = 'ボタンをクリックしました';
})