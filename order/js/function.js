
/* 
 * 関数名:tabColorChange
 * 引数  :なし
 * 戻り値:なし
 * 概要  :クリックしたタブの背景色を白色にする
 * 作成日 :2015.05.07
 * 作成者:T.Yamamoto
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
 * 作成者:T.Yamamoto
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
 * 作成者:T.Yamamoto
*/
function deleteAttr(selector, attr) {
	// 第一引数の要素から第二引数の属性を削除する
	$(selector).removeAttr(attr);
}

/* 
 * 関数名:setOptionValue
 * 引数  :なし
 * 戻り値:なし
 * 概要  :optionタグのvalue属性に値を入れる
 * 作成日 :2015.05.13
 * 作成者:T.Yamamoto
*/
function setOptionValue() {
	// optionタグをループで全て操作する
	$("select option").each(function(i){
		// optionタグの文字列を変数に入れる
		var selectValue = $(this).text();
		// 取得した文字列をvalue属性に入れる
		$(this).val(selectValue);
	});
}

/* 
 * 関数名:setAddButtonLink
 * 引数  :
 *   selector	: addbuttonがあるセレクター名
 *   link  		: href属性の値
 * 戻り値:なし
 * 概要  :追加ボタンのhref属性をセットする
 * 作成日 :2015.05.13
 * 作成者:T.Yamamoto
*/
function setAddButtonLink(selector, link) {
	// 第一引数のセレクターに対してaddButtonクラスを持つ親要素に第二引数の値をhref属性に設定する
	$(selector).find('.addButton').parent().attr('href', link);
}

/* 
 * 関数名:funcTab
 * 引数 :なし
 * 戻り値:なし
 * 概要  :タブ機能を実装する
 * 作成日 :2015.05.13
 * 作成者:T.Yamamoto
*/
function funcTab() {
	// デフォルトのコンテンツを表示するために。selectedクラスを持つタブのname属性を取得する
	var defaultContent = $('.selected').attr('name');
	// デフォルトのタブコンテンツを表示する
	$('#' + defaultContent).css('display', 'block');
	// タブがクリックされた時の処理
	$('.tabOut').on('click', '.tablist a', function() {
		// クリックされた要素のクラス名をを取得し、表示するコンテンツのid名として使う
		var displayContent = $(this).attr('name');
		// selectedクラスを全てのリストから取り除く
		$('.tablist a').removeClass('selected');
		// クリックした要素にselectedクラスを付け足す
		$(this).addClass('selected');
		// タブのコンテンツを全て非表示にする
		$('.tabIn .tabcontent').css('display', 'none');
		// クリックした要素に対応するコンテンツを表示する
		$('#' + displayContent).css('display', 'block');
	});
}

