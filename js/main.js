// JavaScript Document

	windowHeight = 0;	//画面の高さを格納する変数。各要素の高さの基準となる
	buttonWidthRatio = 2;	//ボタンの縦横比。縦1に対しての横の比率
	maxHeight = 1024;	//最大の高さ
	maxWidth = 768;		//最大の幅
	aLineHeight = 3.61;			//テキストボックス等の1行分の高さの割合
	heightRatio = 12;			//divタグとテキストボックスの高さの縦横比の横の比率
	contentWidthParcent = 0.98;	//marginを抜いた画面幅の割合
	baseFontSize = 100;			//タグに設定されたフォントサイズのデフォルトの割合
	fontRatio = 12.0;			//画面縮小時に行うフォントサイズの縮小度合いを決める変数
	spRatio	= 1.5;				//スマホ横幅用比率
	tbRatio	= 2.0;				//タブレット横幅用比率
	spWidth = 480;				//スマホ用レイアウトになる幅
	strechFix1 = 20;			//文字伸縮の修正値1
	strechFix2 = 2.0;			//文字伸縮の修正値2
	strechFix3 = 2.0;			//Fig.1のボタンの高さ用修正値
	pulldownRatio = 2.0;		//プルダウンメニューの高さの画面に対する割合
	
	/*
	 * 関数名:setContentHeight
	 * 引数  :なし
	 * 戻り値:なし
	 * 概要  :画面の高さを取得してコンテンツの高さにする
	 * 作成日:2014.07.16
	 * 作成者:T.M
	*/
	function setContentHeight(){
		//テキストボックスを含むdivタグの高さと幅の割合から妥当な高さを割り出す
		 var divHeight = $('.main').width() / (heightRatio * tbRatio);	
		 $('.variable-height').css('height', divHeight);	//高さを設定
		 $('#header-title').css('font-size', divHeight);	//タイトルのフォントサイズを設定
		 //プルダウンメニューの高さを指定。画面の高さの半分程度
		 $('.ui-autocomplete').css('max-height', $(window).height() / pulldownRatio);
	}
	
	/*
	 * 関数名:changeFontSize
	 * 引数  :なし
	 * 戻り値:なし
	 * 概要  :動的にフォントの大きさを変える
	 * 作成日:2014.07.17
	 * 作成者:T.M
	*/
	function changeFontSize(){
		//新たなフォントサイズを算出
		var newFontSize = (baseFontSize - ((maxWidth - $('.main').width()) / fontRatio));

		//フォントのサイズを調整する
		$('.parallel-text,.single-line-text,#header-title,.voucher-status-text,.ui-dropdownchecklist-text,.space_width,.ui-autocomplete ').css('font-size',  newFontSize + '%');		//2段組テキストボックス
		$('').css('font-size',  newFontSize + '%');	//1段組テキストボックス
		//ステータスのテキストボックスの文字
		$('.before_list_line label').css('font-size',  newFontSize + '%');		//リスト前行のラベル
		//Fig.3-1のボタンのフォントサイズ
		$('.normal-button').css('font-size',  newFontSize - strechFix1 + '%');
		//管理者画面の表の人名	
		$('.users_table th').css('font-size',  newFontSize - strechFix1 + '%');
		//タブの切り替えボタン		
		$('#tab-container ul li').css('font-size',  newFontSize + '%');	
		//タブ内の文字ボタン
		$('#tab-container .edit_buttons .normal-button').css('font-size',  newFontSize + '%');		
		//顧客種別のラベル
		$('.space_width_syubetu label').css('font-size',  newFontSize + '%');
		//ユーザー編集画面の表
		$('.line_table td').css('font-size',  newFontSize + '%');
	}
	
	//画面伸縮時に画面の高さを修正する
	$(window).resize(function(){
		setContentHeight();	//setContentHeightを呼び出し高さを修正
		changeFontSize();	//フォントサイズを調整する
	});
	
	changeFontSize();	//初回読み込みでフォントサイズを調整
	setContentHeight();	//初回読み込み時に高さを合わせる実行
	
	
	//リスト内のプルダウンメニューのデータを格納する配列
	var pulldown = new Array();
		//人物(担当者)のプルダウンメニュー
		pulldown['person'] = {value:'0:<span class="direct-input">直接入力</span>;1:木村隆; 2:佐藤祐作; 3:山田太郎'};
		//製品のプルダウンメニュー 
		pulldown['product'] = {value:'0:<span class="direct-input">直接入力</span>;1:<span class="list-name">フラッシング3寸</span>;2:<span class="list-name">チムニーフラッシング　□650</span>;3:<span class="list-name">炉台キット2枚組　CB30</span>;4:<span class="list-name">煙突ヒートシールド</span>;5:<span class="list-name">スチールステージプレート　角</span>;6:<span class="list-name">バーベキュースタンド</span>;7:<span class="list-name">ストームカラー　ネック付</span>;8:<span class="list-name">チムニートップ</span>;9:<span class="list-name">結露防止板</span>;10:<span class="list-name">シングル直管1000mm φ150 黒</span>;11:<span class="list-name">シングルエルボー管30°黒</span>;12:<span class="list-name">断熱二重直管120mm</span>;13:<span class="list-name">断熱二重直管500mm</span>;14:<span class="list-name">断熱二重直管1200mm</span>'};
		//製品のプルダウンメニュー。絞込み対応版
		pulldown['product-for-sort'] = {value:'0:<span class="direct-input">直接入力</span>;1:<span class="list-name">フラッシング3寸</span><span class="category-name"> フラ</span>;2:<span class="list-name">チムニーフラッシング　□650</span><span class="category-name"> フラ</span> ;3:<span class="list-name">炉台キット2枚組　CB30</span><span> 炉台</span>;4:<span class="list-name">煙突ヒートシールド</span><span> 一支</span>;5:<span class="list-name">スチールステージプレート　角</span><span> アクセ</span>;6:<span class="list-name">バーベキュースタンド</span><span> アクセ</span>;7:<span class="list-name">ストームカラー　ネック付</span><span> 二支</span>;8:<span class="list-name">チムニートップ</span><span> 二管</span>;9:<span class="list-name">結露防止板</span><span> 二支</span>;10:<span class="list-name">シングル直管1000mm φ150 黒</span><span> 一管</span>;11:<span class="list-name">シングルエルボー管30°黒</span><span> 一管</span>;12:<span class="list-name">断熱二重直管120mm</span><span> 二管</span>;13:<span class="list-name">断熱二重直管500mm</span><span> 二管</span>;14:<span class="list-name">断熱二重直管1200mm</span><span> 二管</span>'};
		//製品種別のプルダウンメニュー
		pulldown['product_category'] = {value:'0:直接入力;1:二管; 2:一管; 3:炉台; 4:二支;5:一支;6:アク;7:フラ'};
		//顧客のプルダウンメニュー 
		pulldown['customer'] = {value:'0:<span class="direct-input">直接入力</span>;1:株式会社A;2:株式会社B;3:株式会社C;4:合同会社D;5:合同会社E;6:合同会社F;7:合同会社G;8:合同会社H;9:合同会社I'}; 
		//顧客種別のプルダウンメニュー
		pulldown['customer_type'] = {value:'0:<span class="direct-input">直接入力</span>;1:代;2:製;3:加;4:倉;5:顧'};	
		

	/* 関数名:disappearPage = function()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :今表示しているページを消す
	 * 作成日:14.06.23
	 * 作成者:T.M
	 * 更新日:14.07.10
	 * 更新者:T.M
	 * 内容  :どこからでも呼び出せるように変更
	*/	
	function disappearPage(){
			$(function(){
				//表示しているプルダウンメニューを消す
				$('.ui-autocomplete').css('display', 'none');
				//今表示しているページを消す
				$('.page:first', document).remove();
				//新たに最前に出てきたページを表示する
				$('.page:first', document).css('display', 'block');
				setContentHeight();	//高さを調整する
				changeFontSize();	//フォントの大きさを直す
			});
	}

