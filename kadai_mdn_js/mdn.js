const now = new Date();				//本日の日付を取得
const year = now.getFullYear();		//定数nowから年を取得
const month = now.getMonth() + 1;	//定数nowから月を取得
const date = now.getDate();			//定数nowから日を取得

//定数year,month,dateから指定の形式で年月日を出力
console.log(year + '年' + month + '月' + date + '日');
