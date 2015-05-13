
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
 * 引数  :なし
 * 戻り値:なし
 * 概要  :ダイアログを作る
 * 作成日 :2015.05.12
 * 作成者:T.Masuda
*/
function createDialog() {
	// ダイアログの設定
	$('#dialog').dialog({
		autoOpen: false,				// 自動で開かない
		title:'新規・編集画面(製品項目)',	// ダイアログのタイトル
		width:320,						// ダイアログの幅
		show: "fade",					// 表示時のエフェクト
		hide: "fade",					// 非表示時のエフェクト
		modal:true						// ダイアログをモーダル化する
	});
	// ダイアログを開く設定
	$('.returnButton').click(function(){		// セレクタのボタンがクリックされたら
		$('#dialog').dialog('open');// ダイアログを開く
	});

	$('#okButton').click(function(){	// ダイアログのokボタンがクリックされたら
		$('#dialog').dialog('close');// ダイアログを閉じる
	});
}