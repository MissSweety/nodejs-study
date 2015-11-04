function renameFile(){
    console.log('--------开始删除文件--------');
    var fs = require('fs');
	fs.unlink('test.txt', function(err){
	if(err){
		console.log("删除失败");
	} 
		console.log("删除成功");

});    
}
renameFile();
