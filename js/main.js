//データ定義開始

	windowHeight = 0;	//画面の高さを格納する変数。各要素の高さの基準となる
	buttonWidthRatio = 2;	//ボタンの縦横比。縦1に対しての横の比率
	maxHeight = 1024;	//最大の高さ
	maxWidth = 768;		//最大の幅
	aLineHeight = 3.61;			//テキストボックス等の1行分の高さの割合
	heightRatio = 12;			//divタグとテキストボックスの高さの縦横比の横の比率
	contentWidthParcent = 0.98;	//marginを抜いた画面幅の割合
	baseFontSize = 100;			//タグに設定されたフォントサイズのデフォルトの割合
	fontRatio = 25.0;			//画面縮小時に行うフォントサイズの縮小度合いを決める変数
	spRatio	= 1.5;				//スマホ横幅用比率
	tbRatio	= 2.0;				//タブレット横幅用比率
	spWidth = 480;				//スマホ用レイアウトになる幅
	strechFix1 = 20;			//文字伸縮の修正値1
	strechFix2 = 2.0;			//文字伸縮の修正値2
	strechFix3 = 2.0;			//Fig.1のボタンの高さ用修正値
	pulldownRatio = 2.0;		//プルダウンメニューの高さの画面に対する割合
	pageMapping = '';			//テスト用URLのHTMLソースへアクセスするための文字列
	xmlMapping = 'xml/';		//テスト用URLのXMLソースへアクセスするための文字列
	jspString = '.html';		//jspの拡張子。現状はhtmlのみで運用しているためhtmlの拡張子
	tbHeight = 32;				// テキストボックスの高さ
	billbuttonsWidth = 0;		// 伝票ボタンの幅合計
	mainWidth	 = 0;			// mainのdivタグの幅
	buttonsparentsWidth = 0;	// PDF生成ボタン親要素の幅
	labelMax2WidthBorder = [269, 265];	//labelMax2Resizeでチェックするテキストボックスの幅の基準値の配列
	labelMax6WidthBorder = [305, 301, 202];	//labelMax6Resizeでチェックするテキストボックスの幅の基準値の配列
	labelMinWidthLabelMax6 = 86;			//labelMax6の画面のラベルの最低幅 
	//フォントサイズを動的にリサイズする対象。
	fontResizeTargets = ['#header-title,.voucher-status-text,.ui-dropdownchecklist-text,.space_width,.ui-autocomplete ','.custom-combobox input','.before_list_line label','#tab-container ul li','#tab-container .edit_buttons .normal-button','.space_width_syubetu label','.line_table td'];
	//補正値を含めた上でフォントサイズを動的にリサイズする対象。
	fontResizeTargetsWithFix = ['.normal-button','.users_table th'];
	dropdownPerMain = 0.33;	//ドロップダウンチェックリストの幅の割合
	isChange = 0;	//リストの変更を感知する変数
	editingRow = '';	//編集中のセルの行
	editingCol = '';	//編集中のセルの列
	editingValue = '';	//編集中のセルの値
	editingTable = '';	//編集中のテーブル
	editingRowId = '';	//編集中のセルの行のID
	//プルダウンメニューを利用する項目の名前を配列に格納
	pulldowncontents = ['person', 'customer', 'product', 'categories', 'custom-type', 'prefecture'];
	//プルダウンメニューの項目のカテゴリーを格納する2次連想配列
	pulldowncategories = {};
	
	xmlselector = '';	//xmlのセレクタを保存する変数
	xmls = new Array();	//xmlのデータを保存する配列。

	selectedCategory = '';	//選択した種別を格納する変数
	mainWidthPercent = 0.972;		//mainのタグの幅に対するリスト幅の割合
	tabContainerPercent = 0.985;	//タブの幅に対するリスト幅の割合
	tabContainerWidth = 0;				//タブの幅を格納する変数

	values = '';	// 編集用データを格納する変数

	//どの画面の追加ダイアログがどの設定データを使うかの設定の連想配列。
	var gridOptionIndex = {'fig2-1':'3','fig3-1':'3','fig5':'0','fig7-0':'1','fig7-1':'2','fig9':'4','fig10':'3'}
	
	//テキストボックスの各要素の幅(%指定)の値を格納する配列。
	//1 - それぞれの配列の合計でテキストボックスの取れる割合を算出する
	var widthSum = [
//					tb左pad 右pad ラベル ボタン ボタン左margin+余白
					[0.01, 0.01, 0.274, 0.0849, 0.08],		//2段組テキストボックス
					[0.01, 0.01, 0.145, 0.0245, 0.04],		//1段組テキストボックス
					[0.01, 0.01, 0.11, 0.052741, 0.074],	//種別とセットの製品名
					[0.01, 0.01, 0.11, 0.052741, 0.35],		//製品名とセットの種別
					['label:first', 'button:first', 10.00],					//左列のもの
					['label:first', 'button:first', 14.00],					//右列のもの
					['label:first', 'button:first', 8.00],					//右列のもの
					['label:first', 'button:first', 12.00]					//右列のもの
					];

	//リサイズを行う要素のセレクタを配列に格納する。
	tbResizeArray = [
	                 	'.parallel-text input',
	                 	'.single-line-text input',
	                 	'.product-select input',
	                 	'.product-category input'
	                 ];

	//固定値計算でリサイズを行う要素のセレクタを配列に格納する。
	tbResizeOnFixedArray = [
	                        '.page:first #fig7-1 .parallel-text.left,.page:first .label_max2:visible .parallel-text.left,.page:first .label_max5:visible .parallel-text.left,.page:first .label_max6:visible .parallel-text.left',
	                        '.page:first #fig7-1 .parallel-text.right', 
	                        '.page:first .label_max5:visible .parallel-text.right,.page:first .label_max6:visible .parallel-text.right',
	                        '.page:first #fig5.label_max2:visible .parallel-text.right'
	                      ];

	//tbResizeArrayの要素数をグローバル変数に格納する。
	var tbResizeArrayLength = tbResizeArray.length;
	//リサイズを行うセレクタ文字列の数全体をグローバル変数に格納する。widthSumの要素数と一致する。
	var tbResizeOnFixedArrayLength = tbResizeOnFixedArray.length + tbResizeArrayLength;
	
	//現状画面崩れが起こる幅を格納する変数
	var borderWidth = [];
		borderWidth[0] = 528; 
		borderWidth[1] = 1000;
		
	//ツールチップ用のテキストを格納する配列
	var toolTipText = {
		add: '項目を追加します。',
		edit: '項目を編集します',
		"delete":'項目を削除します',
		"select":'項目を選択します。',
		stock:'入庫処理をします。',
		summary:'項目を削除します',
		"close":'このページを閉じます。',
		connect:'伝票の結合を行います。',
		calendar:'カレンダーから日付を選択します。',
		setting:'各ページへのリンクを表示します。',
		"search":'検索を行います。',
		register:'情報の登録を行います。',
		cancel:'編集した項目を戻します。'
	};
	
	// datepikcerの汎用設定
	$.datepicker.setDefaults({
		// datepickerを開く前に
		beforeShow:function(){
			// 開いているプルダウンを消す
			$('.ui-autocomplete:visible').toggle();
		}
	});

	
	//リストのダミーデータ
	var listData = new Array();
	//連想配列として、各ページのリストのデータを格納する
	//fig2のデータ。受注伝票画面
	listData['fig2'] = [
		{No:'001',product_number:'WL-1200', product_category:'二管',product:'断熱二重直管1200mm',lot_number:'001',price:43700, quantity:2, ammount:87400, customer:'株式会社A'},
		{No:'002',product_number:'WP-TP02', product_category:'二管',product:'チムニートップ',lot_number:'003',price:29000, quantity:1, ammount:29000, customer:'株式会社A'},
		{No:'003',product_number:'WS-DBP0', product_category:'二支',product:'結露防止板',lot_number:'010', price:9000, quantity:1, ammount:9000, customer:'株式会社A'}
	];
	//fig2-1のデータ。受注伝票の追加編集画面
	listData['fig2-1'] = [
		{No:'001', serial_No:'0001-0001', product_category:'二管', customer:'株式会社A'},
		{No:'002', serial_No:'0001-0002', product_category:'二管', customer:'株式会社A'},
		{No:'003', serial_No:'0001-0003', product_category:'二管', customer:'株式会社B'}
	];
	//fig3のデータ。発注伝票画面
	listData['fig3'] = [
		{No:'001',product_number:'SL-1000-B',product:'シングル直管1000mm φ150 黒' ,price:10000, quantity:2, ammount:20000, customer:'株式会社E'},
		{No:'002',product_number:'SL-E030-B',product:'シングルエルボー管30°黒' ,price:8000, quantity:2, ammount:16000, customer:'合同会社E'},
		{No:'003',product_number:'WS-CL01',product:'ストームカラー　ネック付', price:12800, quantity:4, ammount:51200, customer:'合同会社E'}
	];
	
	//fig3-1のデータ。発注伝票の追加編集画面
	listData['fig3-1'] = [
		{No:'001', serial_No:'0001-0001', product_category:'二管', status:'ノーマル', check:'<input type="checkbox" class="list_select">'},
		{No:'002', serial_No:'0001-0002', product_category:'二管', status:'未納', check:'<input type="checkbox" class="list_select">'},
		{No:'003', serial_No:'0001-0003', product_category:'二管', status:'キズ', check:'<input type="checkbox" class="list_select">'}
	];
	
	//fig4のデータ
	listData['fig4'] = 	[
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', customer_type:'代', customer:'合同会社H', charger:'佐藤祐作', tel:'03-1234-5678', fax:'03-1234-5679',  update:'14/02/10', check:'<input type="checkbox">'},
        {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', customer_type:'代', customer:'合同会社I', charger:'山田太郎', tel:'0277-33-1234', fax:'0277-33-1235', update:'14/02/10', check:'<input type="checkbox">'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', customer_type:'加', customer:'合同会社I', charger:'木村隆', tel:'028-302-3214', fax:'028-302-3215', update:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig4-1のデータ
	listData['fig4-1'] = 	[
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
        {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	];

	//fig4-3のデータ
	listData['fig4-3'] = 	[
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	                     	 ];
	
	//fig4-4のデータ
	listData['fig4-4'] = 	[
	                     	 {No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
	                     	 {No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
	                     	 {No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
	                     	 {No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	                     	 ];
	
	//fig4-5のデータ
	listData['fig4-5'] = 	[
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	                     	 ];
	
	//fig4-6のデータ
	listData['fig4-6'] = 	[
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
	                     	 {check:'<input type="checkbox" name="checkbox" class="checkbox" value="checked">', No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	                     	 ];
	
	//fig5のデータ
	listData['fig5'] = 	[
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', product_type:'二管', product_code:'1111', product:'断熱二重直管1200mm', maker:'株式会社A', maker_charger:'佐藤祐作', tel:'03-1234-5678', fax:'03-1234-5679', date:'14/02/10', check:'<input type="checkbox">'},
        {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', product_type:'二管', product_code:'11-11', product:'断熱二重直管500mm', maker:'株式会社A', maker_charger:'佐藤祐作', tel:'0277-33-1234', fax:'0277-33-1235', date:'14/02/10', check:'<input type="checkbox">'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', product_type:'二管', product_code:'1111x', product:'断熱二重直管120mm', maker:'株式会社B', maker_charger:'木村隆', tel:'028-302-3214', fax:'028-302-3215', date:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig5-1のデータ
	listData['fig5-1'] = [
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', distribute:'製', customer:'合同会社F', order_value:'10000'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', distribute:'製', customer:'合同会社F', order_value:'13800'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', distribute:'倉', customer:'合同会社G', order_value:'9000'}
	];	
	//fig6のデータ
	listData['fig6'] = 	[
		{No:'001', customer:'株式会社A', customer_type:'顧', charger:'山田太郎', tel:'03-1234-5678<br>03-1234-5679', address:'東京都新宿区新宿5丁目2-1', check:'<input type="checkbox">'},
		{No:'002', customer:'株式会社B', customer_type:'製', charger:'木村隆', tel:'0277-33-1234<br>0277-33-1235', address:'群馬県桐生市新宿2-1-3', check:'<input type="checkbox">'},
		{No:'003', customer:'合同会社C', customer_type:'加',charger:'佐藤祐作',tel:'028-302-3214<br>028-302-3215', address:'栃木県宇都宮市大通り3-13-5', check:'<input type="checkbox">'}
	];
	//fig6のデータ
	listData['fig6-1'] = 	[
		{No:'001', customer:'株式会社A', customer_type:'顧', charger:'山田太郎', tel:'03-1234-5678<br>03-1234-5679', address:'東京都新宿区新宿5丁目2-1', check:'<input type="checkbox">'},
		{No:'002', customer:'株式会社B', customer_type:'製', charger:'木村隆', tel:'0277-33-1234<br>0277-33-1235', address:'群馬県桐生市新宿2-1-3', check:'<input type="checkbox">'},
		{No:'003', customer:'合同会社C', customer_type:'加',charger:'佐藤祐作',tel:'028-302-3214<br>028-302-3215', address:'栃木県宇都宮市大通り3-13-5', check:'<input type="checkbox">'}
	];
	//fig6のデータ
	listData['fig6-2'] = 	[
		{No:'001', customer:'株式会社A', customer_type:'顧', charger:'山田太郎', tel:'03-1234-5678<br>03-1234-5679', address:'東京都新宿区新宿5丁目2-1', check:'<input type="checkbox">'},
		{No:'002', customer:'株式会社B', customer_type:'製', charger:'木村隆', tel:'0277-33-1234<br>0277-33-1235', address:'群馬県桐生市新宿2-1-3', check:'<input type="checkbox">'},
		{No:'003', customer:'合同会社C', customer_type:'加',charger:'佐藤祐作',tel:'028-302-3214<br>028-302-3215', address:'栃木県宇都宮市大通り3-13-5', check:'<input type="checkbox">'}
	];
	//fig6のデータ
	listData['fig6-3'] = 	[
		{No:'001', customer:'株式会社A', customer_type:'顧', charger:'山田太郎', tel:'03-1234-5678<br>03-1234-5679', address:'東京都新宿区新宿5丁目2-1', check:'<input type="checkbox">'},
		{No:'002', customer:'株式会社B', customer_type:'製', charger:'木村隆', tel:'0277-33-1234<br>0277-33-1235', address:'群馬県桐生市新宿2-1-3', check:'<input type="checkbox">'},
		{No:'003', customer:'合同会社C', customer_type:'加',charger:'佐藤祐作',tel:'028-302-3214<br>028-302-3215', address:'栃木県宇都宮市大通り3-13-5', check:'<input type="checkbox">'}
	];
	//fig7のデータ
	listData['fig7-0'] = [
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', product:'フラッシング3寸', product_category:'フラ', customer:'合同会社H', stock:10, delivery_date:'14/02/10', check:'<input type="checkbox">'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', product:'チムニーフラッシング　□650', product_category:'フラ', customer:'合同会社H', stock:3, delivery_date:'14/02/10', check:'<input type="checkbox">'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', product:'炉台キット2枚組　CB30', product_category:'炉台',customer:'合同会社H' , stock:5, delivery_date:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig7-1のデータ
	listData['fig7-1'] = [
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', product_number:'WR-FL03', product:'フラッシング3寸', order_date:'14/02/10', quantity:10, voucher_No:'00325'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', product_number:'WS-CF65', product:'チムニーフラッシング　□650', order_date:'14/02/10',  quantity:3, voucher_No:'00325'},
		{radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', product_number:'WN-BS30', product:'炉台キット2枚組　CB30', order_date:'14/04/21'  , quantity:5,  voucher_No:'00326'}
	];
	//fig8-3のデータ
	listData['fig8-3'] = [
		{No:'001', customer:'株式会社A', month_1:'120', month_2:'140', month_3:'100', month_4:'200', month_5:'150', month_6:'100', month_7:'80', month_8:'145', month_9:'123', month_10:'84', month_11:'91', month_12:'99', sum:'1432' },
		{No:'002', customer:'株式会社B', month_1:'80', month_2:'120', month_3:'120', month_4:'140', month_5:'120',
		 month_6:'100', month_7:'140', month_8:'50', month_9:'123', month_10:'84', month_11:'84', month_12:'100', sum:'1261' },
		{No:'003', customer:'合同会社D', month_1:'70', month_2:'100', month_3:'100', month_4:'200', month_5:'99',
		 month_6:'100', month_7:'80', month_8:'145', month_9:'145', month_10:'84', month_11:'91', month_12:'99', sum:'1313' }
	];
	//fig8-4のデータ
	listData['fig8-3'] = [
	                      {No:'001', customer:'株式会社A', month_1:'120', month_2:'140', month_3:'100', month_4:'200', month_5:'150', month_6:'100', month_7:'80', month_8:'145', month_9:'123', month_10:'84', month_11:'91', month_12:'99', sum:'1432' },
	                      {No:'002', customer:'株式会社B', month_1:'80', month_2:'120', month_3:'120', month_4:'140', month_5:'120',
	                    	  month_6:'100', month_7:'140', month_8:'50', month_9:'123', month_10:'84', month_11:'84', month_12:'100', sum:'1261' },
	                    	  {No:'003', customer:'合同会社D', month_1:'70', month_2:'100', month_3:'100', month_4:'200', month_5:'99',
	                    		  month_6:'100', month_7:'80', month_8:'145', month_9:'145', month_10:'84', month_11:'91', month_12:'99', sum:'1313' }
	                    	  ];

	//fig9のデータ
	listData['fig9'] = 	[
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', customer_type:'代', customer:'合同会社H', charger:'佐藤祐作', tel:'03-1234-5678', fax:'03-1234-5679',  update:'14/02/10', check:'<input type="checkbox">'},
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', customer_type:'代', customer:'合同会社I', charger:'山田太郎', tel:'0277-33-1234', fax:'0277-33-1235', update:'14/02/10', check:'<input type="checkbox">'},
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', customer_type:'加', customer:'合同会社I', charger:'木村隆', tel:'028-302-3214', fax:'028-302-3215', update:'14/04/21', check:'<input type="checkbox">'}
	                   	 ];

	//fig10のデータ
	listData['fig10'] = [
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'001', customer_type:'代', customer:'合同会社H', charger:'佐藤祐作', tel:'03-1234-5678', fax:'03-1234-5679',  update:'14/02/10', check:'<input type="checkbox">'},
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'002', customer_type:'代', customer:'合同会社I', charger:'山田太郎', tel:'0277-33-1234', fax:'0277-33-1235', update:'14/02/10', check:'<input type="checkbox">'},
	                   	 {radio:'<input type="radio" name="radio" class="radio" value="checked">', No:'003', customer_type:'加', customer:'合同会社I', charger:'木村隆', tel:'028-302-3214', fax:'028-302-3215', update:'14/04/21', check:'<input type="checkbox">'}
	                    	  ];
	
	//fig11のデータ
	listData['fig11'] = [
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                     ];
	
	//fig12-0のデータ
	listData['fig12-0'] = [
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                       ];
	
	//fig12-1のデータ
	listData['fig12-1'] = [
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                     {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                     ];
	
	//fig12-0のデータ
	listData['fig13-0'] = [
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                       ];
	
	//fig12-1のデータ
	listData['fig13-1'] = [
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                       ];
	
	//fig12-0のデータ
	listData['fig13-2'] = [
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                       ];
	
	//fig12-1のデータ
	listData['fig13-3'] = [
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'第二営業部', content_type:'商品不備', customer:'合同会社J', content:'なし', product_type:'03-1234-5678', product:'x-1234-5679',  other:'商品に欠けあり', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'総務部', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'0277-33-1234', product:'v-33-1235', other:'商談中にお茶をこぼされた', check:'<input type="checkbox">'},
	                       {radio:'<input type="radio" name="radio" class="radio" value="checked">', target:'假屋崎利明', content_type:'接客対応', customer:'合同会社I', content:'なし', product_type:'028-302-3214', product:'e-302-3215', other:'飛び込み営業で不快な思いをさせられた', check:'<input type="checkbox">'}
	                       ];
	
	/* fig8-4のリストデータの元となる配列。商品の価格 */
	itemprice = [43.7, 24.0, 13.5, 27.8];
	/* fig8-4のリストデータの元となる２次元配列。売り上げ個数 */
	itemquantity = [[2, 4, 1, 3, 5, 7, 2, 1, 5, 6, 7, 5],
					[1, 2, 2, 7, 3, 6, 4, 2, 5, 7, 6, 2],
					[3, 1, 1, 6, 4, 10, 3, 1, 6, 8, 6, 3],
					[1, 2, 1, 7, 2, 1, 3, 1, 7, 7, 6, 4]
					];

	//fig8-4のデータ
	listData['fig8-4'] = [
		{No:'001', product:'断熱二重直管1200mm', month_1:Math.round(itemprice[0]) * itemquantity[0][0],
		 month_2:Math.round(itemprice[0]) * itemquantity[0][1],
		  month_3:Math.round(itemprice[0]) * itemquantity[0][2],
		   month_4:Math.round(itemprice[0]) * itemquantity[0][3],
		    month_5:Math.round(itemprice[0]) * itemquantity[0][4],
		 month_6:Math.round(itemprice[0]) * itemquantity[0][5],
		  month_7:Math.round(itemprice[0]) * itemquantity[0][6],
		   month_8:Math.round(itemprice[0]) * itemquantity[0][7],
		    month_9:Math.round(itemprice[0]) * itemquantity[0][8],
			 month_10:Math.round(itemprice[0]) * itemquantity[0][9],
			  month_11:Math.round(itemprice[0]) * itemquantity[0][10],
			   month_12:Math.round(itemprice[0]) * itemquantity[0][11],
			    sum:Math.round(itemprice[0]) *
			   (itemquantity[0][0] + 
				itemquantity[0][1] + 
				itemquantity[0][2] + 
				itemquantity[0][3] + 
				itemquantity[0][4] + 
				itemquantity[0][5] + 
				itemquantity[0][6] + 
				itemquantity[0][7] + 
				itemquantity[0][8] + 
				itemquantity[0][9] + 
				itemquantity[0][10] + 
				itemquantity[0][11])
		},
		{No:'002', product:'断熱二重直管500mm', month_1:Math.round(itemprice[1]) * itemquantity[1][0],
		 month_2:Math.round(itemprice[1]) * itemquantity[1][1],
		  month_3:Math.round(itemprice[1]) * itemquantity[1][2],
		   month_4:Math.round(itemprice[1]) * itemquantity[1][3],
		    month_5:Math.round(itemprice[1]) * itemquantity[1][4],
		 month_6:Math.round(itemprice[1]) * itemquantity[1][5],
		  month_7:Math.round(itemprice[1]) * itemquantity[1][6],
		   month_8:Math.round(itemprice[1]) * itemquantity[1][7],
		    month_9:Math.round(itemprice[1]) * itemquantity[1][8],
			 month_10:Math.round(itemprice[1]) * itemquantity[1][9],
			  month_11:Math.round(itemprice[1]) * itemquantity[1][10],
			   month_12:Math.round(itemprice[1]) * itemquantity[1][11],
			    sum:Math.round(Math.round(itemprice[1]) *
			   (itemquantity[1][0] + 
				itemquantity[1][1] + 
				itemquantity[1][2] + 
				itemquantity[1][3] + 
				itemquantity[1][4] + 
				itemquantity[1][5] + 
				itemquantity[1][6] + 
				itemquantity[1][7] + 
				itemquantity[1][8] + 
				itemquantity[1][9] + 
				itemquantity[1][10] + 
				itemquantity[1][11]))
		},
		{No:'003', product:'断熱二重直管120mm', month_1:Math.round(itemprice[2]) * itemquantity[2][0],
		 month_2:Math.round(itemprice[2]) * itemquantity[2][1],
		  month_3:Math.round(itemprice[2]) * itemquantity[2][2],
		   month_4:Math.round(itemprice[2]) * itemquantity[2][3],
		    month_5:Math.round(itemprice[2]) * itemquantity[2][4],
		 month_6:Math.round(itemprice[2]) * itemquantity[2][5],
		  month_7:Math.round(itemprice[2]) * itemquantity[2][6],
		   month_8:Math.round(itemprice[2]) * itemquantity[2][7],
		    month_9:Math.round(itemprice[2]) * itemquantity[2][8],
			 month_10:Math.round(itemprice[2]) * itemquantity[2][9],
			  month_11:Math.round(itemprice[2]) * itemquantity[2][10],
			   month_12:Math.round(itemprice[2]) * itemquantity[2][11],
			    sum:Math.round(itemprice[2]) *
			   (itemquantity[2][0] + 
				itemquantity[2][1] + 
				itemquantity[2][2] + 
				itemquantity[2][3] + 
				itemquantity[2][4] + 
				itemquantity[2][5] + 
				itemquantity[2][6] + 
				itemquantity[2][7] + 
				itemquantity[2][8] + 
				itemquantity[2][9] + 
				itemquantity[2][10] + 
				itemquantity[2][11])
		}
	];
	
	//リスト内のプルダウンメニューのデータを格納する配列
	var pulldown = new Array();
		//人物(担当者)のプルダウンメニュー
		pulldown['person'] = {value:'木村隆:木村隆; 佐藤祐作:佐藤祐作; 山田太郎:山田太郎'};
		//商品のプルダウンメニュー 
		pulldown['product'] = {value:'フラッシング3寸:フラッシング3寸;チムニーフラッシング:チムニーフラッシング　□650;炉台キット2枚組　CB30:炉台キット2枚組　CB30;煙突ヒートシールド:煙突ヒートシールド;スチールステージプレート　角:スチールステージプレート　角;バーベキュースタンド:バーベキュースタンド;ストームカラー　ネック付:ストームカラー　ネック付;チムニートップ:チムニートップ;結露防止板:結露防止板;シングル直管1000mm:シングル直管1000mm φ150 黒;シングルエルボー管30°黒:シングルエルボー管30°黒;断熱二重直管120mm:断熱二重直管120mm;断熱二重直管500mm:断熱二重直管500mm;断熱二重直管1200mm:断熱二重直管1200mm'};
//		pulldown['product'] = {value:'フラッシング3寸:<span class="list-name">フラッシング3寸</span>;チムニーフラッシング　□650<:<span class="list-name">チムニーフラッシング　□650</span>;炉台キット2枚組　CB30:<span class="list-name">炉台キット2枚組　CB30</span>;煙突ヒートシールド:<span class="list-name">煙突ヒートシールド</span>;スチールステージプレート　角:<span class="list-name">スチールステージプレート　角</span>;バーベキュースタンド:<span class="list-name">バーベキュースタンド</span>;ストームカラー　ネック付:<span class="list-name">ストームカラー　ネック付</span>;チムニートップ:<span class="list-name">チムニートップ</span>;結露防止板:<span class="list-name">結露防止板</span>;シングル直管1000mm φ150 黒:<span class="list-name">シングル直管1000mm φ150 黒</span>;シングルエルボー管30°黒:<span class="list-name">シングルエルボー管30°黒</span>;断熱二重直管120mm:<span class="list-name">断熱二重直管120mm</span>;断熱二重直管500mm:<span class="list-name">断熱二重直管500mm</span>;断熱二重直管1200mm:<span class="list-name">断熱二重直管1200mm</span>'};
		//商品のプルダウンメニュー。絞込み対応版
		pulldown['product-for-sort'] = {value:'フラッシング3寸:フラッシング3寸;チムニーフラッシング:チムニーフラッシング　□650;炉台キット2枚組　CB30:炉台キット2枚組　CB30;煙突ヒートシールド:煙突ヒートシールド;スチールステージプレート　角:スチールステージプレート　角;バーベキュースタンド:バーベキュースタンド;ストームカラー　ネック付:ストームカラー　ネック付;チムニートップ:チムニートップ;結露防止板:結露防止板;シングル直管1000mm:シングル直管1000mm φ150 黒;シングルエルボー管30°黒:シングルエルボー管30°黒;断熱二重直管120mm:断熱二重直管120mm;断熱二重直管500mm:断熱二重直管500mm;断熱二重直管1200mm:断熱二重直管1200mm'};
//		pulldown['product-for-sort'] = {value:'フラッシング3寸:<span class="list-name" name="フラ">フラッシング3寸</span>;チムニーフラッシング:<span class="list-name" name="フラ" >チムニーフラッシング　□650</span>;炉台キット2枚組　CB30:<span class="list-name" name="炉台" >炉台キット2枚組　CB30</span>;煙突ヒートシールド:<span class="list-name" name="一支" >煙突ヒートシールド</span>;スチールステージプレート　角:<span class="list-name" name="アク" >スチールステージプレート　角</span>;バーベキュースタンド:<span class="list-name" name="アク" >バーベキュースタンド</span>;ストームカラー　ネック付:<span class="list-name" name="フラ"  name="二支" >ストームカラー　ネック付</span>;チムニートップ:<span class="list-name" name="二管" >チムニートップ</span>;結露防止板:<span class="list-name" name="二支" >結露防止板</span>;シングル直管1000mm:<span class="list-name" name="一管" >シングル直管1000mm φ150 黒</span>;シングルエルボー管30°黒:<span class="list-name" name="一管" >シングルエルボー管30°黒</span>;断熱二重直管120mm:<span class="list-name" name="二管" >断熱二重直管120mm</span>;断熱二重直管500mm:<span class="list-name" name="二管" >断熱二重直管500mm</span>;断熱二重直管1200mm:<span class="list-name" name="二管" >断熱二重直管1200mm</span>'};
		//pulldown['product-for-sort'] = {value:'フラッシング3寸:<span class="list-name">フラッシング3寸</span><span name="フラッシング3寸"/> </span>;チムニーフラッシング:<span class="list-name">チムニーフラッシング　□650</span><span> フラ</span> ;炉台キット2枚組　CB30:<span class="list-name">炉台キット2枚組　CB30</span><span> 炉台</span>;煙突ヒートシールド:<span class="list-name">煙突ヒートシールド</span><span> 一支</span>;スチールステージプレート　角:<span class="list-name">スチールステージプレート　角</span><span> アクセ</span>;バーベキュースタンド:<span class="list-name">バーベキュースタンド</span><span> アクセ</span>;ストームカラー　ネック付:<span class="list-name">ストームカラー　ネック付</span><span> 二支</span>;チムニートップ:<span class="list-name">チムニートップ</span><span> 二管</span>;結露防止板:<span class="list-name">結露防止板</span><span> 二支</span>;シングル直管1000mm:<span class="list-name">シングル直管1000mm φ150 黒</span><span> 一管</span>;シングルエルボー管30°黒:<span class="list-name">シングルエルボー管30°黒</span><span> 一管</span>;断熱二重直管120mm:<span class="list-name">断熱二重直管120mm</span><span> 二管</span>;断熱二重直管500mm:<span class="list-name">断熱二重直管500mm</span><span> 二管</span>;断熱二重直管1200mm:<span class="list-name">断熱二重直管1200mm</span><span> 二管</span>'};
		//商品種別のプルダウンメニュー
		pulldown['product_category'] = {value:'二管:二管; 一管:一管; 炉台:炉台; 二支:二支;一支:一支;アク:アク;フラ:フラ'};
		//顧客のプルダウンメニュー 
		pulldown['customer'] = {value:'株式会社A:株式会社A;株式会社B:株式会社B;株式会社C:株式会社C;合同会社D:合同会社D;合同会社E:合同会社E;合同会社F:合同会社F;合同会社G:合同会社G;合同会社H:合同会社H;合同会社I:合同会社I'}; 
		//顧客種別のプルダウンメニュー
		pulldown['customer_type'] = {value:'代:代;製:製;加:加;倉:倉;顧:顧'};	
		// クレーム内容の種別のプルダウンメニュー
		pulldown['clame_content_type'] = {value:'なし:なし;商品不備:商品不備;接客対応:接客対応;遅延:遅延;その他:その他'};	
		// クレーム内容既成内容のプルダウンメニュー
		pulldown['clame_content'] = {value:':なし;商品不備:商品不備;接客対応:接客対応;遅延:遅延;その他:その他'};	
		
	//各fig毎の列設定
	var colModelData = new Array();
	//fig.3 8.1 発注(注文)機能
	colModelData['fig3'] = [
	        // 発注日
			{ name: "purchase_date",index: "purchase_date", dataType:"date", width: 80, height: '150%', align:"left", className: "purchase_date", editable: true},
			// 発注コード
			{ name: "purchase_code",index: "purchase_code", width: 100, height: '150%', align:"left", className: "purchase_code", editable: true},
			// 発注先
			{ name: "customer",index: "customer", width: 150, height: '150%', align:"left", className: "customer", editable: true, edittype:"select", editoptions: pulldown['customer']},
			// 納品希望日
			{ name: "deliver_date",index: "deliver_date", width: 100, height: '150%', align:"left", className: "deliver_date", editable: true},
			// 記入者(御社担当者)
			{ name: "scribedby",index: "scribedby", width: 100, height: '150%', align:"left", className: "scribedby", editable: true, editable: true, edittype:"select", editoptions: pulldown['person']},
			// 合計金額
			{ name: "ammount",index: "ammount", width: 100, height: '150%', align:"left", className: "ammount", editable: true}
		];
	//fig.3-1 商品追加・編集
	colModelData['fig3-1'] = [
			{ name: "product_type", index: "product_type", width: 75,align:"left", className: "product_type", editable: true, edittype:"select", editoptions: pulldown['product_category']},
			{ name: "product", index: "product", dataType:"string",width: 150,align:"left", className: "product", editable: true, edittype:"select", editoptions: pulldown['product']},
			{ name: "price", index: "price", width: 100,align:"left", className: "price", editable: true},
			{ name: "quantity", index: "quantity", width: 50,align:"left", className: "quantity", editable: true},
	        { name: "ammount", index: "product_category", width: 100, align:"left", className: ' categories', editable: true},
			{ name: "deliver_destination", index: "deliver_destination", width: 150, align:"left", className: 'deliver_destination  customer', editable: true}
		];
	//fig.2 8.2 見積・受注機能
	colModelData['fig2'] = [
	        { name: "order_date", index:"order_date", width: 100, dataType: "date", align:"left", className: "order_date", editable: true},
			{ name: "order_code", index:"order_code", width: 100, dataType: "string" , align:"left", className: "order_code", editable: true},
			{ name: "customer", index:"customer", width: 100, dataType: "string", align:"left", className: " customer", editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "deliver_date", index:"deliver_date", width: 100, dataType: "string", align:"left", className: "deliver_date", editable: true},
			{ name: "scribedby", index:"scribedby", width: 100, dataType: "string", align:"left", className: "scribedby", editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "order_type", index:"order_type", width: 75, dataType: "string", align:"left", className: "order_type", editable: true},
			{ name: "ammount", index:"ammount", width: 100, dataType: "string", align:"left", className: "ammount  customer", editable: true}
		];
	//fig.2-1 商品追加・編集
	colModelData['fig2-1'] = [
	        { name: "product_type", index: "product_type", width: 75,align:"left", className: "product_type", editable: true, edittype:"select", editoptions: pulldown['product_category']},
	        { name: "product", index:"product", width: 150, dataType: "string", className: "product", align:"left", editable: true, edittype:"select", editoptions: pulldown['product']},
	        { name: "price", index:"price", width: 100, dataType: "string" ,align:"left", className: "price", editable: true},
	        { name: "quantity", index:"quantity", width: 100, dataType: "string" , className: "quantity",align:"left", editable: true},
	        { name: "ammount", index:"ammount", width: 100, dataType: "string", align:"left", className: "ammount  customer", editable: true},
			{ name: "deliver_destination", index: "deliver_destination", width: 150, align:"left", className: 'deliver_destination  customer', editable: true}
		];
	//fig.4 取引先 個人
	colModelData['fig4'] = [
	        { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	        { name: "name", index:"name", width: 120, dataType: "string", align:"left" , className:'name', editable: true, edittype:"select", editoptions: pulldown['person']},
    	    { name: "address", index:"address", width: 150, dataType: "string", align:"left", className:' address', editable: true},
			{ name: "tel", index:"tel", width: 100, dataType: "string", align:"left", className:' tel', editable: true},
			{ name: "fax", index:"fax", width: 100, dataType: "string", align:"left", className: "fax",editable: true},
	       	{ name: "email", index:"email", width: 120, dataType: "string", className: "email",align:"left", editable: true},
			{ name: "url", index:"url", width: 120, dataType: "string" ,align:"center", className: "url", editable: true},
            // 一斉送信 = simultaneous transmissionを略して sml_trans
            { name: "sml_trans", index:"sml_trans", width: 1, dataType: "string" ,align:"center", className: "sml_trans",
				//hidden:true + editrules:{edithidden:true}でフォーム追加・編集ダイアログでは表示され、リスト上では非表示となる
				editable: true, edittype:'checkbox', hidden:true, editrules:{edithidden:true}}
		];
	//fig.4-1	取引先 企業
	colModelData['fig4-1'] = [
	            	       	{ name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	            	       	{ name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	            	       	{ name: "company", index:"company", width: 120, dataType: "string", align:"left" , className:'company', editable: true, edittype:"select", editoptions: pulldown['customer']},
	            	       	{ name: "address", index:"address", width: 150, dataType: "string", align:"left", className:' address', editable: true},
	            	       	{ name: "tel", index:"tel", width: 100, dataType: "string", align:"left", className:' tel', editable: true},
	            	       	{ name: "fax", index:"fax", width: 100, dataType: "string", align:"left", className: "fax",editable: true},
	            	       	{ name: "email", index:"email", width: 120, dataType: "string", className: "email",align:"left", editable: true},
	            	       	{ name: "url", index:"url", width: 120, dataType: "string" ,align:"center", className: "url"}
		];
	//fig.4-3	取引先 企業 社員
	colModelData['fig4-3'] = [
	                          { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	                          { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	                          { name: "name", index:"name", width: 120, dataType: "string", align:"left" , className:'name', editable: true, edittype:"select", editoptions: pulldown['person']},
	                          { name: "department", index:"department", width: 150, dataType: "string", align:"left", className:' department', editable: true},
	                          { name: "role", index:"role", width: 100, dataType: "string", align:"left", className:' role', editable: true},
	                          { name: "authority", index:"authority", width: 100, dataType: "string", align:"left", className: "authority",editable: true}
	                          ];
	//fig.4-3	取引先 企業 取扱商品
	colModelData['fig4-4'] = [
	              	        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	            	        { name: "product_type", index:"product_type", width: 120, dataType: "string", align:"left" , className:'product_type', editable: true, edittype:"select", editoptions: pulldown['person']},
	                	    { name: "product", index:"product", width: 150, dataType: "string", align:"left", className:' product', editable: true, edittype:"select", editoptions: pulldown['product']},
	            			{ name: "price", index:"price", width: 100, dataType: "string", align:"left", className:' price', editable: true},
	            			{ name: "discount_limit", index:"discount_limit", width: 100, dataType: "string", align:"left", className: "discount_limit",editable: true},
	            	       	{ name: "maker", index:"maker", width: 120, dataType: "string", className: "maker",align:"left", editable: true}
	                          ];
	//fig.4-5	取引先 企業 社員 社員登録
	colModelData['fig4-5'] = [
	                          { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	              	        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	            	        { name: "name", index:"name", width: 120, dataType: "string", align:"left" , className:'name', editable: true, edittype:"select", editoptions: pulldown['person']},
	                	    { name: "address", index:"address", width: 150, dataType: "string", align:"left", className:' address', editable: true},
	            			{ name: "tel", index:"tel", width: 100, dataType: "string", align:"left", className:' tel', editable: true},
	            			{ name: "fax", index:"fax", width: 100, dataType: "string", align:"left", className: "fax",editable: true},
	            	       	{ name: "email", index:"email", width: 120, dataType: "string", className: "email",align:"left", editable: true},
	            			{ name: "url", index:"url", width: 120, dataType: "string" ,align:"center", className: "url", editable: true},
	                        // 一斉送信 = simultaneous transmissionを略して sml_trans
	                        { name: "sml_trans", index:"sml_trans", width: 1, dataType: "string" ,align:"center", className: "sml_trans",
	            				//hidden:true + editrules:{edithidden:true}でフォーム追加・編集ダイアログでは表示され、リスト上では非表示となる
	            				editable: true, edittype:'checkbox', hidden:true, editrules:{edithidden:true}}
	                          ];
	//fig.4-6	取引先 企業 取扱商品 商品選択
	colModelData['fig4-6'] = [
	                          { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	                          { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	                          { name: "product_type", index:"product_type", width: 120, dataType: "string", align:"left" , className:'product_type', editable: true, edittype:"select", editoptions: pulldown['person']},
	                          { name: "product", index:"product", width: 150, dataType: "string", align:"left", className:' product', editable: true, edittype:"select", editoptions: pulldown['product']},
	                          { name: "price", index:"price", width: 100, dataType: "string", align:"left", className:' price', editable: true},
	                          { name: "discount_limit", index:"discount_limit", width: 100, dataType: "string", align:"left", className: "discount_limit",editable: true},
	                          { name: "maker", index:"maker", width: 120, dataType: "string", className: "maker",align:"left", editable: true}
	                          ];
	//fig.5 8-4 商品管理機能 現在の在庫
	colModelData['fig5'] =[
	           	        	{ name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	             	        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	            	       	{ name: "product_code", index:"product_code", width: 100, dataType: "string", className:"product_code", align:"left", editable: true},
	                	    { name: "type_num", index:"type_num", width: 80, dataType: "string", align:"left", className:' type_num' , editable: true, edittype:"select", editoptions: pulldown['product']},
	                    	{ name: "product_type", index:"product_type", width: 80, dataType: "string", className: "product_type", align:"left" , editable: true, edittype:'select', editoptions:pulldown['product_category']},
	                   		{ name: "product", index:"product", width: 120, dataType: "string", className:"product",  align:"left" , editable: true, edittype:"select", editoptions: pulldown['product']},
	                   		{ name: "maker", index:"maker", width: 100, dataType: "string", className:"maker", align:"left", editable: true},
	                   		{ name: "maker_charger", index:"maker_charger", width: 0, dataType: "string", className:"maker_charger", align:"left", editable: true, hidden:true, editrules:{edithidden:true}},
	            	        { name: "agency", index:"agency", width: 100, dataType: "string", align:"left", className:'agency', editable: true},
	                   		{ name: "agency_charger", index:"agency_charger", width: 0, dataType: "string", align:"left", className:'agency_charger', editable: true, hidden:true, editrules:{edithidden:true}}
		];

	//fig.6	入出庫管理機能
	colModelData['fig6'] =[
	                       { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	                       { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	                       { name: "stock_code", index:"product_code", width: 100, dataType: "string", className:"product_code", align:"left", editable: true},
	                       { name: "type_num", index:"type_num", width: 80, dataType: "string", align:"left", className:' type_num' , editable: true},
	                       { name: "product_type", index:"product_type", width: 80, dataType: "string", className: "product_type", align:"left" , editable: true, edittype:'select', editoptions:pulldown['product_category']},
	                       { name: "product", index:"product", width: 120, dataType: "string", className:"product",  align:"left" , editable: true, edittype:"select", editoptions: pulldown['product']},
	                       { name: "lot_num", index:"lot_num", width: 100, dataType: "string", className:"lot_num", align:"left", editable: true},
	                       { name: "node_num", index:"maker_charger", width: 0, dataType: "string", className:"node_num", align:"left", editable: true},
	                       { name: "price", index:"price", width: 100, dataType: "string", align:"left", className:'price', editable: true},
	                       { name: "quantity", index:"quantity", width: 0, dataType: "string", align:"left", className:'quantity', editable: true},
	                       { name: "stock_place", index:"agency", width: 100, dataType: "string", align:"left", className:'agency', editable: true},
	                       { name: "stock_date", index:"stock_date", width: 0, dataType: "string", align:"left", className:'stock_date', editable: true}
		];

	//fig.7	8-4在庫管理機能
	colModelData['fig7-0'] =[
	           	        { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
		           	        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
		        	       	{ name: "stock_code", index:"stock_code", width: 100, dataType: "string", className:"stock_code", align:"left", editable: true},
		            	    { name: "type_num", index:"type_num", width: 80, dataType: "string", align:"left", className:' type_num' , editable: true},
		                	{ name: "product_type", index:"product_type", width: 80, dataType: "string", className: "product_type", align:"left" , editable: true, edittype:'select', editoptions:pulldown['product_category']},
		               		{ name: "product", index:"product", width: 120, dataType: "string", className:"product",  align:"left" , editable: true, edittype:"select", editoptions: pulldown['product']},
		        			{ name: "lot_num", index:"lot_num", width: 100, dataType: "string" , className: "lot_num",align:"left", editable: true},
		        			{ name: "node_num", index:"node_num", width: 100, dataType: "string" , className: "node_num",align:"left", editable: true},
		        			{ name: "price", index:"price", width: 100, dataType: "string" , className: "price",align:"left", editable: true},
		        			{ name: "quantity", index:"quantity", width: 100, dataType: "string" , className: "quantity",align:"left", editable: true},
		        			{ name: "stock_place", index:"stock_place", width: 100, dataType: "string" , className: "stock_place",align:"left", editable: true},
		        			{ name: "stock_date", index:"stock_date", width: 100, dataType: "string" , className: "stock_date",align:"left", editable: true}
		];
	//fig.7-1 8-4 過去在庫
	colModelData['fig7-1'] =[
	             	        { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
		                       { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
		                       { name: "stock_code", index:"stock_code", width: 100, dataType: "string", className:"stock_code", align:"left", editable: true},
		                       { name: "type_num", index:"type_num", width: 80, dataType: "string", align:"left", className:' type_num' , editable: true},
		                       { name: "product_type", index:"product_type", width: 80, dataType: "string", className: "product_type", align:"left" , editable: true},
		                       { name: "product", index:"product", width: 120, dataType: "string", className:"product",  align:"left" , editable: true, edittype:"select", editoptions: pulldown['product']},
		                       { name: "lot_num", index:"lot_num", width: 100, dataType: "string" , className: "lot_num",align:"left", editable: true},
		                       { name: "node_num", index:"node_num", width: 100, dataType: "string" , className: "node_num",align:"left", editable: true},
		                       { name: "price", index:"price", width: 100, dataType: "string" , className: "price",align:"left", editable: true},
		                       { name: "quantity", index:"quantity", width: 100, dataType: "string" , className: "quantity",align:"left", editable: true}
		];

	var fig8MonthWidth = 30;	//fig8の月カラムの幅

	//fig.8-4 8-5-5	企業詳細タブ
	colModelData['fig8-3'] =[
			{ name: "date", index:"date", width: 75, className:"date", dataType: "string", align:"left"},
			{ name: "company", index:"company", width: 120, className:"company", dataType: "string", align:"left"},
			{ name: "quantity", index:"quantity", width: 70, className:"quantity", dataType: "string", align:"left"},
			{ name: "sales", index:"sales", width: 100, className:"sales", dataType: "string", align:"left"},
			{ name: "profit", index:"profit", width: 100, className:"profit", dataType: "string", align:"left"},
			{ name: "profitability", index:"profitability", width: 100, className:"profitability", dataType: "string", align:"left"}
		];
	//fig.8-5 8-5-6	商品詳細タブ
	colModelData['fig8-4'] =[
	             			{ name: "date", index:"date", width: 75, className:"date", dataType: "string", align:"left"},
	            			{ name: "product", index:"product", width: 120, className:"product", dataType: "string", align:"left"},
	            			{ name: "quantity_sales", index:"quantity_sales", width: 150, className:"quantity_sales", dataType: "string", align:"left"}
		];
		
	colModelData['fig9'] = [
	                        { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	                        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	                        { name: "name", index:"name", width: 120, dataType: "string", align:"left" , className:'name', editable: true},
	                        { name: "address", index:"address", width: 130, dataType: "string", align:"left", className:' address', editable: true},
	                        { name: "tel", index:"tel", width: 120, dataType: "string", align:"left", className:' tel', editable: true},
	                        { name: "email", index:"email", width: 120, dataType: "string", className: "email",align:"left", editable: true},
	                        { name: "authority", index:"authority", width: 50, dataType: "string" ,align:"center", className: "authority", editable: true},
	                        { name: "user_id", index:"user_id", width: 100, dataType: "string" ,align:"center", className: "user_id", editable: true, hidden:true, editrules:{edithidden:true}},
	                        { name: "password", index:"password", width: 100, dataType: "string" ,align:"center", className: "password", editable: true, hidden:true, editrules:{edithidden:true}},
	                        ];

	colModelData['fig10'] = [
	                        { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	                        { name: "date", index:"date", width: 75, dataType: "string", className: "date", align:"left", editable: true},
	                        { name: "created", index:"created", width: 75, dataType: "string", className: "created", align:"left", editable: true},
	                        { name: "author", index:"author", width: 120, dataType: "string", className: "author",align:"left", editable: true},
	                        { name: "to", index:"to", width: 120, dataType: "string", align:"left" , className:'to', editable: true},
	                        { name: "title", index:"title", width: 130, dataType: "string", align:"left", className:' title', editable: true},
	                        { name: "content", index:"content", width: 120, dataType: "string", align:"left", className:' content', editable: true, edittype: "textarea", editoptions: {rows:"4",cols:"20"}}
	                        ];
	
	colModelData['fig11'] = [
		                         { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
		                         { name: "customer", index:"customer", width: 100, dataType: "string", className: "customer", align:"left", editable: true},
		                         { name: "target", index:"target", width: 100, dataType: "string", className: "target", align:"left", editable: true},
		                         { name: "product_type", index:"product_type", width: 120, dataType: "string", align:"left" , className:'product_type', editable: true, edittype:'select', editoptions:pulldown['product_category']},
		                         { name: "product", index:"product", width: 130, dataType: "string", align:"left", className:' product', editable: true, edittype:'select', editoptions:pulldown['product']},
		                         { name: "content_type", index:"content_type", width: 120, dataType: "string", align:"left", className:' content_type', editable: true, edittype:'select', editoptions:pulldown['clame_content_type']},
		                         { name: "content", index:"content", width: 120, dataType: "string", className: "content",align:"left", editable: true, edittype:'select', editoptions:pulldown['clame_content']},
		                         { name: "other", index:"other", width: 120, dataType: "string", className: "other",align:"left", editable: true, edittype: "textarea", editoptions: {rows:"4",cols:"20"}}
	                         ];
	
	colModelData['fig12-0'] = [
	                         { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	                         { name: "date", index:"date", width: 100, dataType: "string", className: "date", align:"left", editable: true},
	                         { name: "product_code", index:"product_code", width: 100, dataType: "string", className: "product_code", align:"left", editable: true},
	                         { name: "product", index:"product", width: 120, dataType: "string", align:"left" , className:'product', editable: true, edittype:"select", editoptions: pulldown['product']},
	                         { name: "quantity", index:"quantity", width: 130, dataType: "string", align:"left", className:' quantity', editable: true},
	                         { name: "lot_num", index:"lot_num", width: 120, dataType: "string", align:"left", className:' lot_num', editable: true},
	                         ];
	
	colModelData['fig12-1'] = [
	                           { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	                           { name: "date", index:"date", width: 100, dataType: "string", className: "date", align:"left", editable: true},
	                           { name: "product_code", index:"product_code", width: 100, dataType: "string", className: "product_code", align:"left", editable: true},
	                           { name: "product", index:"product", width: 120, dataType: "string", align:"left" , className:'product', editable: true, edittype:"select", editoptions: pulldown['product']},
	                           { name: "quantity", index:"quantity", width: 130, dataType: "string", align:"left", className:' quantity', editable: true},
	                           { name: "lot_num", index:"lot_num", width: 120, dataType: "string", align:"left", className:' lot_num', editable: true},
	                         ];
	
	colModelData['fig13-0'] = [
	                           { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	                           { name: "purchase_date", index:"purchase_date", width: 100, dataType: "string", className: "purchase_date", align:"left", editable: true},
	                           { name: "purchase_code", index:"purchase_code", width: 100, dataType: "string", className: "purchase_code", align:"left", editable: true},
	                           { name: "customer", index:"customer", width: 120, dataType: "string", align:"left" , className:'customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
	                           { name: "deliver_date", index:"deliver_date", width: 130, dataType: "string", align:"left", className:' deliver_date', editable: true},
	                           { name: "author", index:"author", width: 120, dataType: "string", align:"left", className:' author', editable: true},
	                           { name: "ammount", index:"ammount", width: 120, dataType: "string", align:"left", className:' ammount', editable: true}
	                           ];
	
	colModelData['fig13-1'] = [
	                           { name: "radio", index:"radio", width: 20, dataType: "string", align:"center", className: "radio", editable: false},
	                           { name: "order_date", index:"order_date", width: 100, dataType: "string", className: "order_date", align:"left", editable: true},
	                           { name: "order_code", index:"order_code", width: 100, dataType: "string", className: "order_code", align:"left", editable: true},
	                           { name: "customer", index:"customer", width: 120, dataType: "string", align:"left" , className:'customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
	                           { name: "deliver_date", index:"deliver_date", width: 130, dataType: "string", align:"left", className:' deliver_date', editable: true},
	                           { name: "author", index:"author", width: 120, dataType: "string", align:"left", className:' author', editable: true},
	                           { name: "order_type", index:"order_type", width: 120, dataType: "string", align:"left", className:' order_type', editable: true},
	                           { name: "ammount", index:"ammount", width: 120, dataType: "string", align:"left", className:' ammount', editable: true}
	                           ];
	
	colModelData['fig13-2'] = [
	                           { name: "check", index:"check", width: 75, dataType: "string", align:"center", className: "check", editable: false},
	                           { name: "product_type", index:"product_type", width: 100, dataType: "string", className: "product_type", align:"left", editable: true, edittype:'select', editoptions:pulldown['product_category']},
	                           { name: "product", index:"product", width: 100, dataType: "string", className: "product", align:"left", editable: true, edittype:"select", editoptions: pulldown['product']},
	                           { name: "price", index:"price", width: 120, dataType: "string", align:"left" , className:'price', editable: true},
	                           { name: "quantity", index:"quantity", width: 130, dataType: "string", align:"left", className:' quantity', editable: true},
	                           { name: "ammount", index:"ammount", width: 120, dataType: "string", align:"left", className:' ammount', editable: true},
	                           { name: "deiver_place", index:"deiver_place", width: 120, dataType: "string", align:"left", className:' deiver_place', editable: true}
	                           ];
	
	colModelData['fig13-3'] = [
	                           { name: "check", index:"check", width: 20, dataType: "string", align:"center", className: "check", editable: false},
	                           { name: "product_type", index:"product_type", width: 100, dataType: "string", className: "product_type", align:"left", editable: true, edittype:'select', editoptions:pulldown['product_category']},
	                           { name: "product", index:"product", width: 100, dataType: "string", className: "product", align:"left", editable: true, edittype:"select", editoptions: pulldown['product']},
	                           { name: "price", index:"price", width: 120, dataType: "string", align:"left" , className:'price', editable: true},
	                           { name: "quantity", index:"quantity", width: 130, dataType: "string", align:"left", className:' quantity', editable: true},
	                           { name: "ammount", index:"ammount", width: 120, dataType: "string", align:"left", className:' ammount', editable: true},
	                           { name: "order_type", index:"order_type", width: 120, dataType: "string", align:"left", className:' order_type', editable: true},
	                           { name: "deiver_place", index:"deiver_place", width: 120, dataType: "string", align:"left", className:' deiver_place', editable: true}
	                           ];
	
	//列の名前を格納する連想配列
	var colNamesList = new Array();
	//fig.2 8-2受注
	colNamesList['fig2'] 	= ['受注日', '受注コード', '受注先', '納品希望日', '記入者', '受注種別', '合計金額'];
	//fig.2-1 8-2 商品
	colNamesList['fig2-1']	= ['商品種別', '商品名', '単価', '個数', '小計', '納品場所'];
	//fig.3 8-1発注 
	colNamesList['fig3']	= ['発注日', '発注コード', '発注先', '納品希望日', '記入者', '合計金額'];
	//fig.3-1 8-1商品
	colNamesList['fig3-1']	= ['商品種別', '商品名', '単価', '個数', '小計', '納品場所'];
	//fig.4 8-3 取引先 個人
	colNamesList['fig4']	= ['', '登録日', '名前', '住所', '電話番号', 'FAX番号', 'メールアドレス', 'URL', '一斉送信・可'];
	//fig.4-1 8-3 取引先 企業
	colNamesList['fig4-1']	= ['', '登録日', '会社名', '住所', '電話番号', 'FAX番号', 'メールアドレス', 'URL'];
	//fig.4-3 8-3 取引先 企業 社員一覧
	colNamesList['fig4-3']	= ['', '登録日', '名前', '部署', '役職', '権限'];
	//fig.4-4 8-4 取引先 取扱商品タブ
	colNamesList['fig4-4']	= ['登録日', '種別', '商品名', '単価', '値引率限界', '製造メーカー'];
	//fig.4-3 8-5 取引先 企業 人物選択
	colNamesList['fig4-5']	= ['', '登録日', '名前', '住所', '電話番号', 'FAX', 'メールアドレス', 'URL', 'メール送信可否'];
	//fig.4-4 8-6 取引先 商品選択
	colNamesList['fig4-6']	= ['', '登録日', '種別', '商品名', '単価', '値引率限界', '製造メーカー'];
	//fig.5
	colNamesList['fig5']	= ['', '登録日', '商品コード', '型番', '商品種別', '商品名', '製造元', '製造元担当者', '代理業者', '代理業者担当者'];
//	//fig.6
//	colNamesList['fig6']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
//	//fig.6-1
//	colNamesList['fig6-1']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
//	//fig.6-2
//	colNamesList['fig6-2']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
//	//fig.6-3
//	colNamesList['fig6-3']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
	//fig.7
	colNamesList['fig7-0']	= ['', '日付', '在庫コード', '型番', '商品種別', '商品名', 'ロットNo', 'ノードNo', '個数', '単価', '在庫場所', '入庫日'];
	//fig.7-1
	colNamesList['fig7-1']	= ['', '日付', '在庫コード', '型番', '商品種別', '商品名', 'ロットNo', 'ノードNo', '個数', '単価'];
	//fig.8-4
	colNamesList['fig8-3']	= ['日付', '会社名', '数量', '売上高', '利益', '利益率'];
	//fig.8-5
	colNamesList['fig8-4']	= ['日付', '商品名', '数量/売上高'];
	//fig.9
	colNamesList['fig9']	= ['', '日付', '名前', '住所', '電話番号', 'メールアドレス', '権限', 'ユーザーID', 'パスワード'];
	//fig.10
	colNamesList['fig10']	= ['', '日付', '発行日', '作成者', '宛先', 'タイトル', '内容'];
	//fig.11
	colNamesList['fig11']	= ['', 'クレーム元', 'クレーム先', '商品種別', '商品名', '内容種別', '内容', 'その他'];
	//fig.12-0
	colNamesList['fig12-0']	= ['', '日付', '商品コード', '商品', '数量', 'ロット番号'];
	//fig.12-1
	colNamesList['fig12-1']	= ['', '日付', '商品コード', '商品', '数量', 'ロット番号'];
	//fig.12-1
	colNamesList['fig13-0']	= ['', '発注日', '発注コード', '発注先', '希望納品日', '記入者', '合計金額'];
	//fig.12-1
	colNamesList['fig13-1']	= ['', '受注日', '受注コード', '受注先', '希望納品日', '記入者', '受注種別','合計'];
	//fig.12-1
	colNamesList['fig13-2']	= ['入金済', '商品種別', '商品名', '単価', '個数', '小計', '納品場所'];
	//fig.12-1
	colNamesList['fig13-3']	= ['', '商品種別', '商品名', '単価', '個数', '小計', '受注種別', '納品場所'];


	//各Figのフラグリスト
	var figs ={
			'fig2' 		: 1,
			'fig2-1'	: 2,
			'fig3'		: 4,
			'fig3-1'	: 8,
			'fig4'		: 16,
			'fig4-1'	: 32,
			'fig5'		: 64,
			'fig5-1'	: 128,
			'fig6'		: 256,
			'fig6-1'	: 512,
			'fig7-0'	: 1024,
			'fig7-1'	: 2048,
			'fig8'		: 4096,
			'fig6-2'	: 8192,
			'fig6-3'	: 16384,
			'fig4-3'	: 32768,
			'fig4-4'	: 65536,
			'fig4-5'	: 131072,
			'fig4-6'	: 262144,
			'fig9'		: 524288,
			'fig10'		: 1048576,
			'fig11'		: 2097152,
			'fig12-0'	: 4194304,
			'fig12-1'	: 8388608,
			'fig13-0'	: 8388608 * 2,
			'fig13-1'	: 8388608 * 2 * 2,
			'fig13-2'	: 8388608 * 2 * 2 * 2,
			'fig13-3'	: 8388608 * 2 * 2 * 2 * 2
	};
	
	var prevParam = null;		// セレクトメニューの変更前の値を保存する変数
	var prevSelectNum = null;	// そのセレクトメニューの列番号
	lastsel = "";				// 前に選択した行の番号
	
	//objRuleを定義する必要がある画面のリスト
	hasObjRuleFigs = ['fig2-1','fig3',
	                  'fig3-1', 'fig4', 'fig4-1',
	                  'fig4-3', 'fig4-4', 'fig4-5',
	                  'fig4-6', 'fig5', 'fig7-0',
	                  'fig7-1', 'fig8-3', 'fig8-4',
	                  'fig9','fig10','fig11','fig12-0',
	                  'fig12-1','fig13-0','fig13-1',
	                  'fig13-2','fig13-3'
	                  ];
	
	//各objRuleのダブルクリックイベント。
	ondblClickRowEvents = {
			'fig2-1':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig2-1-list').editGridRow(rowid, gridoption[4]);
			},
			'fig3':function(){
				// fig4-2を呼び出す
				callPage('fig3-1');
			},
			// レコードをダブルクリックしたら
			'fig3-1':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig3-1-list').editGridRow(rowid, gridoption[4]);
			},
			'fig4':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig4-list').editGridRow(gridoption[4]);
			},
			'fig4-1':function(){
				// fig4-2を呼び出す
				callPage('fig4-2');
			},
			'fig4-3':function(){
				// fig4-5を呼び出す
				callPage('fig4-5');
			},
			'fig4-4':function(){
				// fig4-6を呼び出す
				callPage('fig4-6');
			},
			'fig4-5':function(){
			},
			'fig4-6':function(){
			},
			'fig5':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig5-list').editGridRow(rowid, gridoption[4]);
			},
			'fig7':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig7-list').editGridRow(rowid, gridoption[4]);
			},
			'fig7-0':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig7-0-list').editGridRow(rowid, gridoption[4]);
			},
			'fig7-1':function(rowid){
				// 新規追加用ダイアログを出す
				$('#fig7-1-list').editGridRow(rowid, gridoption[4]);
			},
			'fig8-3':function(){
			},
			'fig8-4':function(){
			},
			'fig9':function(rowid){
				// 編集用ダイアログを出す
				$('#fig9-list').editGridRow(rowid, gridoption[4]);
			},
			'fig10':function(rowid){
				// 編集用ダイアログを出す
				$('#fig10-list').editGridRow(rowid, gridoption[4]);
			},
			'fig11':function(rowid){
				// 編集用ダイアログを出す
				$('#fig11-list').editGridRow(rowid, gridoption[4]);
			},
			'fig12-0':function(){
			},
			'fig12-1':function(){
			},
			'fig13-0':function(){
				callPage('fig13-2');
			},
			'fig13-1':function(){
				callPage('fig13-3');
			},
			'fig13-2':function(rowid){
				// 編集用ダイアログを出す
				$('#fig13-2-list').editGridRow(rowid, gridoption[4]);
			},
			'fig13-3':function(rowid){
				// 編集用ダイアログを出す
				$('#fig13-3-list').editGridRow(rowid, gridoption[4]);
			}
	}
	
	
/*
 * 関数名:createObjRule(objRule, hasObjRuleFigs, ondblClickRowEvents)
 * 引数  :Map objRule:画面ごとの表の設定を格納した連想配列。
 * 　　  :Array hasObjRuleFigs:objRuleを作る画面名のリストの配列。
 * 　　  :Map ondblClickRowEvents:画面ごとのレコードをダブルクリックしたときのイベントを格納する連想配列。
 * 戻り値:なし
 * 概要  :各画面のリストの設定を作る。
 * 作成者:T.Masuda
*/
function createObjRule(objRule, hasObjRuleFigs, ondblClickRowEvents){
	//objRuleが必要な画面をリストアップした配列hasObjRuleFigsの要素数を取得する。
	var objRuleLength = hasObjRuleFigs.length;	
	//必要なだけのobjRuleができるまで繰り返す。
	for(var i = 0; i < objRuleLength; i++){
	　//各画面ごとのobjRuleを作成する。
		objRule[hasObjRuleFigs[i]] = {
				data: listData[hasObjRuleFigs[i]],
				datatype: "local",
				width: 576,
				height: 280,
				colNames: colNamesList[hasObjRuleFigs[i]],
				colModel: colModelData[hasObjRuleFigs[i]], 
				resizable:false, 
				cellEdit: false,    // true: クリックしたセルの編集
				cellsubmit: 'clientArray',
				forceFit: true,		/* 固定幅にする */	
				shrinkToFit: false,	/* 自動で幅を調整させない */
				afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
					if(!(isListChanged(isChange, hasObjRuleFigs[i]))){	//今まで未編集であったら
						isChange += figs[hasObjRuleFigs[i]];				//編集後フラグを立てる
					}
					editingRow = iRow;		//編集中のセルの行番号を保存
					editingCol = iCol;		//編集中のセルの列番号を保存
					editingValue = value;	//編集中のセルの値を保存
				},
				//キー「ondblClickRow」の値にondblClickRowEventsに格納された各画面ごとの無名関数を登録する。
				ondblClickRow:ondblClickRowEvents[hasObjRuleFigs[i]]
			};
	}
}

	//リストのルール設定の連想配列を作る。
	var objRule = {};
	createObjRule(objRule, hasObjRuleFigs, ondblClickRowEvents);
	
	//fig2のルールを設定
	objRule['fig2'] ={ 
//							url: '/testseasar/borgsystem/list2',
//							editurl: '/testseasar/borgsystem/editRecord',
//							datatype: "json",
							width: 576,
							data: listData['fig2'],
							datatype: "local",
							gridResize: {minWidth:310, maxWidth:576},
							height: 280,
							colNames: colNamesList['fig2'],
							colModel: colModelData['fig2'],
							caption: '受注リスト'	,
							cellEdit: false,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
//							cellsubmit: 'remote',
//							cellurl:location.href,
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							// セル編集の直前のイベント
							beforeEditCell:function(rowid, cellname, value, iRow, iCol){
							// 初回選択でないかつ別の行を選択していれば
								if(rowid != lastsel && lastsel != ''){
									// リストのセレクトメニューの値を変えずに別の行を編集モードにした場合空欄になるバグ対策
									// 編集を確定する行がセレクトメニューのセルをクリックされて編集開始していてかつ
									if(prevParam != null && // 値が変わっていなければ
											$('tr#' + lastsel + ' td:nth-child(' + (prevSelectNum + 1) + ')').text()){
										// 行の値を保存し、その後
										$("#fig2-list").saveRow(lastsel, false, location.href, '', function(){
											// 空白になったセルの値を回復する
											$('tr#' + lastsel + ' td:nth-child(' + (prevSelectNum + 1) + ')').text(prevParam);
									
										});
									// 通常のインライン編集対象以降前の準備ステップ
									} else {
										// 別の行にカーソルが移るときに行を一時保存する
										// これにより行の編集を確定して別の行を編集できるようになる
										$("#fig2-list").saveRow(lastsel, false, location.href);
									}
								}
								// クリックされた行をインライン編集モードに切り替える
								$('#fig2-list').editRow(rowid, true);
								
								
								// 今回選択した行の番号を前回選択した行として保存
								lastsel = rowid;
							},
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig2'))){	//今まで未編集であったら
									isChange += figs['fig2'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
								editingRowId = rowid;	//編集中のセルの行IDを保存
								
								//商品名を選択した場合は種別による項目絞込みを行う
							},
							ondblClickRow:function(){
								// fig4-2を呼び出す
								callPage('fig2-1');
							}
						};

	
	//グラフに使うデータを定義
	var chartData = new Array();
		//Fig.8-0のダミーデータ
	   chartData['fig8-0'] = {　defaultunit:[ ["年月日","売上","経常利益","仕入"],	//項目軸ラベルと値ラベル
	                                      ["2000年10月01日",1.8,0.3,1.5],
	                                      ["2000年10月02日",3.9,2.5,1.4],
	                                      ["2000年10月03日",3.5,1.9,1.6],
	                                      ["2000年10月04日",3.9,2.5,1.4],
	                                      ["2000年10月05日",3.9,2.5,1.4],
	                                      ["2000年10月06日",4.7,2.5,2.2],
	                                      ["2000年10月07日",5.6,3.8,1.8]
	          							],
			   					day:[ ["年月日","売上","経常利益","仕入"],	//項目軸ラベルと値ラベル
	                               ["2000年10月01日",1.8,0.3,1.5],
	                               ["2000年10月02日",3.9,2.5,1.4],
	                               ["2000年10月03日",3.5,1.9,1.6],
	                               ["2000年10月04日",3.9,2.5,1.4],
	                               ["2000年10月05日",3.9,2.5,1.4],
	                               ["2000年10月06日",4.7,2.5,2.2],
	                               ["2000年10月07日",5.6,3.8,1.8]
	   							],
	   							month:[ ["年月","売上","経常利益","仕入"],	//項目軸ラベルと値ラベル
	   							      ["2000年01月",1.8,0.3,1.5],
	   							      ["2000年02月",3.9,2.5,1.4],
	   							      ["2000年03月",3.5,1.9,1.6],
	   							      ["2000年04月",4.7,2.5,2.2],
	   							      ["2000年05月",5.6,3.8,1.8],
		   							["2000年06月",5.6,3.8,1.8],
		   							["2000年07月",5.6,3.8,1.8],
		   							["2000年08月",5.6,3.8,1.8],
		   							["2000年09月",5.6,3.8,1.8],
		   							["2000年10月",5.6,3.8,1.8],
		   							["2000年11月",5.6,3.8,1.8],
		   							["2000年12月",5.6,3.8,1.8]
	   							],
	   							year:[ ["年度","売上","経常利益","仕入"],	//項目軸ラベルと値ラベル
	   							      ["2010年",1.8,0.3,1.5],
	   							      ["2011年",3.9,2.5,1.4],
	   							      ["2012年",3.5,1.9,1.6],
	   							      ["2013年",4.7,2.5,2.2],
	   							      ["2014年",5.6,3.8,1.8]
	   							]
	   						};
	  //Fig.8-1のダミーデータ
	  chartData['fig8-1'] = [
							    ["", "製品A","製品B","製品C","製品D","製品E"],	//項目軸ラベルと値ラベル
								//ダミーデータ3つ
							    ["2000年01月", 1.5, 3.5, 4.5, 1.1, 0.5],
							    ["2000年02月", 1.0, 1.2, 1.5, 1.2, 3.5],
							    ["2000年03月", 1.1, 3.5, 0.5, 3.5, 3.5],
							    ["2000年04月", 1.1, 1.4, 0.5, 7.5, 4.5],
							    ["2000年05月", 2.1, 2.0, 2.5, 2.5, 1.5],
							    ["2000年06月", 0.5, 1.5, 3.5, 3.3, 1.0]
							  ];
	  //Fig.8-1のダミーデータ
	  chartData['fig8-2'] = [
	                         ["期間", "製品A","製品B","製品C","製品D","製品E"],	//項目軸ラベルと値ラベル
	                         //ダミーデータ3つ
	                         ["2000年01月", 1.5, 3.5, 4.5, 1.1, 0.5],
	                         ["2000年02月", 1.0, 1.2, 1.5, 1.2, 3.5],
	                         ["2000年03月", 1.1, 3.5, 0.5, 3.5, 3.5],
	                         ["2000年04月", 1.1, 1.4, 0.5, 7.5, 4.5],
	                         ["2000年05月", 2.1, 2.0, 2.5, 2.5, 1.5],
	                         ["2000年06月", 0.5, 1.5, 3.5, 3.3, 1.0]
	                         ];
	  
	  //Fig.8-5のダミーデータ
	  chartData['fig8-5'] = {defaultunit:[
	                         ["期間", "一重管","二重管","一重支","二重支","アクセサリ"],	//項目軸ラベルと値ラベル
	                         //ダミーデータ3つ
	                         ["2000年01月", 1.5, 3.5, 4.5, 1.1, 0.5],
	                         ["2000年02月", 1.0, 1.2, 1.5, 1.2, 3.5],
	                         ["2000年03月", 1.1, 3.5, 0.5, 3.5, 3.5],
	                         ["2000年04月", 1.1, 1.4, 0.5, 7.5, 4.5],
	                         ["2000年05月", 2.1, 2.0, 2.5, 2.5, 1.5],
	                         ["2000年06月", 0.5, 1.5, 3.5, 3.3, 1.0]
	                         ]
	  };

	//グラフの追加設定データを格納する配列
	var chartOptions = new Array();
	//fig8-0の追加設定データ
	chartOptions['fig8-0'] = {
	    height: 400, //高さ
		title: '統計',	//グラフのタイトル
		'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
		hAxis : { title: '', slantedText: true},
		vAxis : { title: '単位 千万'}
	  }
	//fig8-1の追加設定データ
	chartOptions['fig8-1'] = {
	    height: 400, //高さ
		title: '仕入',	//グラフのタイトル
		'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
		hAxis : { title: '', slantedText: true},
		vAxis : { title: '売上　単位 千万'}
	  }
	chartOptions['fig8-2'] = {
	    height: 400, //高さ
		title: '売上',	//グラフのタイトル
		'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
		hAxis : { title: '', slantedText: true},
		vAxis : { title: '売上　単位 千万'}
	  }
	chartOptions['fig8-5'] = {
			height: 400, //高さ
			title: '利益',	//グラフのタイトル
			'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
			hAxis : { title: '', slantedText: true},
			vAxis : { title: '売上　単位 千万'}
	}
	  
	//表の追加設定データを格納する配列  
	tableOptions = new Array();
	//fig8-0の追加設定データ
	tableOptions['fig8-0'] = {
	    width:tabContainerWidth //横幅
	  }
	//fig8-1の追加設定データ
	tableOptions['fig8-1'] = {
	    width:tabContainerWidth //横幅
	  }
	//fig8-2の追加設定データ
	tableOptions['fig8-2'] = {
	    width:tabContainerWidth //横幅
	  }
	//fig8-5の追加設定データ
	tableOptions['fig8-5'] = {
			width:tabContainerWidth //横幅
	}

	//リストの編集フォームの設定を格納する配列を用意する。
	var gridoption = [];
	
	//グリッドの設定を記述して配列に格納する。
	gridoption[0] = {url:location.href,
			width: 'auto',
			bSubmit: '追加',
			afterShowForm:function(form){
				// フォームの幅を自動調整させる
				form.parent().parent().parent().css('width', 'auto');
			},
		beforeSubmit:function(postdata,formid) {
			// 製品コードのセルを取得
			var $pcodes = $('#fig5-list .jqgrow td[aria-describedby="fig5-list_product_code"]');
			var issameval = [true, ""];
			// for文で製品コードの被りをチェック
			for(var i = 0; i < $pcodes.length; i++){
				// 製品コードの被りを検知したら
				if(postdata["product_code"] == $pcodes.eq(i).text()){
					// falseを返し、ループを抜ける
					issameval[0] = false;
					issameval[1] = "";
					// このセルの親のセレクタを保存
					$delrow = $pcodes.eq(i).parent();
					break;
				}
			}
			
			// 被りがあったら
			if(!(issameval[0])){
				//valuesにpostdataを渡す
				values = postdata;
				// 確認ダイアログを開く
				$('#check_product_code').dialog("open");
			}
			
			// trueを返して正常に編集
			return issameval;
		}
	}

	gridoption[1] = {url:location.href,
			bSubmit: '追加',
			width: 'auto',
			afterShowForm:function(form){
				// フォームの幅を自動調整させる
				form.parent().parent().parent().css('width', 'auto');
			},
			beforeSubmit:function(postdata,formid) {
				// 製品コードのセルを取得
				var $pcodes = $('#fig7-0-list .jqgrow td[aria-describedby="fig7-0-list_stock_code"]');
				var issameval = [true, ""];
				// for文で製品コードの被りをチェック
				for(var i = 0; i < $pcodes.length; i++){
					// 製品コードの被りを検知したら
					if(postdata["stock_code"] == $pcodes.eq(i).text()){
						// falseを返し、ループを抜ける
						issameval[0] = false;
						issameval[1] = "";
						// このセルの親のセレクタを保存
						$delrow = $pcodes.eq(i).parent();
						break;
					}
				}
				
				// 被りがあったら
				if(!(issameval[0])){
					//valuesにpostdataを渡す
					values = postdata;
					// 確認ダイアログを開く
					$('#check_product_code').dialog("open");
				}
				
				// trueを返して正常に編集
				return issameval;
			}
	}

	gridoption[2] = {url:location.href,
					bSubmit: '追加',
			width: 'auto',
			afterShowForm:function(form){
				// フォームの幅を自動調整させる
				form.parent().parent().parent().css('width', 'auto');
			},
			beforeSubmit:function(postdata,formid) {
				// 製品コードのセルを取得
				var $pcodes = $('#fig7-1-list .jqgrow td[aria-describedby="fig7-1-list_stock_code"]');
				var issameval = [true, ""];
				// for文で製品コードの被りをチェック
				for(var i = 0; i < $pcodes.length; i++){
					// 製品コードの被りを検知したら
					if(postdata["stock_code"] == $pcodes.eq(i).text()){
						// falseを返し、ループを抜ける
						issameval[0] = false;
						issameval[1] = "";
						// このセルの親のセレクタを保存
						$delrow = $pcodes.eq(i).parent();
						break;
					}
				}
				
				// 被りがあったら
				if(!(issameval[0])){
					//valuesにpostdataを渡す
					values = postdata;
					// 確認ダイアログを開く
					$('#check_product_code').dialog("open");
				}
				
				// trueを返して正常に編集
				return issameval;
			}
	}


	// jqGridの追加フォーム初期化用連想配列
	gridoption[3] = {
						url:location.href, 
						bSubmit: '追加', 
						recreateForm: 'true',
						// フォーム表示直後のイベント
						afterShowForm:function(form){
							// フォームの幅を自動調整させる
							form.parent().parent().parent().css('width', 'auto');
						}
					};
	
	// jqGridの編集フォーム初期化用連想配列
	gridoption[4] = {
			// 現在のURLにリクエストを送る
			url:location.href, 
			// ボタンのテキストを変更
			bSubmit: '更新', 
			// フォームをコールするたびに作り直す
			recreateForm: 'true',
			// フォーム表示直後のイベント
			afterShowForm:function(form){
				// フォームの幅を自動調整させる
				form.parent().parent().parent().css('width', 'auto');
			}
	};

	
	
//ここまでデータ定義	
	
	/*
	 * 関数名:labelMax2Resize(width)
	 * 引数  :int width:対象となるテキストボックスの枠の幅
	 * 戻り値:なし
	 * 概要  :ラベルの最大幅が2グリッドの画面の1ブロック2個のテキストボックスの枠のレイアウトの動的変更を行う。
	 * 作成日:2015.04.25
	 * 作成者:T.Masuda
	*/
	 function labelMax2Resize(width){
	
		 // 範囲入力ボックスの幅が一定値を下回れば
		 if(width <= labelMax2WidthBorder[0]){
			//2個目のテキストボックスを右寄せ
			 $('.label_max2 div.variable-height.two-tb span.filter-list-before').css({float: 'right'});	
		 //そうでなければ
		 } else {
			//2個目のテキストボックスのfloat解除
			 $('.label_max2 div.variable-height.two-tb span.filter-list-before').css('float', 'none');	
		 }
		 
		 // 範囲入力ボックスの幅が一定値を下回れば
		 if(width <= labelMax2WidthBorder[1]){
			 $('.label_max2 div.variable-height.two-tb').css('height', tbHeight * 2);				//倍の高さを設定
		 }
	 }
	
		/*
		 * 関数名:labelMax6Resize(width)
		 * 引数  :int width:対象となるテキストボックスの枠の幅
		 * 戻り値:なし
		 * 概要  :ラベルの最大幅が6グリッドの画面の1ブロック2個のテキストボックスの枠のレイアウトの動的変更を行う。
		 * 作成日:2015.04.25
		 * 作成者:T.Masuda
		*/
	 function labelMax6Resize(width){
		 
		 // 範囲入力ボックスの幅が一定値を下回れば
		 if(width <= labelMax6WidthBorder[0]){
			 $('.label_max6 div.variable-height.two-tb span.filter-list-before').css({float: 'right'});	//2個目のテキストボックスを右寄せ
		 } else {
			 $('.label_max6 div.variable-height.two-tb span.filter-list-before').css('float', 'none');	//2個目のテキストボックスのfloat解除
		 }
		 
		 // 範囲入力ボックスの幅が一定値を下回れば
		 if(width <= labelMax6WidthBorder[1]){
			 $('.label_max6 div.variable-height.two-tb').css('height', tbHeight * 2);				//倍の高さを設定
		 }
		 
		 // 範囲入力ボックスの幅が一定値を下回ればラベルの幅を縮小する
		 if(width <= labelMax6WidthBorder[2]){
			 $('.label_max6 .parallel-text.two-tb label:first-child').css({
				 //最低幅と最大幅を同じに指定して幅を固定する。
				 maxWidth: width - labelMax6WidthBorder[2]  + labelMinWidthLabelMax6 + 'px',
				 minWidth:  width -  labelMax6WidthBorder[2] + labelMinWidthLabelMax6 + 'px'
			 });
		//基準の幅を下回っていなければ
		 } else {
			 //ラベルの幅の固定を解除する。
			 $('.label_max6 .parallel-text.two-tb label:first-child').css({
				 maxWidth:'',	//最大幅
				 minWidth:''	//最低幅を無効にする
			 });
		 }
	 }
	
		/*
		 * 関数名:billButtonsResize()
		 * 引数  :なし
		 * 戻り値:なし
		 * 概要  :伝票ボタンを囲む枠を画面幅に合わせてリサイズする。
		 * 作成日:2015.04.25
		 * 作成者:T.Masuda
		*/
function billButtonsResize(){
	billbuttonsWidth = 0; 		// 伝票ボタンの幅を計算する前にリセットする
	// 伝票出力ボタンの親タグのjQueryオブジェクトを変数に格納
	var $billbuttonsParents = $('.page:first .bill_buttons:visible .two-str-button');

	// 伝票出力ボタンの幅の合計を求める
	for(var i = 0; i < $billbuttonsParents.length; i++){
		billbuttonsWidth += $billbuttonsParents.eq(i).outerWidth(); // ボタンの幅合計を算出
	}
			
	// 伝票出力ボタンの親タグのさらに祖父要素の幅を取得
	var contentWidth = $billbuttonsParents.parent().parent().outerWidth();
			
	// 表示領域が一定サイズをきれば
	if(contentWidth / 2 <= billbuttonsWidth){
		// 左側の幅を切り詰める
		$('.bill_buttons.left').css('width', contentWidth / 2
			- (billbuttonsWidth - contentWidth / 2) - 1);
		// 右側の不足している幅を足す
		$('.bill_buttons.right').css('width', contentWidth / 2
			+ (billbuttonsWidth - contentWidth / 2) + 1);
	} else {
		$('.bill_buttons').css({width: '50%'});			//変化させた幅を元に戻す
	}
}
	
/*
 * 関数名:setContentHeight
 * 引数  :なし
 * 戻り値:なし
 * 概要  :画面の高さを取得してコンテンツの高さにする
 * 作成日:2014.07.16
 * 作成者:T.Masuda
*/
function setContentHeight(){
	//テキストボックスを含むdivタグの高さと幅の割合から妥当な高さを割り出す
	 $('.variable-height').css('height', tbHeight);	//高さを設定
	 
	 //現在の画面のラベルの最大幅がグリッド2個なら
	 if($('.label_max2:visible').length){
		 //1ブロックにテキストボックス2個のブロックのレイアウト変更の関数をコールする。
		 labelMax2Resize($('.label_max2:visible div.variable-height.two-tb:visible').width());
	 } else if(($('.label_max6:visible').length)){
		 //1ブロックにテキストボックス2個のブロックのレイアウト変更の関数をコールする。
		 labelMax6Resize($('.label_max6:visible div.variable-height.two-tb:visible').width());
	 }
		
	//伝票出力ボタンがあるページが表示されているならであれば
	if($('.page:first .bill_buttons:visible').length > 0){
		billButtonsResize();	//伝票出力ボタン群をリサイズする。
	}

	 //プルダウンメニューの高さを指定。画面の高さの半分程度
	 $('.ui-autocomplete').css('max-height', $(window).height() / pulldownRatio);
}

/*
 * 関数名:setButtonSize()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :ボタンの大きさを修正する
 * 作成日:2014.07.16
 * 作成者:T.Masuda
*/
function setButtonSize(){
	//ボタンのサイズを変更
	$('.main button.ui-button').each(function(){
		//ボタンの幅を縦に対する比率に合わせる
		$(this).css('width', ($('button.ui-button').height() * buttonWidthRatio) + 'px');
	})
}

/*
 * 関数名:changeNormalFontSize
 * 引数  :String selectors:フォントサイズの変更の対象となる要素のセレクタの配列。
 * 		:int newFontSize:新しいフォントサイズ。パーセントで指定する。
 * 戻り値:なし
 * 概要  :フォントの大きさを変える関数をコールする。
 * 作成日:2015.04.25
 * 作成者:T.Masuda
*/
function changeNormalFontSize(selectors, newFontSize){
	var selectorsLength = selectors.length;	//走査前に配列の要素数を取得する。
	
	//selectorsを走査して処理する。
	for(var i = 0; i < selectorsLength; i++){
		//対象のフォントサイズを指定する。
		$(selectors[i]).css('font-size',  newFontSize + '%')
	}
}
	
/*
 * 関数名:function changeFixFontSize(selectors, newFontSize, fixSize)
 * 引数  :String selectors:フォントサイズの変更の対象となる要素のセレクタの配列。
 * 		:int newFontSize:新しいフォントサイズ。パーセントで指定する。
 * 		:int fixSize:サイズの補正値。
 * 戻り値:なし
 * 概要  :フォントの大きさを変える関数をコールする。
 * 作成日:2015.04.25
 * 作成者:T.Masuda
*/
function changeFixFontSize(selectors, newFontSize, fixSize){
	var selectorsLength = selectors.length;	//走査前に配列の要素数を取得する。
	
	//selectorsを走査して処理する。
	for(var i = 0; i < selectorsLength; i++){
		//対象のフォントサイズを補正値の計算を含めて指定する。
		$(selectors[i]).css('font-size',  newFontSize - fixSize + '%')
	}
}
	
/*
 * 関数名:changeFontSize
 * 引数  :なし
 * 戻り値:なし
 * 概要  :動的にフォントの大きさを変える
 * 作成日:2014.07.17
 * 作成者:T.Masuda
*/
function changeFontSize(){
	//新たなフォントサイズを算出
	var newFontSize = (baseFontSize - ((maxWidth - $('.main').width()) / fontRatio));
	
	//フォントサイズをリサイズする各関数をコールする。
	changeNormalFontSize(fontResizeTargets, newFontSize);
	changeFixFontSize(fontResizeTargetsWithFix, newFontSize, strechFix1);
}

/* 関数名:dropdownResize()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :ドロップダウンチェックリストのレスポンシブ対応関数
 * 作成日:14.07.21
 * 作成者:T.Masuda
*/
function dropdownResize(){
	//ドロップダウンチェックリストのテキストボックスの外側をリサイズ
	$('.ui-dropdownchecklist-selector').css('width', $('.main').width() * dropdownPerMain);
	//ドロップダウンチェックリストのドロップダウンをリサイズ
	$('.ui-dropdownchecklist').css('width', $('.main').width() * dropdownPerMain);		
}

	/* 関数名:function itemResize()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :画面のリサイズに合わせて画面のアイテムのレイアウトを動的に変更する関数をコールするイベントを登録する。
	 * 作成者:T.Masuda
	*/
	function itemResize(){
		//画面のリサイズイベントを登録する。
		$(window).resize(function(){
			setContentHeight();	//setContentHeightを呼び出し高さを修正
			changeFontSize();	//フォントサイズを調整する
			dropdownResize();	//ドロップダウンメニューをリサイズする。
		});
	}
	
	changeFontSize();	//初回読み込みでフォントサイズを調整
	setContentHeight();	//初回読み込み時に高さを合わせる実行
	setButtonSize();	//ボタンのサイズを調整する

	//アイテムのリサイズイベントを登録する。
	itemResize();
	
	
	/*
	 * 関数名:isListChanged(isChange, figName)
	 * 概要  :リストが変更された状態であるかをbooleanの値で返す
	 * 引数  :int isChange:リストに変更があったかどうかの状態を保存する数値。
	 * 		:String figName:フラグの数値を格納する連想配列のキーであり、画面名。
	 * 戻り値:int:判定結果の0か1を返す。
	 * 作成日:2014/07.10 
	 * 作成者:T.Masuda
	 */
	 function isListChanged(isChange, figName){
		 var bool = 0;					//フラグとなる数値をboolに格納
		 if((isChange & figs[figName])) {	//フラグが立っていたら
			bool = 1;						//boolに1を代入
		 }
		 return bool;					//結果を返す
	 }


		/* 関数名:function filterGridItems(table, rowid, targetType)
		 * 引数　:Element table: 処理対象のテーブル名。
		 * 		:String rowid:処理対象の行番号。
		 * 		:String targetType:処理対象の種類。product等
		 * 戻り値:なし
		 * 概要  :リストの中の商品名を種別で絞る
		*/	
		function filterGridItems(table, rowid, targetType){
			//現在の画面のタグのIDを取得する。
			var thisfig = $('.page:first div[id *= "fig"]:first', document).attr('id');
			//同じ行の商品種別の値を取得
			var categoryName = ' ' + $('#'+ rowid +' td[aria-describedby="' + thisfig + '-list_' + targetType + '_type"] select', table).val();
			//このセルのセレクタを取得
			var listOut = $('#'+ rowid +' td[aria-describedby="' + thisfig + '-' + targetType + '"]', table);
			//リストの項目を全てチェックする
			$('option', listOut).each(function(){
				//直接入力か種別にあう商品名であれば
				if($('span:first', this).attr('class').indexOf('direct-input') != -1 ||
						$('span:last',this).text().indexOf(categoryName) != -1){
					//種別名を抜く
					$('span:last',this).text($('span:last',this).text().replace(categoryName, ''));
					//除外されるべき商品名であれば
				}else{
					//削除する
					$(this).remove();
				}
			});
		}
	 
	/* 関数名:sortProductsInList(cellname, table rowid)
	 * 引数　:String cellname:セルの名前。
	 * 		:Element table: 処理対象のテーブル名。
	 * 		:String rowid:処理対象の行番号。
	 * 戻り値:なし
	 * 概要  :リストの中の商品名を種別で絞る
	 * 作成日:14.07.25
	 * 作成者:T.Masuda
	 * 修正日:14.07.28
	 * 修正者:T.Masuda
	 * 内容  :スマホでは絞込みが機能しない問題についての修正
	*/	
	function sortProductsInList(cellname, table, rowid){
		$(table).editRow(rowid, false);	//行の編集を開始する。

		//指す列が商品名であれば
		if(cellname == 'product'){
			//アイテムを絞り込む。
			filterGridItems(table, rowid, cellname);
		}	
	}
	
	/* 関数名:disappearPage()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :今表示しているページを消す
	 * 作成日:14.06.23
	 * 作成者:T.Masuda
	 * 更新日:14.07.10
	 * 更新者:T.Masuda
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
				gridResize();		// リストのサイズを修正する
			});
	}


	/*
	 * 関数名: getFileName(file_url)
	 * 引数　: String: file_url:
	 * 戻り値: String:
	 * 概要  : URLから現在のページ名(aaa/~.htmlの~の部分)を取得する。
	 * 作成日:14.06.16
	 * 作成者:T.Masuda
	*/
	function getFileName(file_url){
		//ページ名を取得したURLから抽出しfile_urlに格納_
		file_url = file_url.substring(file_url.lastIndexOf("/")+1,file_url.length);
		file_url = file_url.substring(0,file_url.indexOf("."));
		file_url= file_url.replace('', '.html?');
		return file_url;	//ページ名を返却する
	}
	
	//コンテンツのURLを格納するグローバル変数contentUrlを宣言。読み込み時のページ名で初期化
	contentUrl = getFileName(location.href);
	
	/*
	 * 関数名: setCalendar = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : 日付をカレンダーで選択できるようにする
	 * 作成日:14.06.14
	 * 作成者:T.Masuda
	*/
	var setCalendar = function(){
		$.each($('.date'), function(){		//dateクラスを持つ全ての要素を処理
			var id = $(this).attr('id');		//テキストボックスのIDを取得してidに格納
			var $target = $(".page:first #" + id);	//処理対象を取得する。
			//テキストボックスをdatepickerの処理対象にする。また、日本語設定をする
			$target.datepicker($.datepicker.regional['ja']);		
			//ボタン、テキストボックスのどちらを押してもカレンダーが出るようにする
			$target.datepicker('option', 'showOn', 'both');	
			//ボタンのテキストをなくす
			$target.datepicker('option', 'buttonText', '');	
			//プルダウンメニューで年を変更できるようにする
			$target.datepicker('option', 'changeYear', true);
			//プルダウンメニューで月を変更できるようにする	
			$target.datepicker('option', 'changeMonth', true);
			//プルダウンメニューで月を変更できるようにする	
			$target.datepicker('option', 'dateFormat', 'y/mm/dd');
		});
	};
	
	//グラフを表示する領域に対するスタイルシートの設定を行う
	$('#graph').css({
		//JQueryプラグインによるグラフの表示で幅のずれを起こすため、幅をごくわずか狭める
		width: '99.9%',				//幅を設定
		height: '400px',			//グラフとの高さを合わせる
		border: 'solid 1px #000',	//極細の黒の実線で囲む
		borderTopStyle: 'none'		//上の罫線を描画しない
	});

	/*
	 * 関数名: wrapPulldown = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : プルダウンメニューを作成する
	 * 作成日:14.06.24
	 * 作成者:T.Masuda
	*/
	var wrapPulldown = function(){
			//pulldowncontentsに登録したクラスのプルダウンメニューの作成を開始
			$.each(pulldowncontents, function(i){
				//対応するプルダウンメニューに応じたXMLファイルを取得する
				if($('.page:first .pulldown-menu.' + pulldowncontents[i]).length >= 1 ) {
				$.ajax({
					url: xmlMapping + pulldowncontents[i] + '.xml',
					type: 'get',
					dataType: 'xml',
					success: function(xml){	//通信に成功した場合
							xmls[i] = xml;
							//pulldown-menuとプルダウンメニューの項目名をクラスに持つタグを対象に処理する
							$.each($('.pulldown-menu.' + pulldowncontents[i]), function(){
								//種別名の表が作成されていなければ
								if(pulldowncategories[pulldowncontents[i]] == null){
									//種別名の表のベースを作る
									pulldowncategories[pulldowncontents[i]] = new Array();
								}
								var thisSelect = $(this);	//現在指しているselectタグを変数に格納
								//xmlのコンテンツデータを1件ずつ処理
								$(xml).find('content').each(function(i){
									//今指しているselectタグにoptionタグを追加	
          				    	    $(thisSelect).append($('<option></option>')
											.attr('value', i)	//value属性に順番に数値を与える
											.text($(this).find('name').text()) //名前を書き込む
									);	
               					 });
							});
				},
					//通信に失敗した場合
					error: function(){
						alert('failed');	//失敗の旨を伝えるダイアログを表示する
					}
				});
				}
			});
	};
	
	/*
	 * 関数名:function filterPulldownItem(pulldownItem, categoryName)
	 * 引数　:Element pulldownItem:プルダウンメニューの要素。
	 * 		:String categoryName: 絞り込む種別名。
	 * 戻り値: なし
	 * 概要  : カテゴリー名で絞り込んだ名前を配列に格納して返す。
	 * 作成者:T.Masuda
	*/
	function filterPulldownItem(pulldownItem, categoryName){
		var retArray = new Array();	//返却する配列を用意する。
		
		//配列のカウンター変数を0で初期化
		var counter = 0;
		//プルダウンメニューのデータを走査
		$(pulldownItem).each(function(){
			//カテゴリー名が一致していれば
			if($(this).find('category').text() == categoryName){
				//配列に名前を加える。カウンターにも1加える
				filltered[counter++] = $(this).find('name').text();
			}
		});
		
		return retArray;	//生成した配列を返す。
	}

	/*
	 * 関数名:function showItem(showTarget, contentName, filltered)
	 * 引数　:String showTarget:表示するかどうかをチェックする要素。
	 * 		:Array filltered:フィルタリングする名前の配列。
	 * 戻り値: なし
	 * 概要  :リストに存在する項目を表示する。
	 * 作成者:T.Masuda
	*/
	function showItem(showTarget, filltered){
		//リストのテキストを取得
		var contentName = $('a' , showTarget).text();
		//絞られた項目の中に現在対象としているリストがあるか調べる
		for(var i = 0; i < filltered.length; i++){
			//項目が存在していたら
			if(contentName == filltered[i]){
				//表示する
				$(showTarget).css('display', 'block');
				break;	//このリストの走査を終える
			}
		}
	}
	
	
	/*
	 * 関数名: fillterPulldown = function(pulldownType, categoryName, openingList)
	 * 引数　: String pulldownType:プルダウンメニューのタイプ。製品ならproductとなる。
	 * 		:String categoryName: 絞り込む種別名。
	 * 		:var openingList:開くプルダウンメニューの連番。
	 * 戻り値: なし
	 * 概要  : 種別に対応したプルダウンメニューの項目を絞り込む。
	 * 作成日:14.07.27
	 * 作成者:T.Masuda
	*/
	var fillterPulldown = function(pulldownType, categoryName, openingList){
		//種別が空白でなければ
		if(categoryName != ""){
			//プルダウンメニューの番号を格納する変数を宣言
			var pulldownNumber = '';
			//製品名のプルダウンメニューなら
			if(pulldownType = 'product'){
				pulldownNumber = 2;	//プルダウンメニューの番号を格納
			}
			//xmlの中からこのプルダウンメニューのデータを取得
			var thisContent = $(xmls[pulldownNumber]).find('content');
			//絞られた項目を格納する配列を宣言
			var filltered = filterPulldownItem(thisContent, categoryName);

			//リストを全て非表示にしておく
			$('ul.ui-autocomplete:eq(' + openingList + ') li').css('display' ,'none');
			//リストを走査する
			$('ul.ui-autocomplete:eq(' + openingList + ') li').each(function(){
				showItem(this, filltered);	//適当するアイテムを表示する。
			});	
		//種別が選択されていなければ
		} else{
			//種別が選択されてなければ全ての項目を表示
			$('ul.ui-autocomplete:eq(' + openingList + ') li').css('display', 'block');
		}
	}

	/*
	 * 関数名:function filteringItemCategory(pulldownItem, category)
	 * 引数　:Element pulldownItem:プルダウンメニューの項目。
	 * 　　　:String カテゴリー名。
	 * 戻り値:Array:絞られた製品名のリストの配列。
	 * 概要  :プルダウンメニューの製品をカテゴリーで絞り込む。
	 * 作成者:T.Masuda
	*/
	function filteringItemCategory(pulldownItem, category){
		//絞られた項目を格納する配列を宣言
		var retArray = new Array();
		//配列のカウンター変数を0で初期化
		var counter = 0;
		//プルダウンメニューのデータを走査
		$(pulldownItem).each(function(){
			//カテゴリー名が一致していれば
			if($(this).find('category').text() == category){
				//配列に名前を加える。カウンターにも1加える
				filltered[counter++] = $(this).find('name').text();
			}
		});
		
		return retArray;	//作成した配列を返す。
	}
	
	
	/*
	 * 関数名:function checkProductCategory()
	 * 引数　:なし
	 * 戻り値: なし
	 * 概要  : 製品種別のテキストボックスの値が変わったら製品名をチェックし、種別が違ったら製品名をクリアするイベントを登録する。
	 * 作成者:T.Masuda
	*/
	function checkProductCategory(){
		
		//プルダウンが選択されたら
		$(document).on('autocompleteselect', '.product-category input:text', function(event, ui){
			//変更された値を取得
			var thisVal = ui.item.value;
			//製品名を取得
			var itemVal = $('.product-select input').val();
			//製品名の欄を空白にするかどうかの判断を真理値で表現するため、入れ物の変数を用意。
			//trueで初期化
			var needChange = true;
			
			//種別が空白でなければ
			if(thisVal != null){
				//プルダウンメニューの番号を格納する変数を宣言
				var pulldownNumber = 2;
				//xmlの中からこのプルダウンメニューのデータを取得
				var thisContent = $(xmls[pulldownNumber]).find('content');
				//項目を絞り込み配列にして変数に格納する。
				var filltered = filteringItemCategory(thisContent, thisVal);

				//絞られた項目の中に現在対象としているリストがあるか調べる
				for(var i = 0; i < filltered.length; i++){
					//項目が存在していたらチェック終了
					if(itemVal == filltered[i]){
						//needChangeをfalseにする
						needChange = false;
						break;	//このリストの走査を終える
					}
				}
			}
			//選択された種別が変わっていれば
			if(needChange){
				//選択中の製品名を消す
				$('.page:first .product-select input:text').val('');
			}
		});
	}
	
	checkProductCategory();	//製品名チェックのイベントを登録する。
	
	/*
	 * イベント:function filterPulldownOnOpen()
	 * 引数　　:なし
	 * 戻り値　: なし
	 * 概要  　: 製品名のプルダウンメニューが開いたときのイベント登録の関数。種別から製品名を絞り込む。
	 * 作成者　:T.Masuda
	*/
	function filterProductPulldownOnOpen(){
		//製品名のボタンが押されたら
		$(document).on('autocompleteopen', '.product-select', function(event, ui){
			//種別の値を取得
			var categoryValue = $('.page:first .product-category input:text').val();
			//コンボボックスの全体の数を取得
			var comboboxies = $('.custom-combobox-input').length;
			//現在表示されているコンボボックスの数を取得
			var visibleComboboxies = $('.page:first .custom-combobox-input').length;
			//今のコンボボックスが現在のページでは何番目かを取得
			var thisCombobox = $('.custom-combobox-input').index(event.target);
			//処理の対象とすべきプルダウンメニューのリストの番号を計算
			var openingList = comboboxies - visibleComboboxies + thisCombobox;
			//そのその値で対応するプルダウンメニューの項目を絞り込む
			fillterPulldown('product', categoryValue, openingList);
		});
	}
	
	//製品名の種別によるプルダウンメニューの絞り込みのイベントを登録する。
	filterProductPulldownOnOpen();	

	/*
	 * 関数名: loadList = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : リストを呼び出す
	 * 作成日:14.06.17
	 * 作成者:T.Masuda
	*/
	var loadList = function(contentUrl){
		var obj;					//表のデータを設定する変数objを宣言
		$("#" + contentUrl + "-list").jqGrid(objRule[contentUrl]);		//リストを書き出す
	}
	
	/*
	 * 関数名:function drowChartAfterLoad()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : Ajax通信が終わった後にfig名を取得してグラフを書き出す関数をコールするイベントを登録する。
	 * 作成者:T.Masuda
	*/
	function drowChartAfterLoad(){
		//Ajax通信が終わったときのイベントを登録する。
		$(document).ajaxStop(function(){
			//GoogleChartToolsのグラフを描画するタグがあれば
			if($('.page:first .google-chart').length > 0){
				//fig名を取得して宣言した変数figNameに格納
				var figName = $('.page:first div[id *= "fig"]:first', document).attr('id');
				//figのグラフを描画する関数drawChartInFigを呼ぶ
				drawChartInFig(figName);
			}
		});
	}

	//ページロード後のグラフ描画イベントを登録する。
	drowChartAfterLoad();
	
	/* 関数名  : addCSSRule(selector, css)
	 * 引数　  : String selector:処理対象の要素のセレクタ。
	 * 		　: String css:追加するスタイル。
	 * 戻り値  : なし
	 * 概要    : 引数に取ったセレクターにCSSのスタイルを設定する
	 * 作成者  : T.Masuda
	 */
	function addCSSRule(selector, css) { 
	 var sheets = document.styleSheets, 	//スタイルシートを取得
  	sheet = sheets[sheets.length - 1]; 		//最後尾にスタイルを追加する
 
	 if(sheet.insertRule) { 				//挿入型の記述であれば
	 //この形式で記述
 	 sheet.insertRule(selector + '{' +  css + '}', sheet.cssRules.length); 
 	}else if(sheet.addRule) { 				//追加型の記述であれば
 	 sheet.addRule(selector, css, -1);		//関数形式で記述
	 }
	}

	/* 関数名  :function writePage(html)
	 * 引数　  : String html:Ajax通信で取得した画面のHTMLデータ。
	 * 戻り値  : なし
	 * 概要    : 新たな画面を書き出す。
	 * 作成者  : T.Masuda
	 */
	function writePage(html){
		//ページを書き出す領域を作成
		$('#container').prepend($('<div></div>')
				.addClass('page'));
		//用意した領域に書き出す
		$('.page:first').html($(html).find('.main'));
		//ひとつ前のページを非表示にする
		$('.page:first').next().css('display', 'none');
	}

	
	/* 関数名:function afterCallPage()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :callPage後の処理を行う。
	 * 作成者:T.Masuda
	*/
	function afterCallPage(){
		afterCallPageSetContent();			//設置されたタグに対応するコンテンツを生成する。
		afterCallPageEachPages(contentUrl);	//callPage後のページごとの処理を行う。
		afterCallPageLayoutFix();			//動的に寸法がかわるパーツの初期の調整を行う。
	}

	/* 関数名:function afterCallPageSetContent()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :callPage後、設置されたタグに対応するコンテンツを生成する。
	 * 作成者:T.Masuda
	 */
	function afterCallPageSetContent(){
		if($('.page:first .date').length){		//dateクラスの要素があれば
			setCalendar();				//setCalendarを呼び出しカレンダーボタンを配置
		}
		if($('.page:first .list').length){	//pulldown-menuクラスの要素があれば
			loadList(contentUrl);				//wrapPulldownを呼び出しプルダウンメニューを配置
		}
		if($('.page:first .pulldown-menu').length){	//pulldown-menuクラスの要素があれば
			wrapPulldown();						//wrapPulldownを呼び出しプルダウンメニューを配置
			$( ".pulldown-menu" ).combobox({ appendTo: "#container" });	//プルダウンメニューをコンボボックスにする
			$('li ') // コンボボックスの項目にvalue属性を設定
		}
		if($('.page:first #tab-container').length){	//タブのあるページが呼び出されたら
			//タブの幅を取得。パーセンテージ調整後リストの幅設定に使う
			tabContainerWidth = $('#tab-container').width() * tabContainerPercent;
		}
	}
	
	/* 関数名:function afterCallPageEachPages(contentUrl)
	 * 引数　:String contentUrl:コンテンツ名。
	 * 戻り値:なし
	 * 概要  :callPage後に各コンテンツ毎の処理を行う。
	 * 作成者:T.Masuda
	*/
	function afterCallPageEachPages(contentUrl){
		//formlyで画面レイアウトを整える
		$('#' + contentUrl).formly({	//formlyでページのレイアウトを調節する
			'onBlur':false //マウスオーバーでダイアログを出すか
		});
		//DROPDOWN CHECK LISTを使いチェックリストを持ったドロップダウンメニューを生成する
		if(contentUrl == 'fig2'){	//fig2を読み込んだなら
			//チェックリストを持ったドロップダウンメニューを生成する
			$('#voucher-status-order:last', document).dropdownchecklist
			({ width: ($('.main').width() / 3) , forceMultiple: true, emptyText: '-----'});
		} else if(contentUrl == 'fig3'){	//fig3を読み込んだなら
			//チェックリストを持ったドロップダウンメニューを生成する
			$('#voucher-status-order:last', document).dropdownchecklist
			({ width: ($('.main').width() / 3) , forceMultiple: true, emptyText: '-----'});
		}
	}

	/* 関数名:function afterCallPageLayoutFix()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :callPage後に、読み込んだ画面のレイアウトの調整を行う。
	 * 作成者:T.Masuda
	 */
	function afterCallPageLayoutFix(){
		setButtons(false);		//ボタンを配置する
		setContentHeight();		//setContentHeightを呼び出し高さを修正
		changeFontSize();		//フォントサイズを調整する
		executeTextBoxResize();	//テキストボックスのリサイズを行う
		gridResize();			//念のためもう一度グリッドの幅を直す
	}
	
	/* 関数名: function callPage(name)
	 * 引数　:String name:画面名。HTMLファイルの名前と合致する。
	 * 戻り値:なし
	 * 概要  :ページを呼び出し表示する
	 * 作成日:14.06.23
	 * 作成者:T.Masuda
	*/
	  function callPage(name){
		// nameに何も入っていなければ
		  if(name === void(0)){
			// 何もさせない
			  return false;
		}
		//表示しているプルダウンメニューを消す
		$('.ui-autocomplete').css('display', 'none');
		//ページのアドレスを取得してグローバル変数contentUrlに格納する。
		contentUrl = name;
		//ajax通信でページのHTMLを呼び出す
		$.ajax({
			url: pageMapping + contentUrl + jspString,
			dataType: "html",
			type: 'get',
		//成功したら
			success: function(html){
				writePage(html);	//新たな画面を表示する。
				afterCallPage();	//callPage後の処理をまとめて行う。
			  },
				  error : function(){					//データの取得に失敗したら
					  alert('申し訳ありません。ご指定されたページは現在製作中となっております。');	//その旨をalertで伝える
			  }
		});
	}

	
	/* 関数名:onPageClose = function()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :クローズボックスが押されたときの処理
	 * 作成日:14.07.10
	 * 作成者:T.Masuda
	*/
	  function onPageClose(){
		 //現在表示中のページのIDを取得する。
		var pageId = $('.page:first div[id *= "fig"]:first', document).attr('id');
		if(isListChanged(isChange, pageId)){		//リストが編集されていたら
			saveList();			//ダイアログを出し編集結果を保存するか選択
		} else {	//編集されていなければ
			disappearPage();	//ページをそのまま消す
		}
	}
	
	/* 関数名:function addCallPageEvent()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :リンクのボタンがクリックされたときに画面遷移の関数をコールするイベントを登録する。
	 * 作成者:T.Masuda
	*/	
	function addCallPageEvent(){
		//ページを読み込むイベントを登録
		$(document).on('click', '.callpage', function(){
			callPage($(this).attr('name'));
		});
	}
	
	addCallPageEvent();
	
	/* 関数名:function addCloseButtonEvent()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :クローズボタンをクリックしたら現在の画面を閉じるイベントを登録する。
	 * 作成者:T.Masuda
	*/	
	function addCloseButtonEvent(){
		//クローズボタンをクリックしたら
		$(document).on('click', '.close-button', function(){
			onPageClose();	//現在のページを閉じる。
		});
	}
	
	addCloseButtonEvent();	//クローズボタンのイベントを登録する。

	/* 関数名:saveList()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :ダイアログを表示して編集したリストを保存するか選択させる
	 * 作成日:14.07.01
	 * 作成者:T.Masuda
	*/	
	function saveList(){
		//$('#chooseListSave', document).dialog('open');	//ダイアログを表示する
		disappearPage();
	}

	/* 関数名:isTouchDevice()
	 * 引数　:なし
	 * 戻り値:boolean:判定結果を返す。
	 * 概要  :ユーザの端末がタッチ端末かどうかを判定して返す。
	 * 作成者:T.Masuda
	*/	
	function isTouchDevice(){
		var retBoo = false;		//判定を格納する変数を宣言、falseで初期化する。
		
		//UAがタッチ端末であれば
		if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 ||
				 navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
			retBoo = true;	//trueを返すようにする。
		}
		
		return retBoo; //判定結果を返す。
	}

	/* 関数名:setListEditButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :リスト編集の汎用的なボタンをjQueryUIのボタンに置き換える。
	 * 作成者:T.Masuda
	*/	
	function setListEditButtons(){
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
			.attr('title', toolTipText['delete']);		
		}
	}

	/* 関数名:setListEditSpecialButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :リスト編集の特殊なボタンをjQueryUIのボタンに置き換える。
	 * 作成者:T.Masuda
	*/	
	function setListEditSpecialButtons(){
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
	}
	
	/* 関数名:setCommonButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :使用頻度が高いボタンをまとめてjQueryUIのボタンに置き換える。
	 * 作成者:T.Masuda
	*/	
	function setCommonButtons(){
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
		
		// 検索ボタンがあれば
		if($('.page:first button.on-search').length >= 1){
			//検索ボタンのレイアウトを変更
			$('.page:first .on-search').button({
				icons: {						//ボタンの画像を設定
					primary: 'ui-icon-search'	//ボタンの画像を虫眼鏡マークにする
				},
				text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['search']);
		}
		
	}
	
	/* 関数名:setRegistCancelButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :登録ボタン、キャンセルボタンをjQueryUIのボタンに置き換える。
	 * 作成者:T.Masuda
	*/	
	function setRegistCancelButtons(){
		// 登録ボタンがあれば
		if($('.page:first button.register_button').length >= 1){
			//登録ボタンのレイアウトを変更
			$('.page:first .register_button').button({
				icons: {						//ボタンの画像を設定
					primary: 'ui-icon-check'	//ボタンの画像をチェックマークにする
				},
				text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['check']);
		}
		// キャンセルボタンがあれば
		if($('.page:first button.cancel-button').length >= 1){
			//キャンセルボタンのレイアウトを変更
			$('.page:first .cancel-button').button({
				icons: {						//ボタンの画像を設定
					primary: 'ui-icon-cancel'	//ボタンの画像をキャンセルマークにする
				},
				text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['cancel']);
		}
	}
	
	/* 関数名:setToolTipAlterButtons(touchDevice)
	 * 引数　:Boolean isTouchDevice:タッチ端末かどうかの判定。
	 * 戻り値:なし
	 * 概要  :タッチ端末かどうかでツールチップを配置するかどうかを変えるボタン群を、jQueryUIのボタンに置き換える。
	 * 作成者:T.Masuda
	*/	
	function setToolTipAlterButtons(touchDevice){
		//カレンダーボタンがあれば(datapicker)
		if($('.page:first button.ui-datepicker-trigger').length >= 1){
			//カレンダーボタンのレイアウトを変更
			$('.page:first .ui-datepicker-trigger').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-calendar'	//ボタンの画像をカレンダーマークにする
			},
			text: false						//テキストを非表示にする
			})			//ツールチップ用のテキストを追加
			.attr('title', toolTipText['calendar']);
			if(!(touchDevice)){				//タッチ端末でなければ
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
		
		//選択ボタンがあれば
		if($('.page:first button.ui-button.custom-combobox-toggle').length >= 1){
			//選択ボタンのレイアウトを変更
			$('.page:first button.ui-button.custom-combobox-toggle')
			.attr('title', toolTipText['select']);
			if(!(touchDevice)){				//タッチ端末でなければ
				$('.page:first button.ui-button.custom-combobox-toggle')
					.powerTip({						//ツールチップをセット
						placement: 'n',				//上に表示
						followMouse: true,			//マウスについてくる
						smartPlacement: true,		//画面外に出たら戻ってくる
						intentPollInteterval: 0,	//表示は早めに
						intentSensitivity: 10		//表示されるまでの距離制限			
				});
			}
		}
		
	}

	/* 関数名:setButtonsEachGroup(isTopPage)
	 * 引数　:Boolean isTouchDevice:タッチ端末かどうかの判定。
	 * 戻り値:なし
	 * 概要  :ボタンのグループごとにjQueryUIのボタンを置き換える。
	 * 作成者:T.Masuda
	*/	
	function setButtonsEachGroup(touchDevice){
		
		//引数の入力がなければタッチ端末ではないことにする。
		touchDevice = touchDevice === void(0)? false: true;
		
		//各グループごとのボタンレイアウト変更関数をコールする。
		setListEditButtons();
		setListEditSpecialButtons();
		setCommonButtons();
		setRegistCancelButtons();
		setToolTipAlterButtons(isTouchDevice);
	}
	
	
/* 関数名:setButtons(isTopPage)
 * 引数　:Boolean isTopPage:トップページでの読み込みかどうかの判定。
 * 戻り値:なし
 * 概要  :ボタンをJQuery UIのものに置き換える
 * 作成日:14.07.01
 * 作成者:T.Masuda
 * 修正日:14.07.25
 * 修正者:T.Masuda
 * 内容  :ツールチップ対応
 * 修正日:14.07.30
 * 修正者:T.Masuda
 * 内容  :トップページでの読み込み時の記述追加
*/	
function setButtons(isTopPage){
	//JQueryの記述を開始
	$(function(){
		//タッチ端末かの判定を格納する変数
		var touchDevice = isTouchDevice();

		//buttonクラスを持つボタンをjQuery UIのボタンに置き換える
		$('.page:first button.button').button({
				text: true					//テキストだけ表示する
		});
		
		setButtonsEachGroup(isTouchDevice);	//各ボタンのグループごとにまとめてボタンを置き換える。
		
		//タッチ端末でなければ
		if(!touchDevice){
			//ツールチップをセット
			$('.page:first button.button').powerTip({
				placement: 'n',				//上に表示
				followMouse: true,			//マウスについてくる
				smartPlacement: true,		//画面外に出たら戻ってくる
				intentPollInteterval: 0,	//表示は早めに
				intentSensitivity: 10		//表示されるまでの距離制限
			});
		}
	});
	//トップページからの呼び出しなら
	if(isTopPage){
		endLoad();	//トップページのロード終了時の処理を行う
	}
}


/* 関数名:function showLinkList()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :リンクリストのダイアログを設定ボタン付近に表示する。
 */	
function showLinkList(){
	var dialogX;	//ダイアログのX座標
	var dialogY;	//ダイアログのY座標
	var offset = $('.setting-button').offset();	//設定ボタンの座標を取得
	//設定ボタン付近のX座標を取得
	dialogX =　$('.main').width() / 4 * 3+ parseInt($('.main').css('margin-left'));	
	dialogY = offset.top + $('.setting-button').height();	/* 設定ボタンの下の位置を取得 */
	$('#modal').dialog({position:[dialogX, dialogY]});		//ダイアログの位置を設定する
	$('#modal').dialog('open');		//ダイアログを表示する
	return false;					//以後のJavaScriptの処理を止める
}

/* 
 * 関数名:function createLinkListDialog()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :リンクリストのダイアログを作る。
 * 作成者:T.Masuda
*/
function createLinkListDialog(){
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
			$(".ui-dialog-titlebar-close").hide();
		}
	})
	//ダイアログの項目をクリックしたら
	.on('click', 'li', function(){
		$(this).parent().parent().dialog('close');	//ダイアログを閉じる
	});
		
	/* イベント名:$(document).on('click', '.setting-button',function() {
	 * 引数　　　:なし
	 * 戻り値　　:なし
	 * 概要  　　:設定ボタンをクリックしたときのイベント。
	 */	
	$(document).on('click', '.setting-button',function() {
		showLinkList();	//リンクリストのダイアログを表示する。
	});
		
	/* イベント名:$(document).on('click', '.ui-widget-overlay', function(){});
	 * 引数　　　:なし
	 * 戻り値　　:なし
	 * 概要  　　:オーバーレイをクリックしたときのイベント。
	 */	
	// モーダルダイアログ以外のブラウザ領域をクリックすると
	$(document).on('click', '.ui-widget-overlay', function(){
		$('#modal', document).dialog('close');	//ダイアログを閉じる
	});
}
 
/* 
 * 関数名:function addResizeEvents()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :画面アイテムのリサイズのイベントを一斉に登録する。
 * 作成者:T.Masuda
*/
function addResizeEvents(){
	addChartResizeEvent();	//グラフのリサイズイベントを登録する。
	addExecuteTextBoxResizeEvent();	//テキストボックスのリサイズイベントを登録する。
	addGridResizeEvent();		//表のリサイズイベントを登録する。
}

/* 
 * 関数名:function addButtonEvents()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :ボタンのイベントを一斉に登録する。
 * 作成者:T.Masuda
*/
function addButtonEvents(){
	addAddConfirmButtonEvent();		//登録ボタンのイベントを登録する。
	addEditConfirmButtonEvent();	//編集ボタンのイベントを登録する。
	addRegistRecordButtonEvent();	//レコード登録ボタンのイベントを登録する。
	addNodeDevideButtonEvent();		//ノード分割ボタンのイベントを登録する。
}

/* 
 * 関数名:function addGridEditEvents()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :リスト関連のイベントを一斉に登録する。
 * 作成者:T.Masuda
*/
function addGridEditEvents(){
	addShowAddDialogEvent();	//追加ダイアログを表示するイベントを設定する。
	addShowEditDialogEvent();	//追加ダイアログを表示するイベントを設定する。
	addDeleteRecordEvent();		//レコード削除ボタンのイベントを登録する。
}



//ドキュメント配置後のイベント。
$(document).ready(function(){
	createLinkListDialog();		//リンクリストを作る。
	
	addAfterShowTabEvent()		//タブが切り替わった後のイベントを登録する。
	
	addComboBoxCloseEvent();	//コンボボックスを閉じるイベントを登録する。

	addResizeEvents();			//リサイズ系のイベントを一斉に登録する。
	addButtonEvents();			//ボタン押下のイベントを一斉に登録する。
	addGridEditEvents();		//リスト編集関連のイベントを一斉に登録する。
});

/* 
 * 関数名:function closeChooseListSaveDialog(dialog)
 * 引数  :Element dialog:ダイアログの要素。
 * 戻り値:なし
 * 概要  :レコード保存確認ダイアログを閉じる。
 * 作成者:T.Masuda
*/
function closeChooseListSaveDialog(dialog){
	$(dialog).dialog('close');	//ダイアログを閉じる
	//現在表示されている画面のIDを取得する。
	var fig = $('.page:first div[id *= "fig"]:first', document).attr('id');
	isChange -= figs[fig];	//isChangeから現在の画面の編集フラグをおろす。
	disappearPage();		//現在の画面を閉じる。
}


/* 
 * 関数名:function createChooseListDialog()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :リスト保存前に画面を閉じようとしたら表示される、保存ダイアログを作る。
 * 作成者:T.Masuda
*/
function createChooseListSaveDialog(){
	
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
			buttons: {
				"保存する": function(){
					//保存処理を行う。
					closeChooseListSaveDialog(this);	//ダイアログとページを閉じる。
				},
				"保存しない": function(){
					closeChooseListSaveDialog(this);	//ダイアログとページを閉じる。
				},
				"キャンセル": function(){			//Cancelボタンを押したら
					$(this).dialog('close');		//ダイアログを閉じる
				}
		}
	});	
}    

/* 関数名: callList(contentName)
 * 引数  : String contentName:コンテンツ名。各画面名(例) fig2-1)。IDの指定に利用する。
 * 戻り値: なし
 * 概要  : リストを作る
 * 作成日: 14.07.06
 * 作成者: T.Masuda
 */
function callList(contentName){
		var obj;					//表のデータを設定する変数objを宣言
		$("#" + contentName + "-list").jqGrid(objRule[contentName]);		//リストを書き出す
}

/* 関数名: function gridResize()
 * 引数  : なし
 * 戻り値: なし
 * 概要  : リストの幅を調整する
 * 作成日: 14.07.14
 * 作成者: T.Masuda
 */
function gridResize() {
		// リストをラップするタグの幅から1を引いて引いて新たな幅にする
		gridWidth = $('.wrap-list:visible').width() - 1;
	  
      $('.list').setGridWidth(gridWidth);	// グリッドの幅を設定
}

/* 関数名:function addGridResizeEvent()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :グリッドのリサイズイベントを登録する。
 */
function addGridResizeEvent(){
	$(window).resize(function () {	//ウィンドウの大きさが変わったら
		gridResize();				//リストの幅を調整する
	}).trigger('resize');			//リサイズイベント取得の補助
}

/* 
 * 関数名:function getChartDataFromMap(contentName, unit)
 * 引数  :String unit:画面名。
 *  	:String contentName:グラフの種類。
 * 戻り値:map:グラフのデータ。
 * 概要  :グラフのデータを取得する。
 * 作成者:T.Masuda
*/ 
function getChartDataFromMap(contentName, unit){
	 var retMap = '';		//返却する変数を宣言する。空文字で初期化しておく。
	 // unitの値が入っていれば
	 if(unit !== void(0)){
		 //chartDataの連想配列をセット
		 retMap = google.visualization.arrayToDataTable(chartData[contentName][unit]);
		 // unitの値が入っていないが、データのソースが連想配列となっているなら
	 } else if(unit === void(0) && "defaultunit" in chartData[contentName]){
		 //chartDataの連想配列のデフォルトデータをセット
		 retMap = google.visualization.arrayToDataTable(chartData[contentName]["defaultunit"]);
	 } else {
		 //chartDataをセット
		 retMap = google.visualization.arrayToDataTable(chartData[contentName]);
	 }
	 
	 return retMap;	//取得したデータを返す。
}

/* 
 * 関数名:writeTable(contentName, data, existTable)
 * 引数　:String contentName:コンテンツ(画面)名。
 *      :map data:表のデータ。グラフと共通する。
 * 　　  :boolean existTable:テーブルを書くかどうかの判定。
 * 戻り値:なし
 * 概要  :Google Chart Toolsの表を書く。
 * 作成者:T.Masuda
*/ 
function writeTable(contentName, data, existTable){
	//表を書かない場合は
	if(existTable === void(0) || !existTable){
		return;	//ここで処理を終える
	}
	//表の場所を準備する
	var table = new google.visualization.Table(document.getElementById(contentName + '-table'));
	//所定の場所に表を描く
	table.draw(data, tableOptions[contentName]);
}


/* 
 * 関数名:drawChart(contentName, graphType)
 * 引数  :String contentName:画面名。
 *  	:String graphType:グラフの種類。
 *  	:boolean existTable:テーブルとセットのグラフを描くかどうかのフラグ。
 *  	:String unit:グラフデータの連想配列のキー。
 * 戻り値:なし
 * 概要  :Google Chart Toolsでグラフを描く
 * 作成日:14.07.06
 * 作成者:T.Masuda
 * 修正日:14.07.21
 * 修正者:T.Masuda
 * 内容  :resizeイベント対応
 * 修正日:14.12.03
 * 修正者:T.Masuda
 * 内容  :引数 unit追加、連想配列による年月日表示きりかえ対応
*/ 
function drawChart(contentName, graphType, existTable, unit) {
	var chart = '';	//グラフのインスタンスを格納する変数を宣言、空文字で初期化する。
	var data = getChartDataFromMap(contentName, unit);		//グラフに必要なデータを取得する。
 
	//折れ線グラフを描く場合
	if(graphType == 'line_chart'){
		//折れ線グラフを描き出す場所をセット
		chart = new google.visualization.LineChart(document.getElementById(contentName + '-graph'));
	//横棒グラフを描く場合
	} else if(graphType == 'bar_chart'){
		//横棒グラフを描き出す場所をセット
		chart = new google.visualization.BarChart(document.getElementById(contentName + '-graph'));
	//縦棒グラフを描く場合
	} else if(graphType == 'column_chart'){
		//横棒グラフを描き出す場所をセット
		chart = new google.visualization.ColumnChart(document.getElementById(contentName + '-graph'));
	}
	
	//データと追加設定を引数にして所定の場所にグラフを描く
	chart.draw(data,chartOptions[contentName]);
	writeTable(contentName, data, existTable);	//テーブルがあれば描画する。
}


/* 
 * 関数名:function drawChartInFig(figName)
 * 引数  :var figName:画面名。
 * 戻り値:なし
 * 概要  :グラフ用のタグを取得して画面にグラフを描く
 * 作成日:14.07.21
 * 作成者:T.Masuda
*/ 
function drawChartInFig(figName){
	$('#'+ figName +' .google-chart').each(function(){
		//グラフのタグからFig名を取り出して、ここで宣言した変数thisFigに格納
		var thisFig = $(this).attr('id').replace('-graph', '');
		//グラフのタイプを抜き出す
		var graphType = '';
		//表を描画するかどうかの値を格納する変数hasTableを宣言。falseで初期化
		var hasTable = false;
		//折れ線グラフなら
		if($(this).hasClass('line_chart')){
			graphType = 'line_chart';	//graphTypeに折れ線グラフのクラス名を格納
		//横棒線グラフなら
		} else if($(this).hasClass('bar_chart')) {
			graphType = 'bar_chart';	//graphTypeに棒グラフのクラス名を格納
		//縦棒線グラフなら
		} else if($(this).hasClass('column_chart')) {
			graphType = 'column_chart';	//graphTypeに棒グラフのクラス名を格納
		}
		//表を持っていれば
		if($(this).hasClass('has-table')){
			hasTable = true;	//表の描画フラグをtrueにする
		}
		
		//Fig、グラフのタイプ、表があるかどうかの各変数を引数にしてdrawChartでグラフを描く
		drawChart(thisFig, graphType, hasTable);
	});
}

/* 
 * 関数名:function doDrawChart()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :グラフを描く
 * 作成日:14.07.21
 * 作成者:T.Masuda
*/ 
function doDrawChart(){
	//現在表示しているページにグラフがあれば
	if($('.page:first .google-chart').length > 0){
		//fig名を取得して宣言した変数figNameに格納
		var figName = $('.page:first div[id *= "fig"]:first', document).attr('id');
		//figのグラフを描画する関数drawChartInFigを呼ぶ
		drawChartInFig(figName);
	}
}

/* 
 * 関数名:function addChartResizeEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :ウィンドウのサイズが変わったときに、ウィンドウのサイズに合わせてグラフを再描画するイベントを登録する。
 * 作成者:T.Masuda
 */ 
function addChartResizeEvent(){
	//タイマーとなる変数timerを宣言、falseで初期化
	var timer = false;
	
	//ウィンドウのリサイズイベントのコールバック関数を登録する。
	$(window).resize(function() {
		if (timer !== false) {		//リサイズが続いていれば
			clearTimeout(timer);	//タイマーのカウントダウンをやり直す
		}
		timer = setTimeout(function() {	//リサイズを終えたら関数実行
			doDrawChart();	//doDrawChartを呼び出してグラフを描く
		}, 200);		//タイムアウトは200ミリ秒
	});
}

/* 
 * 関数名:function addAfterShowTabEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :easytabsのタブのインデックスが押された後のイベント。
 * 作成者:T.Masuda
*/ 
function addAfterShowTabEvent(){
	
	//easytabsのタブが押された後のイベントを登録する。
	$(document).on('easytabs:after', function(){
		doDrawChart();	//doDrawChartを呼び出してグラフを描く
		// リサイズ系メソッドをコール
		setContentHeight();
		executeTextBoxResize();
		gridResize();
	});
}

/* 
 * 関数名:function calcWithoutTextBox(widthSum, index)
 * 引数  :Array widthSum:2段組みレイアウトのブロックのテキストボックス以外の要素の幅のパーセンテージを格納した配列。
 * 		:int index:該当する要素のwidthSum内でのインデックス。
 * 戻り値:int:算出したパーセンテージを返す。
 * 概要  :テキストボックス以外の要素の幅をパーセンテージで返す。
 * 作成者:T.Masuda
*/
function calcWithoutTextBox(widthSum, index){
	var retValue = 0;	//返却する値を格納する変数を宣言、初期化する。
	var arrayLength = widthSum[index].length;	//走査する配列の要素数を取得する。
	
	//for文をまわしてテキストボックスを除いた幅のパーセンテージ合計を算出
	for(var i = 0; i < widthSum[index].length; i++){
		//divParcentに要素の幅パーセンテージを足していく
		retValue += widthSum[index][i];
	}
	
	return retValue;	//算出した幅を返す。
}

/* 
 * 関数名:function calcWithoutTextBoxOnFixed(widthSum, index)
 * 引数  :Array widthSum:2段組みレイアウトのブロックのテキストボックス以外の要素の幅のパーセンテージを格納した配列。
 * 		:int index:該当する要素のwidthSum内でのインデックス。
 * 戻り値:int:算出したパーセンテージを返す。
 * 概要  :テキストボックス以外の要素の幅をパーセンテージで返す。実際の幅の数値を算出する。
 * 作成者:T.Masuda
 */
function calcWithoutTextBoxOnFixed(selector, widthSum, index){
	var retValue = 0;							//返却する値を格納する変数を宣言、初期化する。
	var arrayLength = widthSum[index].length;	//走査する配列の要素数を取得する。
	
	//for文をまわしてテキストボックスを除いた幅のパーセンテージ合計を算出
	for(var i = 0; i < arrayLength; i++){
		if(!(i >= arrayLength - 1)){
			//withoutTextboxWidthに要素の幅を足していく
			retValue += $(widthSum[index][i], selector).outerWidth();
		}else{
			// 最後は補正値を足す
			retValue += widthSum[index][i];
		}
	}
	
	return retValue;	//算出した幅を返す。
}


/* 
 * 関数名:textBoxResize()
 * 引数  :String selector:テキストボックスのセレクタ。
 * 		:String index:テキストボックスのサイズの計算に使う数値の配列を格納した連想配列のキー。
 * 戻り値:なし
 * 概要  :指定したテキストボックスの幅を動的に変える。
 * 作成日:14.07.22
 * 作成者:T.Masuda
*/
function textBoxResize(selector, index){
	//テキストボックスを除いた幅のパーセンテージ合計を求めるための変数
	//widhoutTextboxWidthParcentを宣言
	var withoutTextboxWidthParcent = calcWithoutTextBox(widthSum, index);
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
 * 関数名:textBoxResizeOnFixed()
 * 引数  :String selector:テキストボックスのセレクタ。
 * 		:String index	:テキストボックスのサイズの計算に使う数値の配列を格納した連想配列のキー。
 * 戻り値:なし
 * 概要  :固定幅での計算からテキストボックスのサイズを決める
 * 作成日:14.12.07
 * 作成者:T.Masuda
*/
function textBoxResizeOnFixed(selector, index){
	//テキストボックスを除いた幅の合計を求めるための変数
	//widhoutTextboxWidthを宣言、テキストボックス以外の要素の幅を取得して格納する。
	var withoutTextboxWidth = calcWithoutTextBoxOnFixed(selector, widthSum, index);

	//テキストボックスが取る幅を算出
	var textboxWidth = selector.width() - withoutTextboxWidth;
	// 新たな幅をセット
	$('input:text', selector).css('width', (textboxWidth) + 'px');
};

/* 
 * 関数名:removeTextBoxResize()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :指定した要素に後から指定した幅をリセットする。
 * 作成日:14.07.22
 * 作成者:T.Masuda
*/ 
function removeTextBoxResize(){
	//指定したクラスの子のテキストボックスの幅をリセットする。
	$('.parallel-text input').css('width', '');
	$('.single-line-text input').css('width', '');
	$('.product-select input').css('width', '');
	$('.product-category input').css('width', '');
	$('.parallel-text.two-tb input').css('width', '');
};

/* 
 * 関数名:function executeTextBoxResize()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :テキストボックスのリサイズの関数を一斉にコールする。
 * 作成日:14.07.22
 * 作成者:T.Masuda
*/ 
function executeTextBoxResize(){
	
	//画面の幅がborderWidthに設定された値以下であれば
	if($(window).width() <= borderWidth[0]){
		//textBoxResize関数でリサイズを行う、配列に格納された対象のセレクタを走査する。
		for(var i = 0; i < tbResizeArrayLength; i++){
			textBoxResize(tbResizeArray[i], i);	//テキストボックスのサイズを修正する
		}
	//そうでなければ
	} else{
		removeTextBoxResize();	//textBoxResizeで付与された幅を消去する
	}
	
	//2つ目の設定値を画面幅が下回ったら
	if($('.main:first').width() <= borderWidth[1]){
		///textBoxResizeOnFixed関数でリサイズを行う、配列に格納された対象のセレクタを走査する。
		for(var i = tbResizeArrayLength; i < tbResizeOnFixedArrayLength; i++){
			textBoxResizeOnFixed($(tbResizeOnFixedArray[i - tbResizeArrayLength]), i);	//テキストボックスのサイズを修正する
		}
	}
};


/* 
 * 関数名:function addExecuteTextBoxResizeEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :画面の幅が変わった後にテキストボックスのリサイズを行う関数をコールするイベントを登録する。
 * 作成者:T.Masuda
*/
function addExecuteTextBoxResizeEvent(){
	//ウィンドウがリサイズされたら
	$(window).resize(function(){
		executeTextBoxResize();	/* テキストボックスのリサイズを行う */
	});
}


/* 
 * 関数名:changeGridHeight(newGridHeight)
 * 引数  :int newGridHeight:指定する高さの数値。
 * 戻り値:なし
 * 概要  :リストの高さを変える
 * 作成日:14.07.23
 * 作成者:T.Masuda
*/ 
function changeGridHeight(newGridHeight){
	//リストの高さを変える
	$('.list').setGridHeight(newGridHeight);
}

/* 
 * 関数名:function streachList(newListHeight)
 * 引数  :int newGridHeight:指定する高さの数値。
 * 戻り値:なし
 * 概要  :リストの高さを変える。ドキュメントから.listクラスを見る。
 * 作成者:T.Masuda
*/ 
function streachList(newListHeight){
	$('.list', document).setGridHeight(newListHeight);
}

//オートコンプリート機能を持ったコンボボックスの初期化の記述。
  (function( $ ) {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },

      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .attr("name", $(this.wrapper).prev().attr("name"))
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-all" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" ),
            // 一覧を開く直前のイベント
            response: function(event, ui){
        		// 現在開いている一覧を閉じる
        		$('.ui-autocomplete:visible').toggle();
            }
          })
          .tooltip({
            tooltipClass: "ui-state-highlight"
          });
        $(this.wrapper).prev().attr("name", "");

        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
			$('.custom-combobox-toggle').focus();
			$('.custom-combobox-toggle').blur();
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<button>" )
          .attr( "tabIndex", -1 )
          .insertAfter(this.wrapper)
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .addClass( "custom-combobox-toggle" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .click(function() {
//            input.focus();

 
            // Close if already visible
            if ( wasOpen ) {
				//表示されていれば消す
				input.autocomplete( "widget" ).css( "display" , 'none');
              return;
  
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 	   select : function(){
		   alert('a');
	   },
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
  })( jQuery );
//ここまでコンボボックスの記述

/* 
 * 関数名:function endLoad()
 * 引数  :int newGridHeight:指定する高さの数値。
 * 戻り値:なし
 * 概要  :ロード画面終了時に呼び出される関数。少し間を置いてからコンテンツを表示する。
 * 作成者:T.Masuda
*/ 
function endLoad(){
	//ロード終了後少し待機してから表示する
	sleep(500, function (){
		//ローディング画像を隠す
		$("#loading").hide();
		//最後にコンテンツを表示する
		$('#container').css('visibility', 'visible');
	 } );			
}

/* 
 * 関数名:sleep(time, callback)
 * 引数  :String time:実行を待つミリ秒数。
 * 		:function callback:コールバック関数。
 * 戻り値:なし
 * 概要  :timeミリ秒待ってコールバック関数を実行
 * 作成日:14.07.31
 * 作成者:T.Masuda
*/ 
function sleep(time, callback){
	setTimeout(callback, time);	//所定の時間が経過したら関数を実行
}

/* 
 * 関数名:function openEditDialog(page)
 * 引数  :String page:ページ名。
 * 戻り値:なし
 * 概要  :リストの追加・編集のダイアログ(ページ)を開く時の処理。未実装。
 * 作成日:14.12.01
 * 作成者:T.Masuda
 */ 
function openEditDialog(page){
	
}

/* 関数名:function appendRowData(getRowFrom, targetGrid, addElem, elemStrings){});
 * 引数　:jQuery checkedRow:チェックが入った行のデータ。
 * 引数　:jQuery grid:レコードを取得する元のテーブル。
 * 		:Array addElem:レコードの追記項目。
 * 		:Array elemStrings:追記する文字列の配列。
 * 		:String targetGrid:レコードを挿入する先のテーブル。
 * 戻り値:なし。
 * 概要  :チェックが入ったレコードを指定してjqGridの表に挿入する処理を行う。
 * 作成者:T.Masuda
*/	
function appendRowData(checkedRow, grid, addElem, elemStrings, targetGrid){
	var rowdata = '';	//行データを受け取る変数を用意する。
	var checkedRowLength = checkedRow.length;	//チェックが入った行の数を取得する。
	
	// checkedrowのレコードを走査する。
	for(var i = 0; i < checkedRowLength; i++){
		// 行のデータを取得
		rowdata = grid.getRowData(checkedRow.eq(i).attr("id"));
		// レコードに追記する項目があれば
		if(addElem !== void(0) && addElem.length > 0){
			// for文で行データの連想配列に要素を追加していく
			for(var j = 0; j < addElem.length; j++){
				// 行データに要素を追加
				rowdata[elemStrings[j]] = addElem[elemStrings[j]];
			}
		}

		// 追加対象のリストにレコードを追加する。
		$(targetGrid).addRowData(undefined, rowdata);
	}
}


/* 関数名:function addSelectedRows(getRowFrom, targetGrid, addElem, elemStrings){});
 * 引数　:String getRowFrom:レコードを取得する元のテーブルのセレクタ。
 * 		:String targetGrid:レコードを挿入する先のテーブル。
 * 		:Array addElem:レコードの追記項目。
 * 		:Array elemStrings:追記する文字列の配列。
 * 戻り値:boolean:処理の成否を返す。
 * 概要  :チェックが入ったレコードを指定してjqGridの表に挿入する。実際に挿入を行う処理はappendRowData関数で行う。
 * 作成日:14.12.2
 * 作成者:T.Masuda
 * 備考　:引数はグリッドのセレクタの文字列
*/	
function addSelectedRows(getRowFrom, targetGrid, addElem, elemStrings){
	// チェックボックスが入っているレコードを取得
	var $checkedrow = $(getRowFrom +' .jqgrow:has(input:checkbox:checked)');
	//チェックボックスが入っているレコードがなかったら
	if($checkedrow.length < 1){
		// 処理を中断
		return false;
	}
	
	// 表のjQueryオブジェクトを変数に格納
	var $grid = $(getRowFrom);
	// 行データを指定した表に挿入する。
	appendRowData($checkedrow, $grid, addElem, elemStrings, targetGrid);

	// 関数が正常に終了したらtrueを返す
	return true;
}


/* 関数名:function overwriteSameProductCodeRecord()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :製品コードが被るレコードを新しいレコードで上書きする。
 * 作成者:T.Masuda
*/	
function overwriteSameProductCodeRecord(){
	// 製品コードが被るレコードを上書き。まずは該当する行を削除する
	$('#fig5-list').delRowData($('#fig5-list .jqgrow:has(td[value="' + values["product_code"] + '"])').attr('id'));
	//製品登録ダイアログのボタンをクリックする。
	$('#editcntfig5-list #sData').click();
	//新しいレコードを挿入する
	$('#fig5-list').setRowData($('#fig5-list .jqgrow:has(td[value="' + values["product_code"] + '"])').attr('id'), values);
}


/* 関数名:function createCheckProductCodeDialog()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :商品情報登録・編集時に商品コードに被りがあれば上書きするかどうかを確認するダイアログを作る。
 * 作成者:T.Masuda
*/	
function createCheckProductCodeDialog(){
	
	//商品情報登録・編集時に商品コードが被ったらレコードを上書きするかどうかを確認するダイアログ。
	$('#check_product_code').dialog({
		title: '商品情報追加・編集',		//ダイアログのタイトル
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
			$(".ui-dialog-titlebar-close").hide();
		},
		// 配置するボタンとイベント
		buttons: {
			// 上書きボタン
			"上書きする": function(){
				overwriteSameProductCodeRecord();
				// このダイアログを閉じる
				$('#check_product_code').dialog('close');
				// 編集ダイアログを閉じる
				$('#fig5-edit').dialog('close');
				// リストを変更状態にする
				//*  */isChange -= figs[fig];
			},
			"キャンセル": function(){			//Cancelボタンを押したら
				$('#check_product_code').dialog('close');		//ダイアログを閉じる
			}
		}
	});	
}

/* 関数名:function getEditDialogValues(selector)
 * 引数　:String selector:対象となるダイアログのセレクタ。
 * 戻り値:map:ダイアログのフォームのデータ。
 * 概要  :編集ダイアログのフォームをまとめたデータを作り返す。
 * 作成者:T.Masuda
*/	
function getEditDialogValues(selector){
	var retMap = {};	//返却する連想配列を格納する変数を用意する。
	
	// このダイアログ内のフォーム要素を走査
	$.each($(selector + ' input'), function(){
		// valuesに順次キーと値を格納していく
		retMap[$(this).attr('name')] = $(this).val;
	});
	
	return retMap;	//作成したデータを返す。
}


/* 関数名:function createProductEditDialog()
 * 引数　:なし
 * 戻り値:なし
 * 概要  :製品登録ページの商品情報登録・編集のダイアログを作る。。
 * 作成者:T.Masuda
*/	
function createProductEditDialog(){
	
	//商品管理ページの製品リストの製品情報の追加・編集を行うダイアログ。
	$('#fig5-edit').dialog({
		title: '商品情報追加・編集',		//ダイアログのタイトル
		width: '300px',					//幅
		height: 'auto',					//高さ
		autoOpen: false, 				// 自動でオープンしない
		modal: true,					//モーダルダイアログ
		resizable: false, 				// リサイズしない
		draggable: true, 				// ドラッグできる
		show: "fade",     				// 表示時のエフェクト
		hide: "fade",      				// 非表示時のエフェクト
		position: 'center',				//表示位置の指定。上に表示
		closeOnEscape: false,			//Escボタンを押しても閉じない
		//ダイアログのクローズボックスを非表示にする
		open:function(event, ui){ 
			$(".ui-dialog-titlebar-close").hide();
		},
		// 配置するボタンとイベント
		buttons: {
			// 登録ボタン
			"登録": function(){
				// valuesを配列で初期化
				values = getEditDialogValues('#fig5-edit');

				// 製品コードの要素を取得し変数に格納
				var product_codes = $('td[aria-describedby="fig5-list_product_code"]');

				// 取得した製品コードを比較する
				$.each(product_codes, function(){
					// 製品コードが編集中のものと同じなら
					if($(this).text() == $('#fig5-edit input[name="product_code"]').val()){
						// 上書きチェックダイアログを開く
						$('#check_product_code').dialog('open');
						// 処理終了
						return false;
					}
				});
				
				$('#fig5-list').addRowData(undefined, values);
				$(this).dialog('close');
				//isChange -= figs[fig];
			},
			"キャンセル": function(){			//Cancelボタンを押したら
				$(this).dialog('close');		//ダイアログを閉じる
			}
		}
	});	
}


/* 
 * 関数名:function addShowAddDialogEvent()
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:リストのレコードの新規追加のダイアログを出すイベントを設定する。
 * 作成者　　:T.Masuda
 */ 
function addShowAddDialogEvent(){
	//リストのレコード追加ボタンをクリックしたら
	$(document).on('click', '.add-button.add-record', function(){
		var id = $('.figs:visible:first').attr('id');	//表示中の画面のIDを取得する。
		if(id == 'fig7'){	//idがfig7であれば
			id = 'fig7-0';	//fig7-0に訂正する。
		}
		//IDがgridDataIndexのキーとして存在するものなら
		if(id in gridOptionIndex){
			// 新規追加用ダイアログを出す
			$('#' + id + '-list').editGridRow("new", gridoption[parseInt(gridOptionIndex[id])]);
		}
	});
}


/* 
 * 関数名:function addShowEditDialogEvent()
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:リストのレコードの編集のダイアログを出すイベントを設定する。
 * 作成者　　:T.Masuda
 */ 
function addShowEditDialogEvent(){
	
	$(document).on('click', '.edit-button.edit-record', function(){
		var id = $('.figs:visible:first').attr('id');	//表示中の画面のIDを取得する。
		//チェックの入った行を取得する。
		var $checkedrow = $('#' + id + '-list .jqgrow:has(input:radio:checked)');
		
		// 選択済みの行があれば
		if($checkedrow.length > 0){
			// 行番号を取得					
			var rowid = $checkedrow.attr("id");
			
			//IDがgridOptionIndexのキーとして存在するものなら
			if(id in gridDataIndex){
				// 編集用ダイアログを出す
				$('#' + id + '-list').editGridRow(rowid, gridoption[parseInt(gridOptionIndex[id])]);
			}
		}
	});
}




/* 
 * 関数名:function addDeleteRecordEvent()
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:リストのレコードを削除するボタンのイベントを設定する。
 * 作成者　　:T.Masuda
*/
function addDeleteRecordEvent(){
	//削除ボタンをクリックしたら
	$(document).on('click', '.delete-button', function(){
		var id = $('.figs:visible:first').attr('id');	//表示中の画面のIDを取得する。
		var $targetTable = $('#' + id + '-list');		//削除を行うテーブルを取得する。
		
		// チェックが入った行を走査
		$('#' + id + '-list .jqgrow:has(input:radio:checked)').each(function(){
			// チェックが入った行を削除
			$targetTable.delRowData($(this).attr('id'));
//		$targetTable.editGridRow($(this).attr('id'), {url:location.href});
		});
	});
}

/* 
 * イベント名:(document).on('click', '#personal .add-button.add-record', function(){});
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:fig4個人タブの編集画面を出すイベント。
 * 作成者　　:T.Masuda
*/ 
$(document).on('click', '#personal .add-button.add-record', function(){
	// 新規追加用ダイアログを出す
	$('#fig4-list').editGridRow("new", gridoption[3]);
});

/* 
 * イベント名:(document).on('click', '#personal .delete-button', function(){});
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:fig4個人タブの削除ボタンのイベント。
 * 作成者　　:T.Masuda
*/ 
$(document).on('click', '#personal .delete-button', function(){
	// チェックが入った行を走査
	$('#fig4-list .jqgrow:has(input:radio:checked)').each(function(){
		// チェックが入った行を削除
		$('#fig4-list').delRowData($(this).attr('id'));
	});
});

/* 
 * イベント名:$(document).on('click', '#company .delete-button', function(){});
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:fig4会社タブの削除ボタンのイベント。
 * 作成者　　:T.Masuda
*/ 
$(document).on('click', '#company .delete-button', function(){
	// チェックが入った行を走査
	$('#fig4-1-list .jqgrow:has(input:radio:checked)').each(function(){
		// チェックが入った行を削除
		$('#fig4-1-list').delRowData($(this).attr('id'));
	});
});

/* 
 * イベント名:$(document).on('click', '#fig4-3 .delete-button', function(){});
 * 引数  　　:なし
 * 戻り値　　:なし
 * 概要  　　:fig4-3の削除ボタンのイベント。
 * 作成者　　:T.Masuda
*/ 
$(document).on('click', '#fig4-3 .delete-button', function(){
	// チェックが入った行を走査
	$('#fig4-3-list .jqgrow:has(input:checkbox:checked)').each(function(){
		// チェックが入った行を削除
		$('#fig4-3-list').delRowData($(this).attr('id'));
	});
});


/* 関数名:function getCurrentDate()
 * 引数　:なし
 * 戻り値:String:現在の日付の文字列。
 * 概要  :現在の日付の文字列を作成して返す。
 * 作成者:T.Masuda
*/	
function getCurrentDate(){
	// 現在の日付のオブジェクトを取得
	var date = new Date() ;
	// 現在の日付を作成して返す。
	return date.getFullYear() + '/' + (date.getMonth() + 1 >= 10 ? date.getMonth() + 1 :'0' + (date.getMonth() + 1))
					+ '/' + (date.getDate() + 1 >= 10 ? date.getDate() + 1 :'0' + (date.getDate() + 1));
}


/* 関数名:setRecordDate(checkedRecords, date, target)
 * 引数　:jQuery checkedRecords:チェックが入っているレコード。
 * 　　　:String date:セットする日付の文字列。
 * 　　　:String target:処理対象の画面のセレクタ。
 * 戻り値:boolean:処理中断時にはfalseを返す。
 * 概要  :本日ボタンのイベントを登録する。
 * 作成者:T.Masuda
*/
function setRecordDate(checkedRecords, date, target){
	var checkedRecordsLength = checkedRecords.length; //走査するレコード数を取得する。
	
	// チェックボックスが入っているレコードを走査
	for(var i = 0; i < checkedRecordsLength; i++){
		// 該当するレコードに現在の日付を与える
		$(target + '-list').setCell(checkedRecords.eq(i).attr('id'), 'date', date);
	}
}


/* 関数名:function setTodayButton(target)
 * 引数　:String target:処理対象のセレクタ。
 * 戻り値:boolean:処理中断時にはfalseを返す。
 * 概要  :本日ボタンのイベントを登録する。
 * 作成日:14.12.2
 * 作成者:T.Masuda
*/	
function setTodayButton(target){
	// この画面のイベント本日ボタンのイベント登録を行う
	$(document).on('click', target + " .today_button", function(){
		// チェックボックスが入っているレコードを取得
		$checked = $(target + "-list .jqgrow:has('input:checkbox:checked')");
		//対象となるレコードがなければ　
		if($checked.length <= 0){
			// 処理を行わない
			return false;
		}
		
		var current = getCurrentDate();	//現在の日付を取得する。
		
		setRecordDate($checked, current, target);	//レコードに日付をセットする。
	});
}

/* 関数名:function createTemporatyElem(target, checkedRecord)
 * 引数　:String target:処理対象の画面のセレクタ。
 * 　　　:jQuery checkedRecord:チェックが入ったレコード。
 * 戻り値:なし。
 * 概要  :カレンダーと、選択したカレンダーの日付の値を一時保存する要素を作る。
 * 作成日:14.12.2
 * 作成者:T.Masuda
*/	
function createTemporatyElem(target, checkedRecord){
	// targetからIDの値を取得
	var hiddenid = target.substring(1, target.length);
	
	// datepickerで選択した日付を格納するために一時的にinput要素を生成する。
	$(target).append($('<input>')
			.attr({
				id: hiddenid + '-tmpdate',
				type: 'text'})
	);
	// 生成した要素のjQueryオブジェクトを生成
	var $hidden = $(target + '-tmpdate');
	// datepickerを生成し、要素にデータを格納する様に設定する。
	$hidden.datepicker();
	//datepickerに日本語の設定を行う。
	$hidden.datepicker($.datepicker.regional['ja']);		
	//プルダウンメニューで年を変更できるようにする
	$hidden.datepicker('option', 'changeYear', true);
	//プルダウンメニューで月を変更できるようにする	
	$hidden.datepicker('option', 'changeMonth', true);
	$hidden.datepicker("show");		//datepickerを表示する。
	$hidden.attr('type', 'hidden')	//生成した要素をhiddenにする。
	
	//hiddenの要素の値が変わったときのイベントを登録する。
	setTemporaryElemChangeEvent(target, checkedRecord, $hidden);
}

/* 関数名:function setTemporaryElemChangeEvent(target ,checkedRecord, temporaryElem)
 * 引数　:String target:処理対象のセレクタ。
 *　　　　:jQuery checkedRecord:チェックが入ったレコード。
 *　　　　:jQuery temporaryElem:イベントの登録対象となる、値を一時保存するための要素。
 * 戻り値:なし
 * 概要  :値を一時保存する要素の値が変わったときのイベントを登録する。
 * 作成日:14.12.2
 * 作成者:T.Masuda
*/	
function setTemporaryElemChangeEvent(target, checkedRecord, temporaryElem){
	
	// hiddenのchangeイベント登録
	$(document).on('change.tmpdate', temporaryElem, function(){
		//チェックが入った要素の数を取得する。
		var checkedRecordLength = checkedRecord.length;
		var $targetList = $(target + '-list');	//処理対象のリストを取得する。

		// チェックが入ったレコードを走査
		for(var i = 0; i < checkedRecordLength; i++){
			// 該当するレコードに日付を与える
			$targetList.setCell(checkedRecord.eq(i).attr('id'), 'date', temporaryElem.val());
		}

		// イベントとhidden要素を削除する。
		$(document).off('change.tmpdate');
		$(target + '-tmpdate').remove();
	});
}


/* 関数名:function setCalendarButton(target)
 * 引数　:String target:処理対象のセレクタ。
 * 戻り値:boolean:処理中断時にはfalseを返す。
 * 概要  :カレンダーボタンのイベントを登録する。
 * 作成日:14.12.2
 * 作成者:T.Masuda
*/	
function setCalendarButton(target){
	// この画面のカレンダーボタンのイベント登録を行う
	$(document).on('click', target + " .calendar_button", function(){
		// チェックボックスが入っているレコードを取得
		$checked = $(target + "-list .jqgrow:has('input:checkbox:checked')");
		//対象となるレコードがなければ　
		if($checked.length <= 0){
			// 処理を行わない
			return false;
		}
		
		//カレンダーの生成と、カレンダーで選択した値を保存する要素の生成を行い、レコードに日付をセットするようにする。
		createTemporatyElem(target, $checked);	
	});
}

/* 
 * 関数名:addAddConfirmButtonEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :レコードの追加内容を確定して現在の画面を終わらせるボタンのイベント登録。レコード追加の処理未実装。
 * 作成者:T.Masuda
*/ 
function addAddConfirmButtonEvent(){
	//登録ボタンを押したら
	$(document).on('click', '.add-confirm:first', function(){
		// レコード追加処理
		
		// 対象のリストの更新に成功したら現在の画面を閉じる
		disappearPage();
	});
}

/* 
 * 関数名:addEditConfirmButtonEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :レコードの変更内容を確定して現在の画面を終わらせるボタンの処理。レコード追加の処理未実装。
 * 作成者:T.Masuda
*/ 
function addEditConfirmButtonEvent(){
	//編集ボタンを押したら
	$(document).on('click',  '.edit-confirm:first', function(){
		// レコード編集処理
		
		// 対象のリストの更新に成功したら現在の画面を閉じる
		disappearPage();
	});
}


/* 
 * 関数名:addRegistRecordButtonEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :レコード登録ボタンのイベントを登録する。
 * 作成者:T.Masuda
*/ 
function addRegistRecordButtonEvent(){
	//レコード登録ボタンがクリックされたら
	$(document).on('click', '.regist_record', function(){
		// 登録完了の処理
		
		// 現在のページを閉じる
		disappearPage();
	});
}

/* 
 * 関数名:addNodeDevideButtonEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :ノード分割ボタンのイベントを登録する。
 * 作成者:T.Masuda
*/ 
function addNodeDevideButtonEvent(){
	$(document).on('click', '.devide_button', function(){
		// ダイアログを開く
		$('#devide_node').dialog("open");
	});
}

/* 
 * 関数名:function addComboBoxCloseEvent()
 * 引数  :なし
 * 戻り値:なし
 * 概要  :コンボボックス以外をクリックしてコンボボックスのプルダウンメニューを閉じるためのイベントを登録する。
 * 作成者:T.Masuda
 */ 
function addComboBoxCloseEvent(){
	//何かをクリックしたら
	$(document).on('click', function(event){
		var $tg = $(event.target);	//イベントのターゲットを取得する。
		// クリックしたものがコンボボックス関係でなければ
		if(!($tg.parent().hasClass('custom-combobox-toggle') 
				|| $tg.hasClass('custom-combobox-input') 
				|| $tg.hasClass('custom-combobox-toggle'))
				&& $('.ui-autocomplete:visible').length > 0){
			// 閉じる
			$('.ui-autocomplete:visible').toggle();
		}
	});
}

