// JavaScript Document

	windowHeight = 0;	//画面の高さを格納する変数。各要素の高さの基準となる
	buttonWidthRatio = 2;	//ボタンの縦横比。縦1に対しての横の比率
	maxHeight = 1024;	//最大の高さ
	maxWidth = 768;		//最大の幅
	aLineHeight = 3.61;	//テキストボックス等の1行分の高さの割合
	heightRatio = 12;	//divタグとテキストボックスの高さの縦横比の横の比率
	contentWidthParcent = 0.98;	//marginを抜いた画面幅の割合
	baseFontSize = 100;	//タグに設定されたフォントサイズのデフォルトの割合
	fontRatio = 12.0;	//画面縮小時に行うフォントサイズの縮小度合いを決める変数
	spRatio	= 1.5;		//スマホ横幅用比率
	tbRatio	= 2.0;		//タブレット横幅用比率
	spWidth = 480;		//スマホ用レイアウトになる幅
//	spWidth = 630;		//スマホ用レイアウトになる幅
	strechFix1 = 20;	//文字伸縮の修正値1
	strechFix2 = 2.0;	//文字伸縮の修正値2
	strechFix3 = 2.0;	//Fig.1のボタンの高さ用修正値
	
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
		 var divHeight = $('.figs').width() / (heightRatio * tbRatio);	
		 $('.parallel-text').css('height', divHeight);		//2段組テキストボックスのdivタグに高さを設定
		 $('.single-line-text').css('height', divHeight);	//1段組テキストボックスのdivタグに高さを設定
		 $('.before_list_line').css('height', divHeight);	//リスト前の段落のdivタグに高さを設定
 		 $('.line.edit_buttons').css('height', divHeight);	//1行で書かれるボタン群の高さを設定 
		 $('.line_table tr').css('height', divHeight);	//1行で書かれるボタン群の高さを設定
		 $('#header-buttons').css('height', divHeight);	//1行で書かれるボタン群の高さを設定
		 $('.fig1_buttons').css('height', divHeight * strechFix3);	//トップページのボタンの高さを設定
		 $('.fig1_buttons.first').css('height', divHeight * strechFix2 * strechFix3);	//トップページの1行目ボタンの高さを設定
  		 $('.users_table th').css('height', divHeight - 1);	
