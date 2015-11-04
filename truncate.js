function readFile(){
    console.log('--------开始读取文件--------');
    var fs = require('fs');
	fs.truncate('test.txt', 2,function(err){
	if(err){
		console.log("截断失败");
	} 
		console.log("截断成功");

});    
}
readFile();
