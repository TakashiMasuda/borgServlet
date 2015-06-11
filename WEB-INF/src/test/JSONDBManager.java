//testパッケージ
package test;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;


/*
 * クラス名:JSONDBManager
 * 概要  :JSONDBManagerからデータを取得し、JSONを生成するためのクラス
 * 設計者:H.Kaneko
 * 作成者:T.Masuda
 * 作成日:2015.05.15
 */
public class JSONDBManager{

	/*
	 * クラス名:DB_ResultTree
	 * 概要  :DBの結果セットのツリーのノードクラス
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 * 修正者:T.Masuda
	 * 修正日:2015.06.09
	 * 内容　:JSONのkeyとvalueをメンバに保存するようにしました
	 */
	class DB_ResultTree{
		DB_ResultTree parent = null;		//このノード(インスタンス)の親
		Map<String, Object> json = null;	//カレントのJSONデータ
		String keyData = "";				//メンバのjsonのキー
		ResultSet db_result = null;			//DBの結果セット
	}	
	
	
	//JSONを変換した連想配列を格納する
	Map<String, Object> json = null;
	//DBへの接続をメンバに保存する
	Connection conn = null;
	//DBへの追加、更新処理を行ったときに帰ってくる処理レコード数の数値を格納するメンバ
	int processedRecords = 0;
	
	
	//JSONのdb_getQueryキーの文字列を定数にセットする
	public static final String DB_GETQUERY = "db_getQuery";
	//JSONのdb_setQueryキーの文字列を定数にセットする
	public static final String DB_SETQUERY = "db_setQuery";
	
	//JSONのdb_columnキーの文字列を定数にセットする
	public static final String DB_COLUMN = "db_column";
	//JSONのtextキーの文字列を定数にセットする
	public static final String KEY_TEXT = "text";
	//JSONのhtmlキーの文字列を定数にセットする
	public static final String KEY_HTML = "html";
	//JSONのhtmlキーの文字列を定数にセットする
	public static final String KEY_SRC = "src";
	//JSONのhtmlキーの文字列を定数にセットする
	public static final String KEY_VALUE = "value";
	//JSONの値を入れるノードのキーの文字列リストを定数にセットする
	public static final String[] KEY_LIST = {"text", "html", "src"};

	/*
	* 関数名:Map getJSONMap(String jsonString)
	* 概要  :JSON文字列から連想配列を生成する。(増田追加分)
	* 引数  :String jsonString:JSONの文字列
	* 返却値  :なし
	* 設計者:T.Masuda
	* 作成者:T.Masuda
	* 作成日:2015.05.15
	*/
	void getJSONMap(String jsonString) throws IOException{

	    //JSON文字列を連想配列に変換するための操作を行えるクラスを用意する
	    ObjectMapper mapper = new ObjectMapper();
	    //JSON文字列を連想配列に変換する
	    Map<String, Object> map = mapper.readValue(jsonString, Map.class);
		
	    this.json = map;	//Mapに変換されたJSONを返す
	}

	/*
	 * 関数名:String outputJSON(String jsonString, String key)
	 * 概要  :DBから取得したレコードでJSONを作る。(増田追加分)
	 * 引数  :String jsonString:クライアントから受け取ったJSON文字列
	 * 返却値  :String retJson:生成したJSON文字列を返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 */
	void outputJSON(String jsonString, String key) throws IOException, SQLException{
		//JSON文字列を連想配列に変換する
		this.getJSONMap(jsonString);
		//例外に備える
		try{
			//DBに接続する
			this.conn = DBManager.getConnection();
			//JSON文字列の作成を行う。
			this.createJSON(this.json ,key, null);
		//最後に必ず行う
		} finally{
			//DBとの接続を切る
			this.conn.close();
		}
	}	

