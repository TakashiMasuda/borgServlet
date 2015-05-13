
/* 
 * 関数名:tabColorChange
 * 引数  :なし
 * 戻り値:なし
 * 概要  :クリックしたタブの背景色を白色にする
 * 作成日 :2015.05.07
 * 作成者:T.Masuda
*/
function tabColorChange() {
	// タブをクリックした時の処理
	$('input[name="tab"]:radio').change(function() {
		// チェックが入っているラジオボタンのidを所得する
		var checkedTab = $('.tabRadio:checked').attr('id');
		// 受注タブを選択した時の処理
		if (checkedTab == 'receivedTab') {
			// 発注タブの背景を灰色にする
			$('.tablist .firstTab').css('background', '#eee');
			// 受注タブの背景を白色にする
			$('.tablist .secondTab').css('background', '#fff');
		// 発注タブが選択された時処理
		} else if (checkedTab == 'sendTab') {
			// 発注タブの背景を白色にする
			$('.tablist .firstTab').css('background', '#fff');
			// 発注タブの背景を灰色にする
			$('.tablist .secondTab').css('background', '#eee');
		}
	});
}

/* 
 * 関数名:createDialog
 * 引数  :
 *  dialogName ： ダイアログのセレクタ名
 *  openButton : ダイアログを開くためのボタン
 * 戻り値:なし
 * 概要  :ダイアログを作る
 * 作成日 :2015.05.12
 * 作成者:T.Masuda
*/
function createDialog(dialogName, openButton) {
	// ダイアログの設定
	$(dialogName).dialog({
		autoOpen: false,				// 自動で開かない
		width:320,						// ダイアログの幅
		show: "fade",					// 表示時のエフェクト
		hide: "fade",					// 非表示時のエフェクト
		modal:true						// ダイアログをモーダル化する
	});
	// ダイアログを開く設定
	$(openButton).click(function(){		// セレクタのボタンがクリックされたら
		$(dialogName).dialog('open');// ダイアログを開く
	});

	$('#okButton').click(function(){	// ダイアログのokボタンがクリックされたら
		$(dialogName).dialog('close');// ダイアログを閉じる
	});
}

/* 
 * 関数名:deleteAttr
 * 引数  :
 *  selector	： 属性を削除するセレクタ名
 *  attr 		: 削除する属性名
 * 戻り値:なし
 * 概要  :属性を削除する
 * 作成日 :2015.05.13
 * 作成者:T.Masuda
*/
function deleteAttr(selector, attr) {
	// 第一引数の要素から第二引数の属性を削除する
	$(selector).removeAttr(attr);
}

