<?php

/*
 * Fig0
 * 関数名：createJSON
 * 概要  :DBからデータを取得してJSONを作る
 * 引数  :Map<String, Object> json:カレントのJSON
 * String key:JSONのキー
 * DBResultTree:dbrt_parent:DBから取得したデータを格納してツリー構造を作るためのクラスのインスタンス
 * 戻り値:なし
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */

function createJSON($Map,$json, $key, $db_resultTree) {
	// DBの結果から構築したツリーを構成するクラスのインスタンスを生成する
	DB_ResultTree db_resultTree = new DB_ResultTree();

	// fig1 データベースから当該レコード群を取得する
	db_resultTree.dbresult = executeQuery(json, DB_GETQUERY)

	// DB_ResultTreeの親子関係を構築する
	db_resultTree.parent = dbrt_parent;

	// fig2 db_resultTreeから”key”に該当するデータを取得する
	column = getDBColumn(key, db_resultTree)

	// jsonの子供分ループする
	for(Entry<String, Object> curKey : json.entrySet()) {
		// jsonの子のキーの値がオブジェクト(連想配列)であれば
		if(curKey.getValue() instanceof LinkedHashMap) {
			// fig0 再帰的にcreateJSONメソッドをコールする
			createJSON((Map<String, Object>)curKey.getValue(), keyString, db_resultTree)
			// columnがnullでなく、jsonの子のキーがtextかhtml、srcであれば
		} else if(column != null &&(keyString.equals(KEY_TEXT)
				 || keyString.equals(KEY_HTML)
				 || keyString.equals(KEY_SRC))) {
			continue;
		}
	}
}