	/*
	 * 関数名:createJSON(Map<String, Object> json ,String key, DB_ResultTree dbrt_parent)
	 * 概要  :JSON文字列を作る。
	 * 引数  :Map<String, Object> json:カレントのJSON
	 * 		:String key:JSONのオブジェクトのキー。
	 * 		:DB_ResultTree dbrt_parent:結果セットツリーの親。
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 */
	void createJSON(Map<String, Object> json, String key, DB_ResultTree dbrt_parent) throws SQLException{
		//DB_ResultTreeのインスタンスを新規に生成する
		DB_ResultTree db_resultTree = new DB_ResultTree();
		//DBから当該レコード群を取得する
		db_resultTree.db_result = this.executeQuery(json, DB_GETQUERY);
		//親子関係を構築する
		db_resultTree.parent = dbrt_parent;
		//カレントのJSONを保存する
		db_resultTree.json = json;
		db_resultTree.keyData = key;
		
		//db_resultTreeからkeyに該当するデータを取得する
		String column = this.getDBColumn(key, db_resultTree);
		
		//子供分ループする
		for(Entry<String, Object> curKey : json.entrySet()) {
			//キーを取得する
			String keyString = curKey.getKey();
			//値がオブジェクト(連想配列)であれば
			if(curKey.getValue() instanceof LinkedHashMap){
				//再帰する
				createJSON((Map<String, Object>)curKey.getValue(), keyString, db_resultTree);
			//取得した列の値がnullでないかつキーがtextかhtml、srcであれば
			} else if(column != null && (keyString.equals(KEY_TEXT) || keyString.equals(KEY_HTML) || keyString.equals(KEY_SRC))){
				curKey.setValue(column);	//該当するキーの値をcolumnで上書きする
			}
		}
	}

	
	/*
	 * 関数名:ResultSet executeQuery(Map<String, Object>  json, String queryKey)
	 * 概要  :クエリを作成し、DBからレコードを取得して返す。
	 * 引数  :Map<String, Object>  json:カレントのJSON連想配列。
	 * 		:String queryKey:実行するクエリのベースとなる文字列。
	 * 返却値  :なし
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 */
	 ResultSet executeQuery(Map<String, Object>  json, String queryKey) throws SQLException {
		ResultSet retRS = null;		//返却用の結果セットの変数を用意する
		
		//カレントjsonから"queryKey"を持つキーを取得する
		String query = (String)json.get(queryKey);
		
		//queryに正しい値が入っていれば
		if(query != null && query.length() >=1){
			//カレントjsonの子供オブジェクト分ループする
			for(Entry<String, Object> child:json.entrySet()){
				//現在走査対象となっている子がオブジェクト(連想配列)なら
				if(child.getValue() instanceof LinkedHashMap){
					//子オブジェクトを取得する
					Map<String, Object> childObject = (Map<String, Object>)child.getValue();
					//子オブジェクトがvalueを持っていたら
					if(childObject.containsKey(KEY_VALUE)){
						//子オブジェクトのkey文字列と一致するqueryの文字列を置換する
						query = query.replace("'" + child.getKey() + "'", "'" + (String)childObject.get(KEY_VALUE) + "'");
					}
				}
			}
			
			//クエリを実行し、結果セットを取得する
			Statement stmt = this.conn.createStatement();	//ステートメントを生成する
			//SELECT命令であれば
			if(queryKey.equals(DB_GETQUERY)){
				retRS = stmt.executeQuery(query);				//クエリを実行して結果セットを取得する
				//結果セットをレコードが取得できるポインタに進める。レコードが取得できていない場合にはnullを返すようにする
				retRS = retRS.next()? retRS: null;				
			//UPDATEかINSERTであれば
			} else if (queryKey.equals(DB_SETQUERY)){
				//クエリを実行して更新処理を行う。処理を行ったレコード数を返してメンバに保存する
				processedRecords = stmt.executeUpdate(query);
			}
		}
		//結果セットを返す
		return retRS;
	 }


	/*
	 * 関数名:checkColumn
	 * 概要  :結果セットに指定した列名を持つ列があるかをチェックする
	 * 引数  :ResultSet rs:指定した列があるかをチェックする対象の結果セット
	 * 		:String columnName:チェック対象の列名
	 * 返却値  :boolean:列の存在を判定して返す
	 * 設計者:T.Masuda
	 * 作成者:T.Masuda
	 * 作成日:2015.05.21
	 */
	 boolean checkColumn(ResultSet rs, String columnName) throws SQLException {
		boolean retBoo = false;						//返却する真理値の変数を用意する
		ResultSetMetaData rsm = rs.getMetaData();	//結果セットのメタデータを取得する
		int ccount = rsm.getColumnCount();			//列の数を取得する
		 		
		//結果セットの列を走査する
		for(int iLoop = 1 ;iLoop <= ccount ; iLoop ++){
			//結果セットの列に指定した列名の列が存在する
			if(columnName.equals(rsm.getColumnLabel(iLoop))){
				retBoo = true;	//返す変数にtrueを格納する
				break;			//追加
			}
		}
			 
		return retBoo;	//判定を返す
	}	 
	 
