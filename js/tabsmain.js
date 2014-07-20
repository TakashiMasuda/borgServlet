// JavaScript Document
//tabulousを使ったタブのサンプルについてのJavaScript
//JQueryの記述を開始
$(function(){
	$('#table').csv2table('media/dete_2.csv',{
		use : 'ccchart:bar#canvas_area',
		title : 'type bar'
	});
});