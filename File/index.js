const fsPromises= require('fs').promises;
const path = require('path');

//-first way to READ ----
// fs.readFile('./lorem.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


//-----in first way readin can be varying in other os -----but in below it uses for all os
// fs.readFile(path.join(__dirname,'lorem.txt'),'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// console.log('End');//asyn process becz flow is - start,end then lorem 

//------Write----------

// fs.writeFile(path.join(__dirname,'reply.txt'),"Writing is in the file by writeFile.",(err)=>{
//     if(err) throw err;
//     console.log("Write  Completed");

//     fs.appendFile(path.join(__dirname,'test.txt'),"Testing Text.",(err)=>{
//     if(err) throw err;
//     console.log("Append  Completed");

//     fs.rename(path.join(__dirname,'test.txt'),path.join(__dirname,'Newtest.txt'),(err)=>{
//     if(err) throw err;
//     console.log("Rename  Completed");
// });
// });
// });
//above is now become callback hell

//async-await-----------------------

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'promiseWrite.txt'),'\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname,'promiseWrite.txt'),path.join(__dirname,'promiseComplete.txt'));

        const Newdata = await fsPromises.readFile(path.join(__dirname,'promiseComplete.txt'),'utf-8');
        console.log(Newdata);

        await fsPromises.unlink(path.join(__dirname,'starter.txt'));
    }catch(err){
        console.error(err);
    }
}

fileOps();



//if you want to modifgy existing file then used append functojn after callback in same wrtie file sectiojn 

//exit on uncaught errors
process.on('uncaughtException',err=>{
    console.error(`There was an uncaught error:${err}`);
    process.exit(1);
})