	/*
	 * 関数名:String getDBColumn(String key, DB_ResultTree dbrTree)
	 * 概要  :カラムからデータを取り出し返す。
	 * 引数  :String key:JSONのオブジェクトのキー。
	 * 		:DB_ResultTree dbrTree:結果セットツリー。
	 * 返却値  :String:カラムの値を返す。
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 */
	 String getDBColumn(String key, DB_ResultTree dbrTree) throws SQLException {
		//返却する、列の文字列を格納する変数を宣言、nullで初期化する
		String column = null;
		int columnNumber=0;		//取得対象が列の何行目かをセットする
		//カラムからデミリタ文字「^」を探す　note:'列名^0'←開始キー名。ゼロ始まり。
		//dbrTreeに親がいてかつ、キーに区切り文字「~」が含まれていれば
		if (dbrTree.parent != null && dbrTree.parent.keyData.contains("~")) {
			//keyを~を境に分離する
			String[] keyString = dbrTree.parent.keyData.split("~");
			//デリミタを元に行数のトークンに分ける
			columnNumber = Integer.parseInt(keyString[1]); //シフトする結果セットの行数をセットする
		}

		//親がなくなるまでDBレコードツリーを操作する
		for(;dbrTree != null;){
			//dbrTreeに結果セットが登録されていれば
			if(dbrTree.db_result!=null && checkColumn(dbrTree.db_result, key)){
				
				//行数分、行ポインタをシフトする
				//結果セットの行のポインタが必要な分だけシフトし終わるまで繰り返す
				while(columnNumber > 0) {
					dbrTree.db_result.next();	//結果セットのポイントを次のレコードに移動する
					columnNumber--;				//行ポインタをシフトのカウントを1つ減らす
				}
				//カラムの値を取得する
				column = dbrTree.db_result.getString(key);
				//@add 2015.0609 T.Masuda ループが終わったら結果セットのポインタを先頭に戻すようにしました
				dbrTree.db_result.beforeFirst();	//結果セットの行のポインタを先頭の前に戻す
				dbrTree.db_result.next();			//結果セットの行のポインタを1行目に当てる
				break;	//ループを抜ける
			}
			 
			//親をセットする
			dbrTree = dbrTree.parent;
		}
		 
		return column;	//取得したカラムの値を返す
	}
	 
	/*
	 * 関数名:String getListJSON(Map<String, Object> json)
	 * 概要  :DBからリストに用いるレコード群を取得し文字列にしてJSON文字列に追加する。
	 * 引数  :Map<String, Object> json:JSONのオブジェクト。
	 * 返却値  :String:JSON配列の文字列を返す
	 * 設計者:H.Kaneko
	 * 作成者:T.Masuda
	 * 作成日:2015.05.15
	 */
	 String getListJSON(Map<String, Object> json) throws SQLException {
		//返却する文字列を作成するための変数を3つ宣言、初期化する
		String strAll = "";
		String strBlock = "";
		String strLine = "";
		
		//DBからリストに用いるレコード群を取得する。
		ResultSet rs = this.executeQuery(json, DB_GETQUERY);
		//結果セットのメタデータを取得する
		ResultSetMetaData rsm = rs.getMetaData();
		//列数を取得する。
		int ccount = rsm.getColumnCount();

		//後判定で結果セットをループさせる
		do{
			//レコードの文字列を初期化する
			strLine = "";
			//rsの列を走査する
			for(int iLoop = 1;iLoop <= ccount ; iLoop ++){
				//列名を取得する
				String sColName = rsm.getColumnLabel(iLoop);
				//文字列の行単位の変数が空でなければ
				if(strLine != ""){
					strLine += ",";	//行の文字列をカンマで区切る
				}
				//1列分のデータを文字列に追加する
				strLine += "\"" + sColName + "\":\""+rs.getString(sColName) + "\"";
			}
			
			//行に文字列が入っていたら、カンマで区切る
			strBlock += strBlock != "" ? "," : "";
			
			strBlock += "{" + strLine + "}";	//作成した行の文字列をブロックの文字列に追加する
			 
		//結果セットのポインタを次に進める
		}while(rs.next());
		
		//作成した全ブロックを配列の括弧で囲む
		strAll = "["+strBlock+"]";
		
		return strAll;	//作成した文字列を返す
	 }
	 
	 /*
	  * 関数名:String getListJSONPlusKey(Map<String, Object> json, String key)
	  * 概要  :getListJSONで作成した配列をオブジェクトで囲む。
	  * 引数  :Map<String, Object> json:JSONのオブジェクト。
	  * 　　  :String key:キー名
	  * 返却値  :String:オブジェクトで囲んだ配列のJSON文字列を返す
	  * 設計者:H.Kaneko
	  * 作成者:T.Masuda
	  * 作成日:2015.06.10
	  */
	 String getListJSONPlusKey(Map<String, Object> json, String key) throws SQLException, JsonParseException, JsonMappingException, IOException {
		 //返却する文字列をオブジェクトに格納する
		 String retArray = this.getListJSON(json);
		 //JSON変換用のクラスのインスタンスを用意する
		 ObjectMapper mapper = new ObjectMapper();
		 //JSON配列をArrayListに変換する
		 List list = mapper.readValue(retArray, ArrayList.class);
		 json.put(key, list);	//JSON配列を引数のJSONに追加する
		 
		 retArray = mapper.writeValueAsString(json);
		 
		 return retArray;	//作成した文字列を返す
	 }
}

