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

	//受注タブ、列名定義の配列。順番にセットされる。
	colNamesLists['receivedData'] = ['', '受注日', '受注コード', '顧客名', '納品希望日', '入力者', '受注種別', '承認者', '合計金額'];

	//発注タブ、列名定義の配列。順番にセットされる。
	colNamesLists['sendData'] = ['', '発注日', '発注コード', '発注先', '発送指定日', '入力者', '承認者', '合計金額'];

	//発注タブ、列名定義の配列。順番にセットされる。
	colNamesLists['sendDataAddEdit'] = ['', '製造番号', '製品種別', '製品名', '単価', '個数', '小計', '顧客名', '納品場所'];

	//fig.2 見積・受注機能のリストの列定義。
	//列の設定について、特筆すべき点のみ補足します。
	colData['receivedData'] = [
	        //name:名前 index:ソート時の名前 width:列幅 dataType:データの型 align:セルのテキストの寄せる方向
	        //className:列のクラス名 editable:編集可能にするかどうかの設定。trueかfalseで指定する。
	        //editType:editableが有効な場合のセルの編集方法の指定。ラジオボタン、チェックボックス等を指定する。
	        //editoptions:セレクトメニューでのセル編集時に、選択項目のソースとなる連想配列を指定する。
	        //sortable:ソート可能かどうかの設定。 sorttype:ソートのデータ型を指定する。

			//受注日チェックボックス列
			{ name: "received_check", index:"received_check", width: 32, align:"center", className: "received_check", editable: true, sortable:false},
	        //受注日列。dateTypeを日付型にする。
	        { name: "order_date", index:"order_date", width: 100, align:"left", className: "order_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
			//受注コード列
	        { name: "order_code", index:"order_code", width: 100, align:"left", className: "order_code", editable: true, sortable:true, sorttype:'text'},
	        //顧客名列
	        { name: "customer", index:"customer", width: 100,  align:"left", className: " customer", editable: true, sortable:true, sorttype:'text'},
	        //納品希望日列
	        { name: "delivery_date", index:"delivery_date", width: 100, align:"left", className: "delivery_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
	        //入力者列
	        { name: "scribedby", index:"scribedby", width: 100, align:"left", className: "scribedby", editable: true, sortable:true, sorttype:'text'},
	        //受注主別列
	        { name: "order_type", index:"order_type", width: 75, align:"left", className: "order_type", editable: true, sortable:true, sorttype:'text'},
	        //承認者列
	        { name: "permiter", index:"permiter", width: 100, align:"left", className: "permiter", editable: false, sortable:true, sorttype:'text'},
	        //合計金額列
	        { name: "amount", index:"amount", width: 100, align:"left", className: "amount", editable: false, sortable:true, sorttype:'int'}
	];

	//fig.3 見積・発注機能のリストの列定義。
	//列の設定について、特筆すべき点のみ補足します。
	colData['sendData'] = [
	        //name:名前 index:ソート時の名前 width:列幅 dataType:データの型 align:セルのテキストの寄せる方向
	        //className:列のクラス名 editable:編集可能にするかどうかの設定。trueかfalseで指定する。
	        //editType:editableが有効な場合のセルの編集方法の指定。ラジオボタン、チェックボックス等を指定する。
	        //editoptions:セレクトメニューでのセル編集時に、選択項目のソースとなる連想配列を指定する。
	        //sortable:ソート可能かどうかの設定。 sorttype:ソートのデータ型を指定する。

	        //発注日チェックボックス列
	        { name: "send_check", index:"send_check", width: 32, align:"center", className: "send_check", editable: true, sortable:false},
	        //発注日列。dateTypeを日付型にする。
	        { name: "order_date", index:"send_date", width: 100, align:"left", className: "send_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
			//発注コード列
	        { name: "order_code", index:"send_code", width: 100, align:"left", className: "send_code", editable: true, sortable:true, sorttype:'text'},
	        //発注先列
	        { name: "send_place", index:"send_place", width: 100,  align:"left", className: " send_place", editable: true, sortable:true, sorttype:'text'},
	        //発送指定日列
	        { name: "delivery_date", index:"delivery_date", width: 100, align:"left", className: "delivery_date", editable: true, sortable:true, sorttype:'date',datefmt:"yyyy-mm-dd",editrules:{date:true}},
	        //入力者列
	        { name: "scribedby", index:"scribedby", width: 100, align:"left", className: "scribedby", editable: true, sortable:true, sorttype:'text'},
	        //承認者列
	        { name: "permiter", index:"permiter", width: 100, align:"left", className: "permiter", editable: false, sortable:true, sorttype:'text'},
	        //合計金額列
	        { name: "amount", index:"amount", width: 100, align:"left", className: "amount", editable: false, sortable:true, sorttype:'int'}
	];

	//fig.3-1 発注画面、新規編集画面のリストの列定義。
	//列の設定について、特筆すべき点のみ補足します。
	colData['sendDataAddEdit'] = [
	        //name:名前 index:ソート時の名前 width:列幅 dataType:データの型 align:セルのテキストの寄せる方向
	        //className:列のクラス名 editable:編集可能にするかどうかの設定。trueかfalseで指定する。
	        //editType:editableが有効な場合のセルの編集方法の指定。ラジオボタン、チェックボックス等を指定する。
	        //editoptions:セレクトメニューでのセル編集時に、選択項目のソースとなる連想配列を指定する。
	        //sortable:ソート可能かどうかの設定。 sorttype:ソートのデータ型を指定する。

	        //チェックボックス列
	        { name: "send_check", index:"send_check", width: 32, align:"center", className: "send_check", editable: true, sortable:false},
	        //製品番号列。dateTypeを日付型にする。
	        { name: "productNumber", index:"productNumber", width: 80, align:"left", className: "productNumber", editable: true, sortable:true, sorttype:'int'},
			//製品種別列
	        { name: "productType", index:"productType", width: 80, align:"left", className: "productType", editable: true, sortable:true, sorttype:'text'},
	        //製品名列
	        { name: "productName", index:"productName", width: 160, align:"left", className: " productName", editable: true, sortable:true, sorttype:'text'},
	        //単価列
	        { name: "unitPrice", index:"unitPrice", width: 64, align:"left", className: "unitPrice", editable: true, sortable:true, sorttype:'int'},
	        //個数列
	        { name: "number", index:"number", width: 64, align:"left", className: "number", editable: true, sortable:true, sorttype:'int'},
	        //小計列
	        { name: "subtotal", index:"subtotal", width: 64, align:"left", className: "subtotal", editable: false, sortable:true, sorttype:'int'},
	        //顧客名列
	        { name: "customer", index:"customer", width: 64, align:"left", className: "customer", editable: false, sortable:true, sorttype:'int'},
	        //納品場所列
	        { name: "deliveryPlace", index:"deliveryPlace", width: 80, align:"left", className: "deliveryPlace", editable: false, sortable:true, sorttype:'texts'}
	];

	//receivedDataのjqGridのルールを連想配列に設定する。
	objRules['receivedData'] = { 
		//データの取得元を設定する。
		url:'json/receivedData.json',
		//JSONデータをデータソースとして利用する。
		datatype:"json",
		//基本の幅を指定する。
		width: 748,
		//グリッドのリサイズ時の最大幅、最小幅を指定する。
		gridResize: {minWidth:310, maxWidth:576},
		//表部分の高さを指定する。
		height: 280,
		//列名の表示の配列をセットする。
		colNames: colNamesLists['receivedData'],
		//列定義のデータをセットする。
		colModel: colData['receivedData'],
		caption: '受注リスト'	,	//リストのタイトルを設定する。
		cellEdit: false,    	// セルの編集を無効にする。
		//セルを編集してもサーバとの通信をしないように設定する。
		cellsubmit: 'clientArray',
        sortorder: "desc",	// 降順ソートをする
        shrinkToFit: false,	// 列幅の自動調整を行う。
		//行を選択する前に実行される関数。
		beforeSelectRow:function(rowid, e){
        	return true;	//onSelectRowイベントへ移行する
		},
		//行を選択した後に実行される関数。
		onSelectRow:function(rowid, status, e){
		}
	};

	//sendDataのjqGridのルールを連想配列に設定する。
	objRules['sendData'] = { 
		//データの取得元を設定する。
		url:'json/sendData.json',
		//JSONデータをデータソースとして利用する。
		datatype:"json",
		//基本の幅を指定する。
		width: 748,
		//グリッドのリサイズ時の最大幅、最小幅を指定する。
		gridResize: {minWidth:310, maxWidth:576},
		//表部分の高さを指定する。
		height: 280,
		//列名の表示の配列をセットする。
		colNames: colNamesLists['sendData'],
		//列定義のデータをセットする。
		colModel: colData['sendData'],
		caption: '発注リスト'	,	//リストのタイトルを設定する。
		cellEdit: false,    	// セルの編集を無効にする。
		//セルを編集してもサーバとの通信をしないように設定する。
		cellsubmit: 'clientArray',
        sortorder: "desc",	// 降順ソートをする
        shrinkToFit: false,	// 列幅の自動調整を行う。
		//行を選択する前に実行される関数。
		beforeSelectRow:function(rowid, e){
        	return true;	//onSelectRowイベントへ移行する
		},
		//行を選択した後に実行される関数。
		onSelectRow:function(rowid, status, e){
		}
	};

	//sendDataAddEditのjqGridのルールを連想配列に設定する。
	objRules['sendDataAddEdit'] = { 
		//データの取得元を設定する。
		url:'json/sendDataAddEdit.json',
		//JSONデータをデータソースとして利用する。
		datatype:"json",
		//基本の幅を指定する。
		width: 768,
		//グリッドのリサイズ時の最大幅、最小幅を指定する。
		gridResize: {minWidth:310, maxWidth:576},
		//表部分の高さを指定する。
		height: 280,
		//列名の表示の配列をセットする。
		colNames: colNamesLists['sendDataAddEdit'],
		//列定義のデータをセットする。
		colModel: colData['sendDataAddEdit'],
		caption: '製品詳細'	,	//リストのタイトルを設定する。
		cellEdit: false,    	// セルの編集を無効にする。
		//セルを編集してもサーバとの通信をしないように設定する。
		cellsubmit: 'clientArray',
        sortorder: "desc",	// 降順ソートをする
        shrinkToFit: false,	// 列幅の自動調整を行う。
		//行を選択する前に実行される関数。
		beforeSelectRow:function(rowid, e){
        	return true;	//onSelectRowイベントへ移行する
		},
		//行を選択した後に実行される関数。
		onSelectRow:function(rowid, status, e){
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
		//設定用の連想配列を使い、jqGridの表を作る。
		$('#' + target).jqGrid(objRules[target]);
	}

	//ドキュメントの配置完了後(= 全てのファイルを読み込んだ後)
//	$(document).ready(function(){
//		makeGrid('receivedData');	//グリッドを作成する
//	});