//		 $('.variable-height').css('height', divHeight);	//高さを設定
	}
	/*
	 * 関数名:setContentHeight
	 * 引数  :なし
	 * 戻り値:なし
	 * 概要  :画面の高さを取得してコンテンツの高さにする
	 * 作成日:2014.07.16
	 * 作成者:T.M
	*/
	function setButtonSize(){
		//ボタンのサイズを変更
		$('.main button.ui-button').each(function(){
			//ボタンの幅を縦に対する比率に合わせる
			$(this).css('width', ($('button.ui-button').height() * buttonWidthRatio) + 'px');
		})
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

		if($('.figs .parallel-text').css('clear') == 'both'){	//段組レイアウトが解除されていれば
			//新たなフォントサイズを算出
			var newFontSizeSP = (baseFontSize - ((maxWidth - $('.main').width()) / (fontRatio * strechFix2)));
			//テキストボックスのサイズに合わせてフォントのサイズを調整する
			$('.parallel-text').css('font-size',  newFontSizeSP + '%');		//2段組テキストボックス
			$('.single-line-text').css('font-size',  newFontSizeSP + '%');	//1段組テキストボックス
		} else {
			//テキストボックスのサイズに合わせてフォントのサイズを調整する
			$('.parallel-text').css('font-size',  newFontSize + '%');		//2段組テキストボックス
			$('.single-line-text').css('font-size',  newFontSize + '%');	//1段組テキストボックス
		}

		//ボタンのサイズを変更
		$('.parallel-text').each(function(){
		})
		$('#header-title').css('font-size',  newFontSize + '%');			//タイトル
		$('.voucher-status-text').css('font-size',  newFontSize + '%');		//ステータスの文字
		//ステータスのテキストボックスの文字
		$('.ui-dropdownchecklist-text').css('font-size',  newFontSize + '%');		
		$('.before_list_line label').css('font-size',  newFontSize + '%');		//リスト前行のラベル
		$('#fig3-1 .edit_buttons button.button.ui-button').css('font-size',  newFontSize - strechFix1 + '%');		
		$('#fig3-1 .edit_buttons button.button.ui-button').css('font-size',  newFontSize - strechFix1 + '%');		
		$('.users_table th').css('font-size',  newFontSize - strechFix1 + '%');		
	}
	
	//画面伸縮時に画面の高さを修正する
	$(window).resize(function(){
		setContentHeight();	//setContentHeightを呼び出し高さを修正
		changeFontSize();	//フォントサイズを調整する
	});
	
	changeFontSize();
	setContentHeight();	//初回読み込み時に高さを合わせる実行
	setButtonSize();	//ボタンのサイズを調整する
	
	
	//リストのダミーデータ
	var listData = new Array();
	//連想配列として、各ページのリストのデータを格納する
	//fig2のデータ。受注伝票画面
	listData['fig2'] = [
		{check:'<input type="checkbox" class="list_select" value="checked">', No:'001',product_number:'WL-1200', product_category:'二管',product:'断熱二重直管1200mm',lot_number:'001',price:43700, quantity:2, ammount:87400, customer:'株式会社A'},
		{check:'<input type="checkbox" class="list_select" value="checked">', No:'002',product_number:'WP-TP02', product_category:'二管',product:'チムニートップ',lot_number:'003',price:29000, quantity:1, ammount:29000, customer:'株式会社A'},
		{check:'<input type="checkbox" class="list_select" value="checked">', No:'003',product_number:'WS-DBP0', product_category:'二支',product:'結露防止板',lot_number:'010', price:9000, quantity:1, ammount:9000, customer:'株式会社A'}
	];
	//fig2-1のデータ。受注伝票の追加編集画面
	listData['fig2-1'] = [
		{No:'001', serial_No:'0001-0001', product_category:'二管', customer:'株式会社A'},
		{No:'002', serial_No:'0001-0002', product_category:'二管', customer:'株式会社A'},
		{No:'003', serial_No:'0001-0003', product_category:'二管', customer:'株式会社B'}
	];
	//fig3のデータ。発注伝票画面
	listData['fig3'] = [
		{check:'<input type="checkbox" class="list_select">',No:'001',product_number:'SL-1000-B',product:'シングル直管1000mm φ150 黒' ,price:10000, quantity:2, ammount:20000, customer:'株式会社E'},
		{check:'<input type="checkbox" class="list_select">',No:'002',product_number:'SL-E030-B',product:'シングルエルボー管30°黒' ,price:8000, quantity:2, ammount:16000, customer:'合同会社E'},
		{check:'<input type="checkbox" class="list_select">',No:'003',product_number:'WS-CL01',product:'ストームカラー　ネック付', price:12800, quantity:4, ammount:51200, customer:'合同会社E'}
	];
	
	//fig3-1のデータ。発注伝票の追加編集画面
	listData['fig3-1'] = [
		{No:'001', serial_No:'0001-0001', product_category:'二管', status:'ノーマル', check:'<input type="checkbox" class="list_select">'},
		{No:'002', serial_No:'0001-0002', product_category:'二管', status:'未納', check:'<input type="checkbox" class="list_select">'},
		{No:'003', serial_No:'0001-0003', product_category:'二管', status:'キズ', check:'<input type="checkbox" class="list_select">'}
	];
	
	//fig4のデータ
	listData['fig4'] = 	[
		{No:'001', customer_type:'代', customer:'合同会社H', charger:'佐藤祐作', tel:'03-1234-5678<br>03-1234-5679', update:'14/02/10', check:'<input type="checkbox">'},
        {No:'002', customer_type:'代', customer:'合同会社I', charger:'山田太郎', tel:'0277-33-1234<br>0277-33-1235', update:'14/02/10', check:'<input type="checkbox">'},
		{No:'003', customer_type:'加', customer:'合同会社I', charger:'木村隆', tel:'028-302-3214<br>028-302-3215', update:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig4-1のデータ
	listData['fig4-1'] = 	[
		{No:'001', date:'14/01/30', product:'煙突ヒートシールド', price:20000, quantity:3, ammount:60000, order_type:'受注'},
        {No:'002', date:'14/01/30', product:'炉台キット2枚組　CB30', price:155000, quantity:1, ammount:155000, order_type:'受注'},
		{No:'003', date:'14/03/04', product:'スチールステージプレート　角', price:35000, quantity:2, ammount:70000, order_type:'受注'},
		{No:'004', date:'14/03/04', product:'バーベキュースタンド', price:13000, quantity:1, ammount:13000, order_type:'受注'}
	];

	//fig5のデータ
	listData['fig5'] = 	[
		{No:'001', product_category:'二管', product:'断熱二重直管1200mm', maker:'株式会社A', charger:'佐藤祐作', tel:'03-1234-5678<br>03-1234-5679', update:'14/02/10', check:'<input type="checkbox">'},
        {No:'002', product_category:'二管', product:'断熱二重直管500mm', maker:'株式会社A', charger:'佐藤祐作', tel:'0277-33-1234<br>0277-33-1235', update:'14/02/10', check:'<input type="checkbox">'},
		{No:'003', product_category:'二管', product:'断熱二重直管120mm', maker:'株式会社B', charger:'木村隆', tel:'028-302-3214<br>028-302-3215', update:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig5-1のデータ
	listData['fig5-1'] = [
		{distribute:'製', customer:'合同会社F', order_value:'10000'},
		{distribute:'製', customer:'合同会社F', order_value:'13800'},
		{distribute:'倉', customer:'合同会社G', order_value:'9000'}
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
	listData['fig7'] = [
		{No:'001', product:'フラッシング3寸', product_category:'フラ', customer:'合同会社H', stock:10, delivery_date:'14/02/10', check:'<input type="checkbox">'},
		{No:'002', product:'チムニーフラッシング　□650', product_category:'フラ', customer:'合同会社H', stock:3, delivery_date:'14/02/10', check:'<input type="checkbox">'},
		{No:'003', product:'炉台キット2枚組　CB30', product_category:'炉台',customer:'合同会社H' , stock:5, delivery_date:'14/04/21', check:'<input type="checkbox">'}
	];
	//fig7-1のデータ
	listData['fig7-1'] = [
		{No:'001', product_number:'WR-FL03', product:'フラッシング3寸', order_date:'14/02/10', quantity:10, voucher_No:'00325'},
		{No:'002', product_number:'WS-CF65', product:'チムニーフラッシング　□650', order_date:'14/02/10',  quantity:3, voucher_No:'00325'},
		{No:'003', product_number:'WN-BS30', product:'炉台キット2枚組　CB30', order_date:'14/04/21'  , quantity:5,  voucher_No:'00326'}
	];
	//fig8-3のデータ
	listData['fig8-3'] = [
		{No:'001', customer:'株式会社A', month_1:'120', month_2:'140', month_3:'100', month_4:'200', month_5:'150', month_6:'100', month_7:'80', month_8:'145', month_9:'123', month_10:'84', month_11:'91', month_12:'99', sum:'1432' },
		{No:'002', customer:'株式会社B', month_1:'80', month_2:'120', month_3:'120', month_4:'140', month_5:'120',
		 month_6:'100', month_7:'140', month_8:'50', month_9:'123', month_10:'84', month_11:'84', month_12:'100', sum:'1261' },
		{No:'003', customer:'合同会社D', month_1:'70', month_2:'100', month_3:'100', month_4:'200', month_5:'99',
		 month_6:'100', month_7:'80', month_8:'145', month_9:'145', month_10:'84', month_11:'91', month_12:'99', sum:'1313' }
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
		pulldown['person'] = {value:'0:<span class="direct-input">直接入力</span>;1:木村隆; 2:佐藤祐作; 3:山田太郎'};
		//製品のプルダウンメニュー 
		pulldown['product'] = {value:'0:<span class="direct-input">直接入力</span>;1:フラッシング3寸;2:チムニーフラッシング　□650;3:炉台キット2枚組　CB30;4:煙突ヒートシールド;5:スチールステージプレート　角;6:バーベキュースタンド;7:ストームカラー　ネック付;8:チムニートップ;9:結露防止板;10:シングル直管1000mm φ150 黒;11:シングルエルボー管30°黒;12:断熱二重直管120mm;13:断熱二重直管500mm;14:断熱二重直管1200mm'};
		//製品種別のプルダウンメニュー
		pulldown['product_category'] = {value:'0:<span class="direct-input">直接入力</span>;1:二管; 2:一管; 3:炉台; 4:二支;5:フラ'};
		//顧客のプルダウンメニュー 
		pulldown['customer'] = {value:'0:<span class="direct-input">直接入力</span>;1:株式会社A;2:株式会社B;3:株式会社C;4:合同会社D;5:合同会社E;6:合同会社F;7:合同会社G;8:合同会社H;9:合同会社I'}; 
		//顧客種別のプルダウンメニュー
		pulldown['customer_type'] = {value:'0:<span class="direct-input">直接入力</span>;1:代;2:製;3:加;4:倉;5:顧'};	
		
	//各fig毎の列設定
	var colModelData = new Array();
	//fig.2
	colModelData['fig2'] = [
			{ name: "check",index: "check", width: 15, height: '150%', align: 'center',  className: "checkbox"},
			{ name: "No",index: "No", width: 28, height: '150%', align:"left", className: "no", editable: true},
			{ name: "product_number", index: "product_number", width: 58, height: '150%', align:"left",
				className: "p_number", editable: true},
			{ name: "product_category", index:"product_category", width: 35, height: '150%',
				align:"left", className: "p_category  categories", editable: true, edittype:"select", editoptions: pulldown['product_category']},
			{ name: "product", index:"product", width: 110, height: '150%', align:"left",
				className: " product", editable: true, edittype:"select", editoptions: pulldown['product']},
			{ name: "lot_number", index:"lot_number", width: 45, height: '150%', align:"left",
				className: "lot_number", editable: true},
			{ name: "price", index:"price", width: 50, height: '150%', align:"left", className: "price", editable: true},
			{ name: "quantity", index:"quantity", width: 25, height: '150%', align:"left", className: 'quantity', editable: true},
			{ name: "ammount", index:"ammount", width: 50, height: '150%', align:"left", className: 'amount', editable: true},
			{ name: "customer", index:"customer", width: 110, height: '150%', align:"left",
				className: 'reciever  customer', editable: true, edittype:"select", editoptions: pulldown['customer']}
		];
	//fig.2-1
	colModelData['fig2-1'] = [{ name: "No", index: "No", width: 28, align:"left", className: "no", editable: true},
			{ name: "serial_No", index: "serial_No", width: 200,align:"left", className: "serial_number", editable: true},
	        { name: "product_category", index: "product_category", width: 70, align:"left", className: ' categories', editable: true, edittype:"select", editoptions: pulldown['product_category']},
			{ name: "customer", index: "customer", width: 258, align:"left", className: 'reciever  customer', editable: true, edittype:"select", editoptions: pulldown['customer']}
		];
	//fig.3		
	colModelData['fig3'] = [{ name: "check", index:"check", width: 15, dataType: "string", align:"left", className: "checkbox"},
			{ name: "No", index:"No", width: 28, dataType: "string", align:"left", className: "no", editable: true},
			{ name: "product_number", index:"product_number", width: 62, dataType: "string" , align:"left", className: "p_number", editable: true},
			{ name: "product", index:"product", width: 145, dataType: "string", align:"left", className: " product", editable: true, edittype:"select", editoptions: pulldown['product']},
			{ name: "price", index:"price", width: 50, dataType: "integer", align:"left", className: "price", editable: true},
			{ name: "quantity", index:"quantity", width: 40, dataType: "integer", align:"left", className: "quantity", editable: true},
			{ name: "ammount", index:"ammount", width: 50, dataType: "integer", align:"left", className: "ammount", editable: true},
			{ name: "customer", index:"customer", width: 146, dataType: "string", align:"left", className: "ordered  customer", editable: true, edittype:"select", editoptions: pulldown['customer']}
		];
	//fig.3-1		
	colModelData['fig3-1'] = [{ name: "No", index:"No", width: 28, dataType: "string", align:"left", className: "no", editable: true},
			{ name: "serial_No", index:"serial_No", width: 274, dataType: "string", align:"left", editable: true},
			{ name: "product_category", index:"product_category", width: 50, dataType: "string" ,align:"left", className: "p_category  categories", editable: true, edittype:"select", editoptions: pulldown['product_category']},
			{ name: "status", index:"status", width: 174, dataType: "string" ,align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.4		
	colModelData['fig4'] = [{ name: "No", index:"No", width: 28, dataType: "string" , align:"left", editable: true},
	        { name: "customer_type", index:"customer_type", width: 25, dataType: "string", align:"left" , className:' custom-type', editable: true, edittype:"select", editoptions: pulldown['customer_type']},
    	    { name: "customer", index:"customer", width: 225, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "charger", index:"charger", width: 84, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 79, dataType: "string", align:"left", editable: true},
	       	{ name: "update", index:"update", width: 75, dataType: "date", align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.4-1		
	colModelData['fig4-1'] = [{ name: "No", index:"No", width: 28, dataType: "string" , align:"left", editable: true},
	       	{ name: "date", index:"date", width: 75, dataType: "date", align:"left", editable: true},
    	    { name: "product", index:"product", width: 228, dataType: "string", align:"left", className:' product' , editable: true, edittype:"select", editoptions: pulldown['product']},
        	{ name: "price", index:"price", width: 60, dataType: "integer", align:"left" , editable: true},
       		{ name: "quantity", index:"quantity", width: 40, dataType: "integer", align:"left" , editable: true},
       		{ name: "ammount", index:"ammount", width: 60, dataType: "integer", align:"left", editable: true},
	        { name: "order_type", index:"order_type", width: 50, dataType: "string", align:"left", className:' custom-type', editable: true}
		];
	//fig.5
	colModelData['fig5'] =[{ name: "No", index:"No", width: 28, dataType: "string" , align:"left", editable: true},
	        { name: "product_category", index:"product_category", width: 25, dataType: "string", align:"left", className:' categories' , editable: true, edittype:"select", editoptions: pulldown['product_category']},
    	    { name: "product", index:"product", width: 144, dataType: "string", align:"left" , className:' product', editable: true, edittype:"select", editoptions: pulldown['product']},
			{ name: "maker", index:"maker", width: 90, dataType: "string", align:"left", className: "ordered  customer", editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "charger", index:"charger", width: 70, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 79, dataType: "string", align:"left", editable: false},
	       	{ name: "update", index:"update", width: 75, dataType: "date", align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.5-1		
	colModelData['fig5-1'] =[{ name: "distribute", index: "distribute", width: 200, dataType: "string", align:"left", editable: true},
			{ name: "customer", index: "customer", width: 200, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "order_value", index: "order_value", width: 183, dataType: "string" ,align:"left", editable: true}
		];
		

	//fig.6		
	colModelData['fig6'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "customer", index:"customer", width: 134, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "customer_type", index:"customer_type", width: 25, dataType: "string", align:"left", className:' custom-type', editable: true, edittype:"select", editoptions: pulldown['customer_type']},
			{ name: "charger", index:"charger", width: 70, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 78, dataType: "string", align:"left", editable: true},
			{ name: "address", index:"address", width: 181, dataType: "string" ,align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.6-1		
	colModelData['fig6-1'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "customer", index:"customer", width: 126, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "customer_type", index:"customer_type", width: 25, dataType: "string", align:"left", className:' custom-type', editable: true, edittype:"select", editoptions: pulldown['customer_type']},
			{ name: "charger", index:"charger", width: 60, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 78, dataType: "string", align:"left", editable: true},
			{ name: "address", index:"address", width: 173, dataType: "string" ,align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.6-2
	colModelData['fig6-2'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "customer", index:"customer", width: 126, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "customer_type", index:"customer_type", width: 25, dataType: "string", align:"left", className:' custom-type', editable: true, edittype:"select", editoptions: pulldown['customer_type']},
			{ name: "charger", index:"charger", width: 60, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 78, dataType: "string", align:"left", editable: true},
			{ name: "address", index:"address", width: 173, dataType: "string" ,align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.6-3		
	colModelData['fig6-3'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "customer", index:"customer", width: 126, dataType: "string", align:"left", className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "customer_type", index:"customer_type", width: 25, dataType: "string", align:"left", className:' custom-type', editable: true, edittype:"select", editoptions: pulldown['customer_type']},
			{ name: "charger", index:"charger", width: 50, dataType: "string", align:"left", className:' person', editable: true, edittype:"select", editoptions: pulldown['person']},
			{ name: "tel", index:"tel", width: 78, dataType: "string", align:"left", editable: true},
			{ name: "address", index:"address", width: 173, dataType: "string" ,align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string" ,align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.7		
	colModelData['fig7'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "product", index:"product", width: 131, dataType: "string", align:"left", className:' product', editable: true, edittype:"select", editoptions: pulldown['product']},
			{ name: "product_category", index:"product_category", width: 113, dataType: "string", align:"left", className:' categories', editable: true, edittype:"select", editoptions: pulldown['product_category']},
			{ name: "customer", index:"customer", width: 119, dataType: "string", align:"left" , className:' customer', editable: true, edittype:"select", editoptions: pulldown['customer']},
			{ name: "stock", index:"stock", width: 50, dataType: "string", align:"left", editable: true},
			{ name: "delivery_date", index:"delivery_date", width: 75, dataType: "string", align:"left", editable: true},
			{ name: "check", index:"check", width: 25, dataType: "string", align:"center", edittype:"checkbox", fomatter:"checkbox", editable: true, formatoptions: {disabled : false}}
		];
	//fig.7-1		
	colModelData['fig7-1'] =[{ name: "No", index:"No", width: 28, dataType: "string", align:"left", editable: true},
			{ name: "product_number.", index:"product_number", width: 117, dataType: "string" , align:"left", className: "p_number", editable: true},
			{ name: "product", index:"product", width: 206, dataType: "string", align:"left", className:' product', editable: true, edittype:"select", editoptions: pulldown['product']},
	       	{ name: "order_date", index:"order_date", width: 75, dataType: "date", align:"left", editable: true},
			{ name: "quantity", index:"quantity", width: 40, dataType: "integer", align:"left", className: "quantity", editable: true},
			{ name: "voucher_No", index:"voucher_No", width: 80, dataType: "string", align:"left", className: "purchase_order_number", editable: true},			
		];

	var fig8MonthWidth = 30;	//fig8の月カラムの幅
	//fig.8-3			
	colModelData['fig8-3'] =[{ name: "No", index:"No", width: 27, dataType: "string", align:"left", editable: true},
			{ name: "customer", index:"customer", width: 58, dataType: "string", align:"left"},
			{ name: "month_1", index:"month_1", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_2", index:"month_2", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_3", index:"month_3", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_4", index:"month_4", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_5", index:"month_5", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_6", index:"month_6", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_7", index:"month_7", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_8", index:"month_8", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_9", index:"month_9", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_10", index:"month_10", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_11", index:"month_11", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_12", index:"month_12", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "sum", index:"sum", width: fig8MonthWidth, dataType: "string", align:"left"}
		];
	//fig.8-4
	colModelData['fig8-4'] =[{ name: "No", index:"No", width: 27, dataType: "string", align:"left"},
			{ name: "product", index:"product", width: 58, dataType: "string", align:"left"},
			{ name: "month_1", index:"month_1", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_2", index:"month_2", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_3", index:"month_3", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_4", index:"month_4", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_5", index:"month_5", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_6", index:"month_6", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_7", index:"month_7", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_8", index:"month_8", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_9", index:"month_9", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_10", index:"month_10", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_11", index:"month_11", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "month_12", index:"month_12", width: fig8MonthWidth, dataType: "string", align:"left"},
			{ name: "sum", index:"sum", width: fig8MonthWidth, dataType: "string", align:"left"}
		];
		

	//列の名前を格納する連想配列
	var colNamesList = new Array();
	//fig.2
	colNamesList['fig2'] 	= ['', 'No', '製品No', '種別', '製品名', 'ロットNo', '単価', '個数', '金額', '納品先'];
	//fig.2-1
	colNamesList['fig2-1'] 	= ['No', 'Serial No', '種別', '納品先 <input type="button" class="apply_all" value="全適用">'];
	//fig.3
	colNamesList['fig3']	= ['', 'No', '製品No', '製品名', '単価', '個数', '金額', '発注先'];
	//fig.3-1
	colNamesList['fig3-1']	= ['No', 'Serial No', '種別', 'ステータス', ''];
	//fig.4
	colNamesList['fig4']	= ['No', '種別', '取引氏名', '担当', 'Tel/Fax', '更新日', ''];
	//fig.4-1
	colNamesList['fig4-1']	= ['No', '日付', '製品名', '単価', '個数', '合計', '種別'];
	//fig.5
	colNamesList['fig5']	= ['No', '種別', '製品', 'メーカー', '担当', 'Tel/Fax', '更新日', ''];
	//fig.5-1
	colNamesList['fig5-1']	= [''];
	//fig.6
	colNamesList['fig6']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
	//fig.6-1
	colNamesList['fig6-1']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
	//fig.6-2
	colNamesList['fig6-2']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
	//fig.6-3
	colNamesList['fig6-3']	= ['No', '取引氏名', '種別', '担当', 'Tel/Fax', '住所', ''];
	//fig.7
	colNamesList['fig7']	= ['No', '製品名', '分類', '仕入先', '在庫数', '仕入れ日', ''];
	//fig.7-1
	colNamesList['fig7-1']	= ['No', '製品No', '製品名', '発注日', '個数', '発注伝票No'];
	//fig.8-3
	colNamesList['fig8-3']	= ['No', '企業名', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '合計'];
	//fig.8-4
	colNamesList['fig8-4']	= ['No', '製品名', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '合計'];


	//核Figのフラグリスト
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
			'fig7'		: 1024,
			'fig7-1'	: 2048,
			'fig8'		: 4096,
			'fig6-2'	: 8192,
			'fig6-3'	: 16384,
	};
	isChange = 0;	//リストの変更を感知する変数
	/*
	 * 関数名:isListChanged(isChange, bitNumber)
	 * 概要  :リストが変更された状態であるかをbooleanの値で返す
	 * 引数  :var isChange, var bitNumber
	 * 戻り値:var bool
	 * 作成日:2014/07.10 
	 * 作成者:T.M
	 */
	 function isListChanged(isChange, figName){
		 var bool = 0;					//フラグとなる数値をboolに格納
		 if((isChange & figs[figName])) {	//フラグが立っていたら
			bool = 1;						//boolに1を代入
		 }
		 return bool;					//結果を返す
	 }


	var editingRow = '';	//編集中のセルの行
	var editingCol = '';	//編集中のセルの列
	var editingValue = '';	//編集中のセルの値
	var editingTable = '';	//編集中のテーブル
	var editingRowId = '';	//編集中のセルの行のID


	//リストのルール設定を配列に格納
	var objRule = new Array();
	//fig2のルールを設定
	objRule['fig2'] ={ 
							data: listData['fig2'],
							datatype: "local",
							width: 576,
							gridResize: {minWidth:310, maxWidth:576},
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig2'],
							colModel: colModelData['fig2'],
							caption: '受注リスト'	,
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig2'))){	//今まで未編集であったら
									isChange += figs['fig2'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
								editingRowId = rowid;	//編集中のセルの行IDを保存
							}
					};

	//fig2-1のルールを設定					
	objRule['fig2-1'] ={
							data: listData['fig2-1'],
							datatype: "local",
							width: 576,
							height: 280,
							colNames: colNamesList['fig2-1'],
							colModel: colModelData['fig2-1'], 
							resizable:false, 
							caption: '納品先一覧 <span class="inner-list-title"><label>合計</label><input type="text" class="textbox_M"></span>',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig2-1'))){	//今まで未編集であったら
									isChange += figs['fig2-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						};

	//fig3のルールを設定	
	objRule['fig3'] = { 
							data: listData['fig3'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig3'],
							colModel: colModelData['fig3'],
							caption: '発注リスト',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig3'))){	//今まで未編集であったら
									isChange += figs['fig3'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						};

	//fig3-1のルールを設定	
	objRule['fig3-1'] = {
							data: listData['fig3-1'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig3-1'],
							colModel: colModelData['fig3-1'],
							caption: 'Serial No.一覧',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig3-1'))){	//今まで未編集であったら
									isChange += figs['fig3-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };

	//fig4のルールを設定
	objRule['fig4'] = { 
							data: listData['fig4'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig4'],
							colModel: colModelData['fig4'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig4'))){	//今まで未編集であったら
									isChange += figs['fig4'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };		

	//fig4-1のルールを設定						  
	objRule['fig4-1'] = {
							data: listData['fig4-1'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig4-1'],
							colModel: colModelData['fig4-1'],
							caption: '取引一覧',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig4-1'))){	//今まで未編集であったら
									isChange += figs['fig4-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };

	//fig5のルールを設定						
	objRule['fig5'] = { 
							data: listData['fig5'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig5'],
							colModel: colModelData['fig5'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig5'))){	//今まで未編集であったら
									isChange += figs['fig5'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };

	//fig5-1のルールを設定						  
	objRule['fig5-1'] = { 
							data: listData['fig5-1'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig5-1'],
							colModel: colModelData['fig5-1'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig5-1'))){	//今まで未編集であったら
									isChange += figs['fig5-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };

	//fig6のルールを設定		
	objRule['fig6'] = { 
							data: listData['fig6'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig6'],
							colModel: colModelData['fig6'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig6'))){	//今まで未編集であったら
									isChange += figs['fig6'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };
	//fig6のルールを設定		
	objRule['fig6-1'] = { 
							data: listData['fig6-1'],
							datatype: "local",
							width: 550,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig6-1'],
							colModel: colModelData['fig6-1'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig6-1'))){	//今まで未編集であったら
									isChange += figs['fig6-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };
	//fig6のルールを設定		
	objRule['fig6-2'] = { 
							data: listData['fig6-2'],
							datatype: "local",
							width: 550,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig6-2'],
							colModel: colModelData['fig6-2'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig6-2'))){	//今まで未編集であったら
									isChange += figs['fig6-2'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };
	//fig6のルールを設定		
	objRule['fig6-3'] = { 
							data: listData['fig6-3'],
							datatype: "local",
							width: 550,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig6-3'],
							colModel: colModelData['fig6-3'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig6-3'))){	//今まで未編集であったら
									isChange += figs['fig6-3'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };

	//fig7のルールを設定		
	objRule['fig7'] = { 
							data: listData['fig7'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig7'],
							colModel: colModelData['fig7'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig7'))){	//今まで未編集であったら
									isChange += figs['fig7'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
					   };

	//fig7-1のルールを設定		
	objRule['fig7-1'] = { 
							data: listData['fig7-1'],
							datatype: "local",
							width: 576,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig7-1'],
							colModel: colModelData['fig7-1'],
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig7-1'))){	//今まで未編集であったら
									isChange += figs['fig7-1'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };
						
	//fig8-3のルールを設定							 
	objRule['fig8-3'] = { 
							data: listData['fig8-3'],
							datatype: "local",
							width: 550,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig8-3'],
							colModel: colModelData['fig8-3'],
							caption: '企業別売上一覧(単位:千円)',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig8'))){	//今まで未編集であったら
									isChange += figs['fig8'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };

	//fig8-4のルールを設定						  
	objRule['fig8-4'] = { 
							data: listData['fig8-4'],
							datatype: "local",
							width: 550,
							height: 280,
							dataType: 'local',
							colNames: colNamesList['fig8-4'],
							colModel: colModelData['fig8-4'],
							caption: '製品別売上一覧(単位:千円)',
							cellEdit: true,    // true: クリックしたセルの編集
							cellsubmit: 'clientArray',
							forceFit: true,		/* 固定幅にする */	
							shrinkToFit: false,	/* 自動で幅を調整させない */
							afterEditCell : function(rowid, cellname, value, iRow, iCol){	//セルの編集を行った後のイベント
								if(!(isListChanged(isChange, 'fig8'))){	//今まで未編集であったら
									isChange += figs['fig8'];				//編集後フラグを立てる
								}
								editingRow = iRow;		//編集中のセルの行番号を保存
								editingCol = iCol;		//編集中のセルの列番号を保存
								editingValue = value;	//編集中のセルの値を保存
							}
						 };

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
				$('.pulldown-menu-list').css('display', 'none');
				$('.page:first', document).remove();
				$('.page:first', document).css('display', 'block');
			});
	}

//JQueryを使ったJavaSciptの記述を開始
$(function() {

	/*
	 * 関数　: getFileName(file_url)
	 * 引数　: String file_url
	 * 戻り値: String file_url
	 * 概要  : 現在のページ名を取得する
	 * 作成日:14.06.16
	 * 作成者:T.M
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
	 * 関数　: setCalendar = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : 日付をカレンダーで選択できるようにする
	 * 作成日:14.06.14
	 * 作成者:T.M
	*/
	var setCalendar = function(){
	$.each($('.date'), function(){		//dateクラスを持つ全ての要素を処理
		var id = $(this).attr('id');		//テキストボックスのIDを取得してidに格納
		//テキストボックスをdatepickerの処理対象にする。また、日本語設定をする
   		$("#" + id).datepicker($.datepicker.regional['ja']);		
		//ボタン、テキストボックスのどちらを押してもカレンダーが出るようにする
    	$("#" + id).datepicker('option', 'showOn', 'both');	
		//ボタンのテキストをなくす
    	$("#" + id).datepicker('option', 'buttonText', '');	
		//プルダウンメニューで年を変更できるようにする
    	$("#" + id).datepicker('option', 'changeYear', true);
		//プルダウンメニューで月を変更できるようにする	
    	$("#" + id).datepicker('option', 'changeMonth', true);
		//プルダウンメニューで月を変更できるようにする	
    	$("#" + id).datepicker('option', 'dateFormat', 'y/mm/dd');
//    	$("#" + id).datepicker('option', 'showOn', 'both');	
//		$("#" + id).datepicker('option', 'buttonImage', 'images/calendar.gif');		//カレンダーアイコンのボタンを設置
//		$("#" + id).datepicker('option', 'buttonImageOnly', true);	
		});
	};
	
	//グラフを表示する領域に対するスタイルシートの設定を行う
	$('#graph').css({
		//JQueryプラグインによるグラフの表示で幅のずれを起こすため、幅をごくわずか狭める
		width: '99.9%',				
		height: '400px',			//グラフとの高さを合わせる
		border: 'solid 1px #000',	//極細の黒の実線で囲む
		borderTopStyle: 'none'		//上の罫線を描画しない
	});

	//fig8におけるページの切り替えの処理の記述
	var tabs = $('#graph-region', document);			//idがcontainerのdivタグのオブジェクトを変数tabsに格納
	//ページ読み込み時にタブの1つめの要素にクラスselectedを設定。
	$('#graph-region ul li:first a', document).addClass('selected');	
	$(' div', tabs).load(				//ページ読み込み時にcontainerの子要素のdivタグ内にタブの1つめの要素のファイルを読み込む
		$(' ul li:first a', tabs).attr('href'));
	$(document).on('click', '#graph-region ul li a', function(e) {		//タブをクリックしたときのイベントを登録
		if (!$(this).hasClass('selected')) {			//選択済みのタブでなければ
			$('#graph-region ul li a.selected', document).removeClass('selected');	//選択済みのタブのタグからselectedクラスを消す
			$(this).addClass('selected');			//選択したタブにselectedクラスを追加
			$('div#graph', document).load($(this).attr('href'));		//タブパネルに選択したタブのリンク先を表示
		}
		e.preventDefault();	//リンクをクリックした際の画面遷移をキャンセルする
	});
	$(' ul', tabs).mouseenter(function(e){					//リスト内からマウスが外れたら
		for(var i = 1; i < $('ul li' ,this).length; i++) {	//リストの要素全部を対象に
			$(this + 'li \\:nth-child(' + i + ')').css({		//リスト1つごとにcssを設定
				marginTop : $(this).css('height'),				//高さをリスト外枠に合わせる
				display : block									//ブロックとして扱う
			})
		}
	});

	//プルダウンメニューを利用する項目の名前を配列に格納
	var pulldowncontents = ['person', 'customer', 'product', 'categories', 'custom-type'];
	//プルダウンメニューの項目のカテゴリーを格納する2次連想配列
	var pulldowncategories = {};
	
	//製品データの種別絞り込み用データを連想配列に格納
/*	pulldowncategories['product'] = { product:'断熱二重管部材': product:'断熱二重管部材' , product:'シングル管部材': product:'シングル管部材',
						 product:'断熱二重管用支持部材':product:'断熱二重管用支持部材', product:'シングル管用支持部材': product:'シングル管用支持部材',
						  'フラッシング・角トップ等': 'フラッシング・角トップ等'};
*/	
	var pulldownselector;	//プルダウンメニュー本体のリストのセレクターを格納する
	var xmlselector;		//xmlのセレクターを保存する変数
	
	/*
	 * 関数　: wrapPulldown = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : プルダウンメニューを作成する
	 * 作成日:14.06.24
	 * 作成者:T.M
	*/
	var wrapPulldown = function(){
			//pulldowncontentsに登録したクラスのプルダウンメニューの作成を開始
			$.each(pulldowncontents, function(i){
				//対応するプルダウンメニューに応じたXMLファイルを取得する
				if($('.page:first .pulldown-menu.' + pulldowncontents[i]).length >= 1 ) {
				$.ajax({
					url: 'xml/' + pulldowncontents[i] + '.xml',
					type: 'get',
					dataType: 'xml',
					success: function(xml){	//通信に成功した場合
							//pulldown-menuとプルダウンメニューの項目名をクラスに持つタグを対象に処理する
							$.each($('.pulldown-menu.' + pulldowncontents[i]), function(){
								//種別名の表が作成されていなければ
								if(pulldowncategories[pulldowncontents[i]] == null){
									//種別名の表のベースを作る
									pulldowncategories[pulldowncontents[i]] = new Array();
								}
								//プルダウンメニューの呼び出し元となるタグをspanタグで囲む
								$(this).wrap($('<span></span>')
								.addClass('pulldown-out'));		//囲むspanタグにはpulldown-outクラスを追加
								$(this).after($('<ul></ul>')	//プルダウンメニューの呼び出し元の後にリストを追加
								.addClass('pulldown-menu-list'));	//pulldown-menu-listクラスを追加
								//追加されたリストを指すセレクターをpulldownselectorに格納
								pulldownselector = $(this).next();	
								$(xml).find('content').each(function(i){
									var thiscontent = $(this);
          				//    	    $(pulldownselector).append($('<li></li>')		
						//			.append($(this).find('name').text())
						//			);
          				    	    $(pulldownselector).append($('<li></li>')
										.append($('<span></span>')
											.addClass('list-name')
											.text($(thiscontent).find('name').text())
										)
									);	
									$.each($('*',thiscontent), function(){
										var nodeName = $(this).get(0).nodeName;
										var num = i + 1;
										$(' > li:nth-child('+ num +')' ,pulldownselector).append($('<param></param>')
										.css('display', 'none')
										.attr('name', nodeName)
										.text($(this).text())
										);
										//連想配列にXMLから取得した種別名を格納する
										//ノード名がcategoryかつ、pulldowncategories内の該当する種別名がなければ
//										if(nodeName == 'category'){
											//pulldowncategoriesに種別名を登録する
//											pulldowncategories[pulldowncontents[i]][$(this).text()]　= $(this).text();
//											alert(pulldowncategories[pulldowncontents[i]][$(this).text()]);
//										}
									})
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

	//表示したプルダウンメニューのテキストボックスを記録するための変数lastpulldown
	var lastpulldown;
	//選択ボタンを押して種別を選んだ状態かどうかを判別する変数isCategorySelect
	var isCategorySelect = false;
	/*
	 * 関数　: appearPulldown = function(e)
	 * 引数　: Event e
	 * 戻り値: なし
	 * 概要  : プルダウンメニューを出現させる
	 * 作成日:14.06.14
	 * 作成者:T.M
	 * 更新日:14.06.24
	 * 更新者:T.M
	*/
	var appearPulldown =  function(e){
		/* まず、現在開かれているプルダウンメニューがあれば閉じる */
		$('.pulldown-menu-list').css('display', 'none');
		var pulldown = $(this);					//呼び出しもとのセレクタをpulldownに格納
		//thisがwindowなっていれば
		if(pulldown[0] == window){
			pulldown = e;	//pulldownにeを格納
		}
		var pulldownlist = '';							//プルダウンメニューの本体のセレクタを格納する変数
		if($(pulldown).attr('class').indexOf('select-button') != -1){	//選択ボタンで呼ばれたなら
			//種別プルダウンとセットになっていたら
			if($(this).parent().prev().attr('class').indexOf('product-category') != -1){
				//カテゴリーのプルダウンメニューを開くようにする
				pulldown = $(this).parent().prev().find('span');
				//種別選択のフラグを立てる
				isCategorySelect = true;
				//プルダウンメニューを出現させ、重なる要素の一番上に表示する。
				pulldownlist = $('ul',pulldown);		//プルダウンメニューのリスト本体をpulldownlistに格納
				//右paddingは現在ベタ打ちのため、修正の必要あり
				$(pulldownlist).css('display', 'block').css('z-index', '200').css('padding-right','50px');
				lastpulldown = $('input',pulldown);			//テキストボックスをlastpulldownに記憶させる
				$(pulldown).css('position', 'relative');	//spanの位置をを表示の基準にする
			} else {
				pulldown = $($(this).prev());			//プルダウンメニュー本体のspanタグのセレクタを保存
				//プルダウンメニューを出現させ、重なる要素の一番上に表示する。
				pulldownlist = $('ul',pulldown);		//プルダウンメニューのリスト本体をpulldownlistに格納
				//右paddingは現在ベタ打ちのため、修正の必要あり
				$(pulldownlist).css('display', 'block').css('z-index', '200').css('padding-right','50px');
				lastpulldown = $('input',pulldown);			//テキストボックスをlastpulldownに記憶させる
				$(pulldown).css('position', 'relative');	//spanの位置をを表示の基準にする
				//種別選択のフラグを下ろす
				isCategorySelect = false;
			}

		} else{
			pulldownlist = $(pulldown).next();		//プルダウンメニューのリスト本体をpulldownlistに格納
			//プルダウンメニューを出現させ、重なる要素の一番上に表示する
			$(pulldown).next().css('display', 'block').css('z-index', '200');
			lastpulldown = $(pulldown);		//テキストボックスをlastpulldownに記憶させる
			$(pulldown).parent().css('position', 'relative');	//親要素の位置をを表示の基準にする
			//種別選択のフラグを下ろす
			isCategorySelect = false;
		}
	};
	
	/*
	 * 関数　: disappearPulldown = function(e)
	 * 引数　: Event e
	 * 戻り値: なし
	 * 概要  : プルダウンメニューを消す
	 * 作成日:14.06.14
	 * 作成者:T.M
	 * 変更日:14.06.26
	 * 変更者:T.M
	 * 内容  :リストのセルのプルダウンメニューに対応
	*/
	var disappearPulldown = function(e){
		//プルダウンメニューを隠し、重なりを一番下にする
		$('.pulldown-menu-list', this).css('display', 'none').css('z-index', '');
		//IE7でのプルダウンメニューの項目のバグ対処のためプルダウンメニューの親要素の位置をstaticに戻す
		$(this).css('position', 'static');	
		//現在開いているプルダウンメニューであれば
		if($(this) == $(lastpulldown).parent())
			//種別選択のフラグを下ろす
			isCategorySelect = false;
	};
	
	/*
	 * 関数　: writePulldown = function(e)
	 * 引数　: Event e
	 * 戻り値: なし
	 * 概要  : プルダウンメニューを選択したときにテキストボックスに書き込む
	 * 作成日:14.06.14
	 * 作成者:T.M
	 * 変更日:14.07.11
	 * 変更者:T.M
	 * 内容  :選択した種別によるフィルタリング機能のための記述追加
	*/
	var writePulldown = function(e){
		//最後に押したプルダウンニューのテキストボックスに選択した項目の文字列を写す
		$(lastpulldown).val($('.list-name',this).text());
		$(this).parent().css('display', 'none');		//プルダウンメニューを非表示にする
		$(this).parent().parent().css('position', 'relative');	//祖父母要素を相対位置指定する
		var categoryName = '';
		//選択した項目が持つデータを、書き込むべき場所があれば自動で書き込む
		$.each($('param',this), function(){			//選択した項目の全paramに対し処理を行う
			var contentname = $(this).attr('name');	//paramのnameの値をcontentnameに格納
			if(contentname != 'name'){					//contentnameがname(項目の名前と同じ文字列)でなければ
				//contentnameと同じ名前のクラスを持つテキストボックスへ値を書き込む
				$('.' + contentname).attr('value', $(this).text());
				if(contentname == 'category'){		//カテゴリー名が選択されたら
					categoryName = $(this).text();		//カテゴリー名をcategoryNameに格納
				}
			}
		});
		//種別が選ばれた場合は
		if($(this).parent().prev().attr('class').indexOf('categories') != -1){
			//フィルタリングするプルダウンメニューの祖先となるdivタグを変数に格納
			var fillteringPulldown = $(this).parent().parent().parent().next();
			//対応するプルダウンメニューをフィルタリングする
			fillterPulldown(fillteringPulldown, categoryName);	//
		}
		//種別選択のフラグが立っていた状態で種別選択されていたら
		if(isCategorySelect == true){
			//製品名、顧客名を選択するテキストボックスの祖先となるdivタグを変数に格納
			var nextSelect = $(this).parent().parent().parent().next();
			//次に表示するプルダウンメニューのセレクタをnextPulldownに格納
			var nextPulldown = $('.pulldown-menu' ,nextSelect);
			//製品名、顧客名のプルダウンメニューを表示する
			appearPulldown(nextPulldown);
		}
	}
	/*
	 * 関数　: fillterPulldown = function(pulldown category)
	 * 引数　: jQuery pulldown, var category
	 * 戻り値: なし
	 * 概要  : 種別に対応したプルダウンメニューの項目を絞り込む
	 * 作成日:14.07.11
	 * 作成者:T.M
	*/
	var fillterPulldown = function(pulldown, category){
		//引数に取った親要素からプルダウンメニューを見つける
		var pulldownMenuList = $('.pulldown-menu-list', pulldown);
		//表示される項目のセレクタを変数に格納
		var displayElem = $('li:has(param[name="category"]:contains(' + category + '))', pulldownMenuList);
		//はじめに全項目を非表示にする
		$('li', pulldownMenuList).css('display', 'none');
		//カテゴリー名が一致した項目について
		$(displayElem).css('display', 'block');	//表示を行う
		//1件も表示されない場合は
		if($(displayElem).length == 0 && isCategorySelect == true){
			alert('選択した種別の製品が登録されていません。');
		}

	}
	
	//プルダウンメニューの出現、消滅、選択についての一連のイベント登録
	//select-text-boxクラスを持たないpulldown-menuクラスを持つテキストボックスをクリックしたら
	//プルダウンメニューを出現させる
	$(document).on('click', '.pulldown-menu:not(.select-text-box)', appearPulldown);
	//選択ボタンを押したらプルダウンメニューを出現させる
	$(document).on('click', '.select-button', appearPulldown);
	//プルダウンメニューの親要素であるpulldown-outクラスを持つspanタグの範囲からマウスカーソル
	//が離れたらプルダウンメニューを消す
	$(document).on('mouseleave', '.pulldown-out', disappearPulldown);
	//プルダウンメニューの項目を選択したら、選択した項目をテキストボックスに書き出す
	$(document).on('click', '.pulldown-menu-list > li', writePulldown);

	/*
	 * 関数　: loadList = function()
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : リストを呼び出す
	 * 作成日:14.06.17
	 * 作成者:T.M
	*/
	var loadList = function(contentUrl){
		var obj;					//表のデータを設定する変数objを宣言
		$("#" + contentUrl + "-list").jqGrid(objRule[contentUrl]);		//リストを書き出す
	}
	
	/*
	 * 関数　: 無名
	 * 引数　: なし
	 * 戻り値: なし
	 * 概要  : Ajax通信が終わったときの処理
	 * 作成日:14.06.17
	 * 作成者:T.M
	*/
	$(document).ajaxStop(function(){
		setButtons();	//JQueryUIのボタンを配置する
		if($('.page:first .list').length > 0){	//リストがあれば
			gridResize();							//幅を調整する
		}
		setContentHeight();	//setContentHeightを呼び出し高さを修正
		changeFontSize();	//フォントサイズを調整する
	});

	/* 関数名  : addCSSRule(selector, css)
	 * 引数　  : var selector, var css
	 * 戻り値  : なし
	 * 概要    : 引数に取ったセレクターにCSSのスタイルを設定する
	 * 作成者  : T.M
	 * 作成日  : 14.06.18
	 * コメント:オープンソース利用
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

	/* 関数名:callPage = function(e)
	 * 引数　:Event e
	 * 戻り値:なし
	 * 概要  :ページを呼び出し表示する
	 * 作成日:14.06.23
	 * 作成者:T.M
	*/
	var callPage = function(e){
		//表示されているプルダウンメニューをしまう
		$('.pulldown-menu-list').css('display', 'none');
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
				if($('.page:first .date').length > 0){		//dateクラスの要素があれば
	        		setCalendar();				//setCalendarを呼び出しカレンダーボタンを配置
				}
				if($('.page:first .list').length > 0){	//pulldown-menuクラスの要素があれば
					loadList(contentUrl);				//wrapPulldownを呼び出しプルダウンメニューを配置
				}
				if($('.page:first .pulldown-menu').length > 0){	//pulldown-menuクラスの要素があれば
					wrapPulldown();				//wrapPulldownを呼び出しプルダウンメニューを配置
				}
				if($('.page:first #tab-container').length > 0){	//タブのあるページが呼び出されたら
					//タブの幅を取得。Google Chart Toolsの幅設定に使う
					tabContainerWidth = $('#tab-container').width() * tabContainerPercent;
				}
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
		if(isListChanged(isChange, pageId)){		//リストが編集されていたら
			saveList();						//ダイアログを出し編集結果を保存するか選択
		} else {
			disappearPage();//ページをそのまま消す
		}
	}

	//ページを読み込むイベントを登録
	$(document).on('click', '.callpage', callPage);
	//クローズボックスをクリックしたら現在のページを閉じる
	$(document).on('click', '.backbutton', onPageClose);

});

	/* 関数名:saveList()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :ダイアログを表示して編集したリストを保存するか選択させる
	 * 作成日:14.07.01
	 * 作成者:T.M
	*/	
	function saveList(){
//		$('body' ,document).append($('<div></div>')		//ダイアログの内容を作る
//			.attr('id', 'chooseListSave')				//IDを設定
//			.append($('<p></p>')						//文章のタグを追加
//			.text('aaaaaa')									//文章を記述
//			)
//		);
		$('#chooseListSave', document).dialog('open');	//ダイアログを表示する
//		$('#chooseListSave', document).remove();			//ダイアログを消す
	}

	/* 関数名:setButtons()
	 * 引数　:なし
	 * 戻り値:なし
	 * 概要  :ボタンをJQuery UIのものに置き換える
	 * 作成日:14.07.01
	 * 作成者:T.M
	*/	
function setButtons(){
	//JQueryの記述を開始
	$(function(){
		$('.button').button();	//ボタンをJQuery UIで用意されたものにする
		//追加ボタンがあれば
		if($('.page:first button.add-button').length >= 1){
			//追加ボタンのレイアウトを変更
			$('.add-button').button({
				icons: {					//ボタンの画像を設定
					primary: 'ui-icon-plus'	//ボタンの画像を＋マークにする
				},
				text: false					//テキストを非表示にする
			});
		}
		//編集ボタンがあれば
		if($('.page:first button.edit-button').length >= 1){
			//編集ボタンのレイアウトを変更
			$('.edit-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-pencil'	//ボタンの画像を鉛筆マークにする
				},
				text: false					//テキストを非表示にする
			});
		}
		//削除ボタンがあれば
		if($('.page:first button.delete-button').length >= 1){
			//選択ボタンのレイアウトを変更
			$('.delete-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-trash'	//ボタンの画像をゴミ箱マークにする
				},
			text: false					//テキストを非表示にする
			});
		}
		//選択ボタンがあれば
		if($('.page:first button.select-button').length >= 1){
			//選択ボタンのレイアウトを変更
			$('.select-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-arrowthick-1-s'	//ボタンの画像を下矢印にする
				},
			text: false					//テキストを非表示にする
			});
		}
		//クローズボックスがあれば
		if($('.page:first button.close-button').length >= 1){
			//まとめボタンのレイアウトを変更
			$('.close-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-close'	//ボタンの画像を×マークにする
			},
			text: false						//テキストを非表示にする
			});
		}
		//まとめボタンがあれば
		if($('.page:first button.summary-button').length >= 1){
			//まとめボタンのレイアウトを変更
			$('.summary-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-document'	//ボタンの画像を文書マークにする
			},
			text: false						//テキストを非表示にする
			});
		}
		//入庫ボタンがあれば
		if($('.page:first button.stock-button').length >= 1){
			//入庫ボタンのレイアウトを変更
			$('.stock-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-plus'	//ボタンの画像を下向きプラスマークにする
			},
			text: false						//テキストを非表示にする
			});
		}
		//連結ボタンがあれば
		if($('.page:first button.connect-button').length >= 1){
			//連結ボタンのレイアウトを変更
			$('.connect-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-link'		//ボタンの画像を連結マークにする
			},
			text: false						//テキストを非表示にする
			});
		}
		//カレンダーボタンがあれば
		if($('.page:first button.ui-datepicker-trigger').length >= 1){
			//カレンダーボタンのレイアウトを変更
			$('.ui-datepicker-trigger').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-calendar'	//ボタンの画像をカレンダーマークにする
			},
			text: false						//テキストを非表示にする
			});
		}
		//設定ボタンがあれば
		if($('.page:first button.setting-button').length >= 1){
			//設定ボタンのレイアウトを変更
			$('.setting-button').button({
				icons: {					//ボタンの画像を設定
				primary: 'ui-icon-gear'		//ボタンの画像を歯車マークにする
			},
			text: false						//テキストを非表示にする
			});
		}
	});
}


//モーダルダイアログによるリンクリストの作成
//jQueryでの記述を開始
$(function(){
    //　モーダル初期設定
    $('#modal').dialog({
		title: '<nobr>リンクリスト</nobr>',		//ダイアログのタイトル
		width: 'auto',				//幅
		height: 'auto',				//高さ
        autoOpen: false, 			// 自動でオープンしない
		modal: true,				//モーダルダイアログ
        resizable: false, 			// リサイズしない
        draggable: false, 			// ドラッグしない
        show: "clip",     			// 表示時のエフェクト
        hide: "fade",      			// 非表示時のエフェクト
		position: ["right", "top"]	//表示位置の指定。右上に表示
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
     	show: "fade",     			// 表示時のエフェクト
	    hide: "fade",      			// 非表示時のエフェクト
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
				$("input#direct-input-text").val('');			}
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

/* 関数名: callList
 * 引数  : var contentName
 * 戻り値: なし
 * 概要  : リストを作る
 * 作成日: 14.07.06
 * 作成者: T.M
 */
function callList(contentName){
		var obj;					//表のデータを設定する変数objを宣言
		$("#" + contentName + "-list").jqGrid(objRule[contentName]);		//リストを書き出す
}
/* セルの直接入力ダイアログを呼び出す */
$(document).on('change', '.list td select', function(e){
	selectedValue = $(this).val();
	if($('option[value="' + selectedValue + '"] span', this)[0]){
		editingTable = $(this).parents('table').attr('id');		//編集中のテーブルのIDを取得
		$('#direct-input-dialog').dialog('open');		// 値の直接入力のダイアログを呼び出す
	}
});


var mainWidthPercent = 0.97;		//mainのタグの幅に対するリスト幅の割合
var tabContainerPercent = 0.99;		//タブの幅に対するリスト幅の割合。paddingの値を加味する
var tabContainerWidth;						//タブの幅を格納する変数

/* 関数名: gridResize()
 * 引数  : なし
 * 戻り値: なし
 * 概要  : リストの幅を調整する
 * 作成日: 14.07.14
 * 作成者: T.M
 */
function gridResize() {
	  if($('.page:first #tab-container').length > 0){	//タブなら
	  	gridWidth = $('#tab-container').width() * tabContainerPercent;		//タブパネルの幅を取得
	  } else{										//タブでなければ
		gridWidth = $('.main').width() * mainWidthPercent;					//mainの幅を取得
	  }
	  
      $('.list').setGridWidth(gridWidth);	//基準となる要素の幅の97%の幅をリストに設定
}

/* JQ Gridによるリストを適正なサイズに調整する */
$(function(){
  $(window).resize(function () {	//ウィンドウの大きさが変わったら
	gridResize();						//リストの幅を調整する
  }).trigger('resize');				//リサイズイベント取得の補助
});

//GoogleからGoogleChartのコアを呼び出す
google.load('visualization', '1', {packages:['corechart']});
//Googleから表出力のAPIを呼び出す
google.load('visualization', '1', {packages:['table']});
//関数をよみこむ
//google.setOnLoadCallback(drawChart);

//グラフに使うデータを定義
var chartData = new Array();
	//Fig.8-0のダミーデータ
   chartData['fig8-0'] = [
    ["年度","売上","経常利益","仕入"],	//項目軸ラベルと値ラベル
	//ダミーデータ5つ
    ["2010",1.8,0.3,1.5],
    ["2011",3.9,2.5,1.4],
    ["2012",3.5,1.9,1.6],
    ["2013",4.7,2.5,2.2],
    ["14",5.6,3.8,1.8]
  ];
  //Fig.8-1のダミーデータ
  chartData['fig8-1'] = [
    ["企業名","売上"],	//項目軸ラベルと値ラベル
	//ダミーデータ3つ
    ["A社", 1.5],
    ["B社", 2.0],
    ["C社", 1.2]
  ];
  //Fig.8-2のダミーデータ
  chartData['fig8-2'] = [
    ["企業名","売上"],	//項目軸ラベルと値ラベル
	//ダミーデータ3つ
    ["A社", 1.2],
    ["B社", 1.8],
	["C社", 0.9]
  ];

//グラフの追加設定データを格納する配列
var chartOptions = new Array();
//fig8-0の追加設定データ
chartOptions['fig8-0'] = {
    width: tabContainerWidth, //横幅
    height: 400, //高さ
	title: '統計',	//グラフのタイトル
	'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
	hAxis : { title: '年度', slantedText: true},
	vAxis : { title: '単位 千万'}
  }
//fig8-1の追加設定データ
chartOptions['fig8-1'] = {
    width: 560, //横幅
    height: 400, //高さ
	title: '受注別',	//グラフのタイトル
	'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
	hAxis : { title: '単位 千万', slantedText: true},
	vAxis : { title: '企業名'}
  }
//fig8-2の追加設定データ
chartOptions['fig8-2'] = {
    width: tabContainerWidth, //横幅
    height: 400, //高さ
	title: '発注別',	//グラフのタイトル
	'titleTextStyle': { fontName: 'Meiryo UI', fontSize: 26},
	hAxis : { title: '単位 千万', slantedText: true, gridlines: {count:10}, baseline: 0},
	vAxis : { title: '企業名'}
  }
  
//表の追加設定データを格納する配列  
var tableOptions = new Array();
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


/* 
 * 関数名:drawChart(contentName, graphType)
 * 引数  :var contentName, var graphType, var existTable
 * 戻り値:なし
 * 概要  :Google Chart Toolsでグラフを描く
 * 作成日:14.07.06
 * 作成者:T.M
*/ 
function drawChart(contentName, graphType, existTable) {
  //chartDataをセット
  data = google.visualization.arrayToDataTable(chartData[contentName]);
  //折れ線グラフを描く場合
  if(graphType == 'line'){
  //折れ線グラフを描き出す場所をセット
  chart = new google.visualization.LineChart(document.getElementById(contentName + '-graph'));
  //横棒グラフを描く場合
  } else if(graphType == 'bar'){
  //横棒グラフを描き出す場所をセット
  chart = new google.visualization.BarChart(document.getElementById(contentName + '-graph'));
  }
  //データと追加設定を引数にして所定の場所にグラフを描く
  chart.draw(data,chartOptions[contentName]);
  
  //表も書く場合
  if(existTable){
  	//表の場所を準備する
  	table = new google.visualization.Table(document.getElementById(contentName + '-table'));
  	//所定の場所に表を描く
  	table.draw(data, tableOptions[contentName]);
  }
}