//JQueryを使ったJavaSciptの記述を開始
	//グラフを表示する領域に対するスタイルシートの設定を行う
	$('#graph').css({
		//JQueryプラグインによるグラフの表示で幅のずれを起こすため、幅をごくわずか狭める
		width: '99.9%',				//幅を設定
		height: '400px',			//グラフとの高さを合わせる
		border: 'solid 1px #000',	//極細の黒の実線で囲む
		borderTopStyle: 'none'		//上の罫線を描画しない
	});
	
	/* 関数名:callPage = function(e)
	 * 引数　:Event e
	 * 戻り値:なし
	 * 概要  :ページを呼び出し表示する
	 * 作成日:14.06.23
	 * 作成者:T.M
	*/
	var callPage = function(e){
		//表示しているプルダウンメニューを消す
		$('.ui-autocomplete').css('display', 'none');
		var pushedbutton = $(this);	//押されたリンクのボタンのセレクタを格納する変数	
		//ページのアドレスを取得
		contentUrl = $(this).attr('name');
		var htmlString = '.html';
		//ajax通信でページのHTMLを呼び出す
		$.ajax({
			url: contentUrl + htmlString,
			dataType: "html",
			type: 'get',
		//成功したら
			success: function(html){
				//ページを書き出す領域を作成
				$('#container').prepend($('<div></div>')
				.addClass('page'));
				//用意した領域に書き出す
				$('.page:first').html($(html).find('.main'));
				//ひとつ前のページを非表示にする
				$('.page:first').next().css('display', 'none');
				//入庫画面から製品追加編集画面を出す場合
				$('#' + contentUrl).formly({	//formlyでページのレイアウトを調節する
					'onBlur':false, //マウスオーバーでダイアログを出すか
				});
				//在庫編集画面以外からFig.3-1を呼び出したら
				if($(pushedbutton).attr('id') != 'edit_button_stock_page'){
					$('.page:first div.serial-number').remove();	//fig3-1のデータからシリアルナンバーのボタンを消す
				}				
				if($('.page:first #tab-container').length > 0){	//タブのあるページが呼び出されたら
					//タブの幅を取得。パーセンテージ調整後リストの幅設定に使う
					tabContainerWidth = $('#tab-container').width() * tabContainerPercent;
				}
				
				setContentHeight();	//setContentHeightを呼び出し高さを修正
				changeFontSize();	//フォントサイズを調整する

				executeTextBoxResize();	/* テキストボックスのリサイズを行う */
			  },
				  error : function(){					//データの取得に失敗したら
					  alert('申し訳ありません。ご指定されたページは現在製作中となっております。');	//その旨をalertで伝える
			  }
		});
		//下にあるページを隠す
	}

	/* 関数名:onPageClose = function()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :クローズボックスが押されたときの処理
	 * 作成日:14.07.10
	 * 作成者:T.M
	*/	
	var onPageClose = function(){
		var pageId = $('.page:first div[id *= "fig"]:first', document).attr('id');
		if(isListChanged(isChange, pageId)){	//リストが編集されていたら
			saveList();							//ダイアログを出し編集結果を保存するか選択
		} else {
			disappearPage();//ページをそのまま消す
		}
	}

	//ページを読み込むイベントを登録
	$(document).on('click', '.callpage', callPage);
	//クローズボックスをクリックしたら現在のページを閉じる
	$(document).on('click', '.backbutton', onPageClose);

	//ツールチップ用のテキストを格納する配列
	var toolTipText = {
		add: '項目を追加します。',
		edit: '項目を編集します',
		delete:'項目を削除します',
		select:'項目を選択します。',
		stock:'入庫処理をします。',
		summary:'項目を削除します',
		close:'このページを閉じます。',
		connect:'伝票の結合を行います。',
		calendar:'カレンダーから日付を選択します。',
		setting:'各ページへのリンクを表示します。'
	};
	
	/* 関数名:setButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :ボタンをJQuery UIのものに置き換える
	 * 作成日:14.07.01
	 * 作成者:T.M
	 * 修正日:14.07.25
	 * 修正者:T.M
	 * 内容  :ツールチップ対応
	*/	
