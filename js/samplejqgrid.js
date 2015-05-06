//受注画面(fig2)のjqGridテスト
	colData = {};		//列定義データの配列を格納する。
	colNamesLists = {};		//列名の配列を格納する。
	objRules = {};			//jqGridの設定の連想配列を格納する。
	gridFormOptions = [];	//行の編集ダイアログの設定。
	isCheckbox = false;		//チェックボックスをクリックしたかの判定。

	//行の編集ダイアログの設定その1。
	gridFormOptions[0] = {
			url:location.href,			//編集データの送信先。
			addCaption:'レコード追加',		//追加モード時のタイトル
			editCaption:'レコード編集',	//編集モード時のタイトル
			width: 'auto',				//幅を自動調整する
			bSubmit: '確定',				//確定ボタンのテキスト。
			bCancen: 'キャンセル',			//キャンセルボタンのテキスト。
			modal:true,					//モーダル表示する。
			closeAfterAdd:true,			//追加後に閉じる
			closeAfterEdit:true,		//編集後に閉じる
			recreateForm:true,			//レイアウト崩れ防止のため、毎回フォームを作成し直す。
			//前後ボタンを押した後のイベント。
			onclickPgButtons:function(whichbutton, formid, rowid){
				var rowidNum = parseInt(rowid);	//行番号を整数値に変換する。
				//切り替え先のレコードのチェック状態を確認する。
				isCheck = $('.list:first #' + (whichbutton == 'prev'?rowidNum - 1: rowidNum + 1) + ' input:checkbox:first').prop('checked');
			}
	};

	//fig.2 見積・受注機能のリストの列定義。
	//列の設定について、特筆すべき点のみ補足します。
	colData['fig2-list'] = [
	        //name:名前 index:ソート時の名前 width:列幅 dataType:データの型 align:セルのテキストの寄せる方向
	        //className:列のクラス名 editable:編集可能にするかどうかの設定。trueかfalseで指定する。
	        //editType:editableが有効な場合のセルの編集方法の指定。ラジオボタン、チェックボックス等を指定する。
	        //editoptions:セレクトメニューでのセル編集時に、選択項目のソースとなる連想配列を指定する。
	        //sortable:ソート可能かどうかの設定。 sorttype:ソートのデータ型を指定する。

	        //受注日列。dateTypeを日付型にする。
	        { name: "order_date", index:"order_date", width: 100, align:"left", className: "order_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
			//受注コード列
	        { name: "order_code", index:"order_code", width: 100, align:"left", className: "order_code", editable: true, sortable:true, sorttype:'text'},
	        //受注先列
	        { name: "customer", index:"customer", width: 100,  align:"left", className: " customer", editable: true, sortable:true, sorttype:'text'},
	        //納品希望日列
	        { name: "deliver_date", index:"deliver_date", width: 100, align:"left", className: "deliver_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
	        //記入者列
	        { name: "scribedby", index:"scribedby", width: 100, align:"left", className: "scribedby", editable: true, sortable:true, sorttype:'text'},
	        //受注主別列
	        { name: "order_type", index:"order_type", width: 75, align:"left", className: "order_type", editable: true, sortable:true, sorttype:'text'},
	        //合計金額列
	        { name: "ammount", index:"ammount", width: 100, align:"left", className: "ammount", editable: false, sortable:true, sorttype:'int'}
	];

	//列名定義の配列。順番にセットされる。
	colNamesLists['fig2-list'] = ['受注日', '受注コード', '受注先', '納品希望日', '記入者', '受注種別', '合計金額'];

	//fig2のjqGridのルールを連想配列に設定する。
	objRules['fig2-list'] = { 
		//データの取得元を設定する。
		url:'json/fig2.json',
		//JSONデータをデータソースとして利用する。
		datatype:"json",
		//基本の幅を指定する。
		width: 576,
		//グリッドのリサイズ時の最大幅、最小幅を指定する。
		gridResize: {minWidth:310, maxWidth:576},
		//表部分の高さを指定する。
		height: 280,
		//列名の表示の配列をセットする。
		colNames: colNamesLists['fig2-list'],
		//列定義のデータをセットする。
		colModel: colData['fig2-list'],
		caption: '受注リスト'	,	//リストのタイトルを設定する。
		cellEdit: false,    	// セルの編集を無効にする。
		//セルを編集してもサーバとの通信をしないように設定する。
		cellsubmit: 'clientArray',
        sortorder: "desc",	// 降順ソートをする
        multiselect: true,	// チェックボックス行を出す
        shrinkToFit: false,	// 列幅の自動調整を行う。
		//行を選択する前に実行される関数。
		beforeSelectRow:function(rowid, e){
			//行のチェックボックスの状態を取得する。
			isCheck = $('.list:first #' + rowid + ' input:checkbox:first').prop('checked');
        	return true;	//onSelectRowイベントへ移行する
		},
		//行を選択した後に実行される関数。
		onSelectRow:function(rowid, status, e){
			//チェックボックス以外をクリックしたら
			if(e === void(0)|| (e.target.cellIndex != 0 && $(e.target).hasClass('cbox') == false)){
				//行クリックでの選択であれば(行クリックでなければeはundefined)
				if(e !== void(0)){
					//編集ダイアログを開く。
					$('#fig2-list').editGridRow(rowid, gridFormOptions[0]);
				}
			}

			//行のチェックボックスの状態を行クリックで変化する前の状態に戻す。
			$('.list:first #' + rowid + ' input:checkbox:first').prop('checked', isCheck);
		}
	};

	/*
	 * 関数名:makeGrid
	 * 引数  :string target:テーブルのクラス。
	 * 戻り値:なし
	 * 概要  :jqGridのテーブルを作成する。
	 * 作成日 :2015.05.05
	 * 作成者:T.Masuda
	*/
	function makeGrid(target){
		$('#' + target).jqGrid(objRules[target]);
	}

	//ドキュメントの配置完了後(= 全てのファイルを読み込んだ後)
	$(document).ready(function(){
		makeGrid('fig2-list');	//グリッドを作成する
	});