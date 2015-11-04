function renameFile(){
    console.log('--------开始重命名文件--------');
    var fs = require('fs');
	fs.rename('test.txt', 'fs.txt’,function(err){
	if(err){
		console.log("重命名失败");
	} 
		console.log("重命名成功");

});    
}
renameFile();