/*
 * Fig1
 * 関数名：executeQuery
 * 概要  :クエリを実行してDBから結果セットを取得する。
 * 引数  :Map<String, Object> json:カレントのJSON連想配列
 *		 String queryKey:実行するクエリのベースとなる文字列
 * 戻り値:ResultSet:DBから取得した結果セットを返す。
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function executeQuery($Map, $json, $queryKey) {
	// 返却する結果セットの変数を作成する
	ResultSet retRS = null;

	// カレントjsonから"queryKey"を持つキーを取得する
	String query = (String)json.get(queryKey);

	// queryに正しい値が入っていれば
	if(query != null && query.length() >=1) {
		// カレントjsonの子供オブジェクト分ループする
		for(Entry<String, Object> child:json.entrySet()) {
			// 現在走査対象となっている子がオブジェクト(連想配列)なら
			if(child.getValue() instanceof LinkedHashMap) {
				// 子オブジェクトを取得する
				Map<String, Object> childObject = (Map<String, Object>)child.getValue();
				// 子オブジェクトがvalueのキーを持っている
				if (childObject.containsKey(KEY_VALUE)) {
					// 子オブジェクトの"text"キーの値をquery内の"db_column"の値と置換する
					query = query.replace(“'” + child.getKey() + “'”,“'”  + (String)childObject.get(KEY_VALUE) + “'”);
				}
			}
		}
		// ステートメントを作成する
		Statement stmt = conn.createStatement();

		// クエリを実行して結果セットを取得する
		retRS = stmt.executeQuery(query);

		// 結果セットのポインタを進め、レコードがなければnullをセットする
		retRS = retRS.next()? retRS: null; 
	}

	// 結果セットを返す
	return retRS;
}

/*
 * Fig2
 * 関数名：getDBColumn
 * 概要  :指定したkey(列)の値を結果セットから取得して返す。
 * 引数  :String key:JSONのオブジェクトのキー
 * 		  DBResultTree dbrTree:DBから取得した結果をツリー構造にするクラスのインスタンス
 * 戻り値:String column:取得した列の値を返す
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function getDBColumn($key, $dbrTree) {
	// 戻り値を格納する変数を初期化する
	String column = null;

	// dbrtreeに親がある限り続ける
	while(dbrtree != null) {
		// レコードの列名リストが生成できた&&keyに該当するcolumnがある
		if(checkColumn(dbrtree.db_result, key)) {
			// columnに値をセットする
			column = dbrtree.db_result.getString(key);
			break;
		} else {
			// 親をセットする
			dbrtree = dbrtree.parent
		}
	}
	// columnを返す
	return column;
}



/*
 * Fig3
 * 関数名：getListJSON
 * 概要  :リスト形式のJSONを作成して返す
 * 引数  :Map<String, Object> json:JSONのオブジェクト。
 * 戻り値 :String strAll:JSONの文字列配列を文字列で返す
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function getListJSON($Map, $json) {
	// 返却する文字列を作成するための変数を3つ宣言、初期化する
	String strAll = "";
	String strBlock = "";
	String strLine = "";

	// fig1 データベースから当該レコード群を取得する
	ResultSet rs = executeQuery(json, DB_GETQUERY)

	// 結果セットのメタデータを取得する
	ResultSetMetaData rsm = rs.getMetaData();

	// 結果セットの列数を取得する。
	int ccount = rsm.getColumnCount();

	// 後判定で結果セットをループさせる
	do {
		// レコードの文字列を初期化する
		int ccount = rsm.getColumnCount();

		// 結果セットの列を走査する
		for(int iLoop = 1;iLoop <= ccount ; iLoop ++) {
			// 列名を取得する
			String sColName = rsm.getColumnLabel(iLoop);

			// 文字列の行単位の変数が空でなければ
			if(strLine != "") {
				// 行の文字列をカンマで区切る
				strLine += ",";

				// 行の文字列をカンマで区切る
				strLine += ",";
			}
		}
		// 行の文字列をカンマで区切る
		strLine += ",";
		// 行の文字列をカンマで区切る
		strLine += ",";
	// 結果セットのポインタを次に進める次がなければループを抜ける
	} while(rs.next());

	// 作成した全ブロックを配列の括弧で囲む
	strAll = "["+strBlock+"]";

	// 作成した文字列を返す
	return strAll;
}


/*
 * Fig4
 * 関数名：outputJSON
 * 概要  :DBから取得したレコードでJSONを作る。
 * 引数  :String jsonString:クライアントから受け取ったJSON文字列
		 :String key:JSONのトップのノードのキー。2015.0521時点では空文字が渡されている
 * 戻り値:なし
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function outputJSON($jsonString, $key) {
	// fig5 引数のJSON文字列を変換して、JSONの連想配列を取得してクラスのオブジェクトのメンバに格納する
	this.getJSONMap(jsonString)

	// DBに接続し、接続情報のインスタンスをJSONDBManagerクラスのメンバに格納する
	this.conn = DBManager.getConnection();

	// JSON文字列の作成を行う
	this.createJSON(this.json ,key,null)

	// finallyブロック
	// 最後に必ずDBとの接続を切る
	this.conn.close()
}

/*
 * Fig5
 * 関数名：getJSONMap
 * 概要  :JSON文字列から連想配列を生成する。
 * 引数  :String jsonString:変換するJSON文字列
 * 戻り値:なし
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function getJSONMap($jsonString) {
	// JSON文字列を連想配列に変換するための操作を行えるクラスを用意する
	ObjectMapper mapper = new ObjectMapper();

	// JSON文字列を連想配列に変換する
	 Map<String, Object> map = mapper.readValue(jsonString, Map.class);

	// Mapに変換されたJSONをJSONDBManagerクラスのメンバに格納する
	this.json = map;
}


/*
 * Fig6
 * 関数名：makeColumnList
 * 概要  :結果セットから列名のリストを作る
 * 引数  :ResultSet rs:列名を取り出す結果セット
 * 戻り値::String[] :列名の配列
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function makeColumnList($rs) {
	// 結果セットのメタデータを取得する
	ResultSetMetaData rsm = rs.getMetaData();

	// 結果セットの列の数を取得する
	int ccount = rsm.getColumnCount();

	// 列名のリストの配列を作る
	String[] colNameList = new String[ccount];

	// 結果セットの列を走査する
	for(int iLoop = 0 ;iLoop < ccount ; iLoop ++) {
		// 列名を取得してリストに加える
		colNameList[iLoop] = rsm.getColumnLabel(iLoop + 1);
	}
	// 作成した列名リストを返す
	return colNameList;
}

/*
 * Fig7
 * 関数名：isExistColumn
 * 概要  :列名のリストに指定された列名があるかどうかを調べて結果を返す。
 * 引数  :String[] colNameList:列名のリスト
 		　String key:調べる列名。
 * 戻り値:boolean :引数で指定した列名があるかどうかの判定を返す
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function isExistColumn($colNameList, $key) {
	// 返却する真理値の変数を用意する
	boolean retBoo = false;

	// 走査する列名リストの要素数を取得する
	int listLength = colNameList.length;

	// 列名リストを走査する
	for(int i = 0 ;i < listLength ; i ++) {
		// keyに該当する列名があれば
		if(key.equals(colNameList[i])) {
			// 該当する列名があったという判定となる
			retBoo = true;
			break;
		}
	}
	// 作成した列名リストを返す
	return colNameList;
}

/*
 * Fig8
 * 関数名：checkColumn
 * 概要  :結果セットに指定した列名を持つ列があるかをチェックする
 * 引数  :ResultSet rs:指定した列があるかをチェックする対象の結果セット
		 String columnName:チェック対象の列名
 * 戻り値:boolean:列の存在を判定して返す
 * 設計者:H.Kaneko
 * 作成者:T.Yamamoto
 * 作成日:2015.
 */
function checkColumn($ResultSet, $columnName) {
	// 返却用の真理値の変数を宣言、falseで初期化する
	Boolean retBoo = false;

	// 結果セットのメタデータを取得する
	ResultSetMetaData rsm = rs.getMetaData();

	// 結果セットの列の数を取得する
	int ccount = rsm.getColumnCount();

	// 結果セットの列を走査する
	for(int iLoop = 1 ;iLoop <= ccount ; iLoop ++) {
		// 結果セットの列に指定した列名の列が存在する
		if(columnName.equals(rsm.getColumnLabel(iLoop))) {
			// 返す変数にtrueを格納する
			retBoo = true;
			break;
		}
	}
	// 判定を返す
	return retBoo;

}


