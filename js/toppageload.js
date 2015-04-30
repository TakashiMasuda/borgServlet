//トップページが読み込まれたときに実行するコードのJSファイル。

			//GoogleからGoogleChartのコアを呼び出す
			google.load('visualization', '1', {packages:['corechart']});
			//Googleから表出力のAPIを呼び出す
			google.load('visualization', '1', {packages:['table']});
	
			//配列にCSSファイルのパスを格納する。全7個
			var cssFiles = [
			                'css/borgstyle.css',	//自己定義のCSSスタイルをまとめたCSS
			                'css/jquery-ui-1.9.2.custom.min.css',	//jQuery UIのCSS
			                'css/jquery.powertip-light.min.css',	//ツールチッププラグインのCSS
			                'css/ui.dropdownchecklist.standalone.css',	//プルダウン形式のチェックボックスを実装するライブラリのCSS
			                'css/easytabs.css',						//タブのプラグインのCSS
			                'css/formly.css',						//フォーム装飾のプラグインのCSS
			                'css/ui.jqgrid.css'						//表のプラグイン「jqGrid」のCSS
			                ];

			/*
			 * 関数名:loadCssFiles(cssFiles)
			 * 引数  :Array cssFiles:CSSファイルのパスの配列。
			 * 戻り値:なし
			 * 概要  :CSSファイルを読み込む。
			 * 作成者:T.Masuda
			*/
			function loadCssFiles(cssFiles){
				//headタグをjQueryオブジェクトとして変数に格納する	
				var $head = $('head');
				var filesLength = cssFiles.length;	//CSSファイルの数を取得する。
				//CSSファイルのパスの配列を走査する。
				for(var i = 0; i < filesLength; i++){
					//linkタグを生成し、必要な属性と値を設定してheadタグに追加する
					$head.append($('<link />')
							.attr('rel', 'stylesheet')
							.attr('type', 'text/css')
							.attr('href', cssFiles[i])
					)
				}
			}
			
			/*
			 * 関数名:topPageLoad(cssFiles)
			 * 引数  :Array cssFiles:CSSファイルのパスの配列。
			 * 戻り値:なし
			 * 概要  :トップページの読み込み処理。終了後にローディング画面を消してトップページを表示する。
			 * 作成者:T.Masuda
			*/
			function topPageLoad(cssFiles){
					
				//DOMの配置が終わった後の処理を登録する。
				$(window).load(function(){
					//CSSファイルを読み込む。
					loadCssFiles(cssFiles);
					//jQuery UIのボタンをセットする。同時にローディング画面も終了する。
					setButtons(true);				
				});
			}
			
			topPageLoad(cssFiles);	//トップページの読み込み処理を行う。