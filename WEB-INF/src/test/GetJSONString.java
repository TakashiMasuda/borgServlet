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

import com.fasterxml.jackson.databind.ObjectMapper;

//サーブレットのGetJSONクラスを宣言する。
public class GetJSONString extends HttpServlet {

	//postメソッドで通信する。
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		    throws ServletException, IOException {
		//クライアントから送信されたJSONのキーとJSON文字列を取得する。
		String key = request.getParameter("key");
		String json = request.getParameter("json");
		
		//JSONDBManagerのインスタンスを生成する
		JSONDBManager jdbm = new JSONDBManager();
		
		//SQLによる例外の対処のためtryブロックで囲む
		try {
			jdbm.outputJSON(json, key);
			//SQL例外のcatchブロック
		} catch (SQLException e) {
			//例外時にログを長洲
			e.printStackTrace();
		}
		
		// 文字エンコード。JSON設定
		response.setContentType("application/json;charset=UTF-8");
		//テキストを出力する準備をする。
		PrintWriter out = response.getWriter();

		//JacksonのJSON操作クラスを用意する
		ObjectMapper mapper = new ObjectMapper();
		
		//作成したJSON文字列を出力する。
		out.print(mapper.writeValueAsString(jdbm.json));
		//出力ストリームを閉じる。
		out.close();
	}
}