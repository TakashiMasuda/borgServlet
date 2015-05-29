package test;	//テスト用パッケージ。

//入力エラー用の例外クラスをインポートする。
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;


//サーブレットでのエラー用の例外クラスをインポートする。
import javax.servlet.ServletException;
//サーブレットのクラス群をインポートする。
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//サーブレットのGetJSONクラスを宣言する。
public class SaveJSONRecord extends HttpServlet {

	//postメソッドで通信する。
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
		//クライアントから送信されたJSON文字列を取得する。
		String json = request.getParameter("json");
		
		//JSONDBManagerのインスタンスを生成する
		JSONDBManager jdbm = new JSONDBManager();
		
		//SQLによる例外の対処のためtryブロックで囲む
		try {
			//DBに接続する
			jdbm.conn = DBManager.getConnection();
			//クライアントから送信されたJSON文字列を連想配列に変換する
			jdbm.getJSONMap(json);
			//INSERT、またはUPDATE命令を実行する
			jdbm.executeQuery(jdbm.json, JSONDBManager.DB_SETQUERY);
			//SQL例外のcatchブロック
		} catch (SQLException e) {
			//例外時にログを長洲
			e.printStackTrace();
		//最後に行う処理
		} finally{
			//tryブロック
			try {
				//DBとの接続を必ず切る
				jdbm.conn.close();
			//DB切断時にエラーが出た場合
			} catch (SQLException e) {
				//エラーログを流す
				e.printStackTrace();
			}
		}
		
		//クライアントへ返すメッセージを作成する。
		String returnMessage = "{\"message\":\"" + jdbm.processedRecords + "件のレコードを操作しました。\"}";
		
		// 文字エンコード。JSON設定
		response.setContentType("application/json;charset=UTF-8");
		//テキストを出力する準備をする。
		PrintWriter out = response.getWriter();

		//作成したJSON文字列を出力する。
		out.print(returnMessage);
		//出力ストリームを閉じる。
		out.close();
	}
}