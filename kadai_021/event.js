//テキスト要素取得
const text = document.getElementById('text');

//ボタン要素の取得
const btn = document.getElementById('btn');

//ボタンをクリックした際の処理
btn.addEventListener('click',() => {

    //クリックして2秒後の処理
    setTimeout(() => {

        //画面のテキスト内容を変更する。
        text.textContent = 'ボタンをクリックしました';

    //待ち時間は2秒(2000ミリ秒)に設定
    }, 2000);
})