package test;	//テスト用パッケージ。

//入力エラー用の例外クラスをインポートする。
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;




//サーブレットでのエラー用の例外クラスをインポートする。
import javax.servlet.ServletException;
//サーブレットのクラス群をインポートする。
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

//サーブレットのGetJSONクラスを宣言する。
public class GetJSONArray extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//tableの文字列の定数を用意する
	public static final String STR_TABLE = "table";
	
	//postメソッドで通信する。
	@SuppressWarnings("unchecked")
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
		//クライアントから送信されたJSONのキーとJSON文字列を取得する。
		String json = request.getParameter("json");
		
		String retArrayString = "";		//返却するJSON配列の文字列を格納する変数を用意する
		
		//JSONDBManagerのインスタンスを生成する
		JSONDBManager jdbm = new JSONDBManager();
		
		//SQLによる例外の対処のためtryブロックで囲む
		try {
			//DBに接続する
			jdbm.conn = DBManager.getConnection();
			//JSON文字列を解析して、jdbmのメンバに格納する
			jdbm.getJSONMap(json);
			//レコードのJSONを作り、クライアントから受け取ったJSONに追加する。第2匹数で追加するキーを指定しておく
			retArrayString = jdbm.getListJSONPlusKey(jdbm.json, STR_TABLE);
		//SQL例外のcatchブロック
		} catch (SQLException e) {
			//例外時にログを長洲
			e.printStackTrace();
		}
		
		// 文字エンコード。JSON設定
		response.setContentType("application/json;charset=UTF-8");
		//テキストを出力する準備をする。
		PrintWriter out = response.getWriter();

		//作成したJSON文字列を出力する。
		out.print(retArrayString);
		//出力ストリームを閉じる。
		out.close();
	}
}