function setButtons(){
	//JQueryの記述を開始
	$(function(){
		//タッチ端末か
		var isTouchDevice = false;
		//タッチ
		if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') == 0) ||
		 navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
			 isTouchDevice = true;	//isTouchDeviceにtrueを格納してタッチ端末であること確定
		}else{
				$('.page:first button.button').powerTip({						//ツールチップをセット
				placement: 'n',				//上に表示
				followMouse: true,			//マウスについてくる
				smartPlacement: true,		//画面外に出たら戻ってくる
				intentPollInteterval: 0,	//表示は早めに
				intentSensitivity: 10		//表示されるまでの距離制限
				})
		}
		//追加ボタンがあれば
		if($('.page:first button.add-button').length >= 1){
			//追加ボタンのレイアウトを変更
			$('.page:first .add-button').button({
				icons: {					//ボタンの画像を設定
					primary: 'ui-icon-plus'	//ボタンの画像を＋マークにする
				},
				text: false					//テキストを非表示にする
			})
			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['add']);

		}
		//編集ボタンがあれば
		if($('.page:first button.edit-button').length >= 1){
			//編集ボタンのレイアウトを変更
			$('.page:first .edit-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-pencil'	//ボタンの画像を鉛筆マークにする
				},
				text: false					//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['edit']);

		}
		//削除ボタンがあれば
		if($('.page:first button.delete-button').length >= 1){
			//選択ボタンのレイアウトを変更
			$('.page:first .delete-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-trash'	//ボタンの画像をゴミ箱マークにする
				},
			text: false					//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['delete'])
;		

		}
		//選択ボタンがあれば
		if($('.page:first button.select-button').length >= 1){
			//選択ボタンのレイアウトを変更
			$('.page:first .select-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-arrowthick-1-s'	//ボタンの画像を下矢印にする
				},
			text: false					//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['select']);

		}
		//クローズボックスがあれば
		if($('.page:first button.close-button').length >= 1){
			//まとめボタンのレイアウトを変更
			$('.page:first .close-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-close'	//ボタンの画像を×マークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['close']);

		}
		//まとめボタンがあれば
		if($('.page:first button.summary-button').length >= 1){
			//まとめボタンのレイアウトを変更
			$('.page:first .summary-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-document'	//ボタンの画像を文書マークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['summary']);

		}
		//入庫ボタンがあれば
		if($('.page:first button.stock-button').length >= 1){
			//入庫ボタンのレイアウトを変更
			$('.page:first .stock-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-plus'	//ボタンの画像を下向きプラスマークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['stock']);

		}
		//連結ボタンがあれば
		if($('.page:first button.connect-button').length >= 1){
			//連結ボタンのレイアウトを変更
			$('.page:first .connect-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-link'		//ボタンの画像を連結マークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['connect']);

		}
		//カレンダーボタンがあれば
		if($('.page:first button.ui-datepicker-trigger').length >= 1){
			//カレンダーボタンのレイアウトを変更
			$('.page:first .ui-datepicker-trigger').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-calendar'	//ボタンの画像をカレンダーマークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['calendar']);
			if(!(isTouchDevice)){				//タッチ端末でなければ
				$('.page:first .ui-datepicker-trigger')
					.powerTip({						//ツールチップをセット
						placement: 'n',				//上に表示
						followMouse: true,			//マウスについてくる
						smartPlacement: true,		//画面外に出たら戻ってくる
						intentPollInteterval: 0,	//表示は早めに
						intentSensitivity: 10		//表示されるまでの距離制限			
				});
			}

		}
		//設定ボタンがあれば
		if($('.page:first button.setting-button').length >= 1){
			//設定ボタンのレイアウトを変更
			$('.page:first .setting-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-gear'		//ボタンの画像を歯車マークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['setting']);

		}
		//タッチ端末でなければ
		if(!(isTouchDevice)){
			//ボタンをJQuery UIで用意されたものにする
			$('.page:first button.button').button()
				.powerTip({						//ツールチップをセット
					placement: 'n',					//上に表示
					followMouse: true,				//マウスについてくる
					smartPlacement: true,			//画面外に出たら戻ってくる
					intentPollInteterval: 0,		//表示は早めに
					intentSensitivity: 10			//表示されるまでの距離制限
			});	
		}
	});
}

//モーダルダイアログによるリンクリストの作成
//jQueryでの記述を開始
$(function(){
    //　モーダル初期設定
    $('#modal').dialog({
		title: 'リンク一覧',		//ダイアログのタイトル
		width: 'auto',				//幅
		height: 'auto',				//高さ
        autoOpen: false, 			// 自動でオープンしない
		modal: true,				//モーダルダイアログ
        resizable: false, 			// リサイズしない
        draggable: false, 			// ドラッグしない
        show: "clip",     			// 表示時のエフェクト
        hide: "fade",      			// 非表示時のエフェクト
		position: ["right", "top"],	//表示位置の指定。右上に表示
		//ダイアログのクローズボックスを非表示にする
		open:function(event, ui){ 
			$(".ui-dialog-titlebar-close")
				.hide()
			;},
    })
	//ダイアログの項目をクリックしたら
	.on('click', 'li', function(){
		$(this).parent().parent().dialog('close');	//ダイアログを閉じる
	});
	
	//リストを保存するかどうかの選択のダイアログ
    $('#chooseListSave').dialog({
		title: '編集内容を保存しますか?',		//ダイアログのタイトル
		width: '300px',				//幅
		height: 'auto',				//高さ
     	autoOpen: false, 			// 自動でオープンしない
		modal: true,				//モーダルダイアログ
     	resizable: false, 			// リサイズしない
     	draggable: true, 			// ドラッグできる
     	show: "fade",     			// 表示時のエフェクト
	    hide: "fade",      			// 非表示時のエフェクト
		position: 'center',			//表示位置の指定。上に表示
		closeOnEscape: false,		//Escボタンを押しても閉じない
		//ダイアログのクローズボックスを非表示にする
		open:function(event, ui){ 
			$(".ui-dialog-titlebar-close")
				.hide()
			;},
		buttons: {					//ボタンのイベントを設定	
　　　	"保存する": function(){				//OKボタンを押したら
　　　			$(this).dialog('close');		//ダイアログを閉じる
				//未編集状態にする
				var fig = $('.page:first div[id *= "fig"]:first', document).attr('id');
				isChange -= figs[fig];
				disappearPage();				//ページを閉じる
　　　		},
　　　	"保存しない": function(){			//Cancelボタンを押したら
	　　　		$(this).dialog('close');		//ダイアログを閉じる
				//未編集状態にする
				var fig = $('.page:first div[id *= "fig"]:first', document).attr('id');
				isChange -= figs[fig];
				disappearPage();				//ページを閉じる
　　　		},
　　　	"キャンセル": function(){			//Cancelボタンを押したら
	　　　		$(this).dialog('close');		//ダイアログを閉じる
　　　		}
		}
    });	

	//リストの値をプルダウンメニューで選択するもので、直接入力を行うときのダイアログ
    $('#direct-input-dialog').dialog({
		title: '値を入力してください',		//ダイアログのタイトル
		width: 'auto',				//幅
		height: 'auto',				//高さ
     	autoOpen: false, 			// 自動でオープンしない
		modal: true,				//モーダルダイアログ
     	resizable: false, 			// リサイズしない
     	draggable: true, 			// ドラッグできる
		closeOnEscape: false,		//Escボタンを押しても閉じない
     	show: "fade",     			// 表示時のエフェクト
	    hide: "fade",      			// 非表示時のエフェクト
		//ダイアログのクローズボックスを非表示にする
		open:function(event, ui){ 
			$(".ui-dialog-titlebar-close")
				.hide();
			},
		position: 'center',			//表示位置の指定。上に表示
		buttons: {					//ボタンのイベントを設定
　　　	"OK": function(){				//OKボタンを押したら
　　　			$(this).dialog('close');		//ダイアログを閉じる
				//選択されたセルの行のセレクタを変数rowに格納
				var row = $('#' + editingTable + ' tr').eq(editingRow);
				//直接入力の項目のテキストをダイアログで入力したテキストに書き換える
				$(':nth-child(' + (editingCol + 1) + ') .direct-input', row).text(editText);
				//入力されたテキストの変数に空白のテキストを格納
				editText = '';
				//テキストボックスを空にする
				$("input#direct-input-text").val('');
　　　		},
　　　	"Cancel": function(){			//Cancelボタンを押したら
	　　　		$(this).dialog('close');		//ダイアログを閉じる
				//入力されたテキストの変数に空白のテキストを格納
				editText = '';
				//テキストボックスを空にする
				$("input#direct-input-text").val('');
				}
		}
    });	

	//編集した文字列を格納する変数
	var editText = "";
	//テキストボックスから文字列を取り出して変数に格納する
	$("#direct-input-text").change(function () {	//テキストボックスの中身に変化があったら
		editText = $(this).val();					//そこから取り出して変数に格納
	}).change();

    // .selecter クリック時にモーダル表示
    $(document).on('click', '.setting-button',function() {
		var dialogX;	//ダイアログのX座標
		var dialogY;	//ダイアログのY座標
		var offset = $('.setting-button').offset();	//設定ボタンの座標を取得
//		alert( parseInt($('.main').css('margin-left')) + ' ' + $('.main').width() + ' ' + $('#modal').width());
//		dialogX = parseInt($('.main').css('margin-left')) + $('.main').width() - $('#modal').width();		//画面の左余白を取得
		//設定ボタン付近のX座標を取得
		dialogX =　$('.main').width() / 4 * 3+ parseInt($('.main').css('margin-left'));	
		dialogY = offset.top + $('.setting-button').height();	/* 設定ボタンの下の位置を取得 */
        $('#modal').dialog({position:[dialogX, dialogY]});		//ダイアログの位置を設定する
        $('#modal').dialog('open');		//ダイアログを表示する
        return false;					//以後のJavaScriptの処理を止める
    });
 
    // モーダルダイアログ以外のブラウザ領域をクリックすると
    $(document).on('click', '.ui-widget-overlay', function(){
		//モーダルダイアログを消す
//        $(this).prev().find('.ui-dialog-content').dialog('close');
		$('#modal', document).dialog('close');	//ダイアログを閉じる
    });
});

//テキストボックスの各要素の幅(%指定)の値を格納する配列。
//1 - それぞれの配列の合計でテキストボックスの取れる割合を算出する
var widthSum = [
//				tb左pad 右pad ラベル ボタン ボタン左margin+余白
				[0.01, 0.01, 0.274, 0.0849, 0.07],		//2段組テキストボックス
				[0.01, 0.01, 0.145, 0.0245, 0.04],		//1段組テキストボックス
				[0.01, 0.01, 0.11, 0.052741, 0.074],	//種別とセットの製品名
				[0.01, 0.01, 0.11, 0.052741, 0.35]		//製品名とセットの種別
				];
//現状画面崩れが起こる幅を格納する変数
var borderWidth = 388;
/* 
 * 関数名:textBoxResize()
 * 引数  :var selector, var index
 * 戻り値:なし
 * 概要  :縮小時のテキストボックスをリサイズする
 * 作成日:14.07.22
 * 作成者:T.M
*/ 
function textBoxResize(selector, index){
	//テキストボックスを除いた幅のパーセンテージ合計を求めるための変数
	//widhoutTextboxWidthParcentを宣言
	var withoutTextboxWidthParcent = 0;
	//for文をまわしてテキストボックスを除いた幅のパーセンテージ合計を算出
	for(var counter = 0; counter < widthSum[index].length; counter++){
		//divParcentに要素の幅パーセンテージを足していく
		withoutTextboxWidthParcent += widthSum[index][counter];
	}
	//ウィンドウの幅( =端末のブラウザ幅)を取得してdeviceWidthに格納
	var deviceWidth = $(window).width();
	//テキストボックス以外が取る幅を計算してwithoutTextboxWidthに格納
	var withoutTextboxWidth = borderWidth * withoutTextboxWidthParcent;
	//テキストボックスが取る幅を算出
	var textboxWidth = deviceWidth - withoutTextboxWidth;
	//テキストボックスの幅を画面サイズで割り、100をかけた数値を
	//テキストボックスの幅に指定
	$(selector).css('width', (textboxWidth / deviceWidth) * 100 + '%');
};
/* 
 * 関数名:removeTextBoxResize()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :縮小時のテキストボックスをリサイズする
 * 作成日:14.07.22
 * 作成者:T.M
*/ 
function removeTextBoxResize(){
	$('.parallel-text input').css('width', '');
	$('.single-line-text input').css('width', '');
	$('.product-select input').css('width', '');
	$('.product-category input').css('width', '');
};
/* 
 * 関数名:executeTextBoxResize()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :テキストボックスのリサイズを一斉に実行する
 * 作成日:14.07.22
 * 作成者:T.M
*/ 
function executeTextBoxResize(){
	//画面の幅がborderWidth以下であれば
	if($(window).width() <= borderWidth){
		textBoxResize('.parallel-text input', 0);	//テキストボックスのサイズを修正する
		textBoxResize('.single-line-text input', 1);	//テキストボックスのサイズを修正する
		textBoxResize('.product-select input', 2);	//テキストボックスのサイズを修正する
		textBoxResize('.product-category input', 3);	//テキストボックスのサイズを修正する
	} else{
		removeTextBoxResize();	//textBoxResizeで付与された幅を消去する
	}
};

//画面の幅が変わったら
$(window).resize(function(){
	executeTextBoxResize();	/* テキストボックスのリサイズを行う */
});


//GoogleからGoogleChartのコアを呼び出す
google.load('visualization', '1', {packages:['corechart']});
//Googleから表出力のAPIを呼び出す
google.load('visualization', '1', {packages:['table']});