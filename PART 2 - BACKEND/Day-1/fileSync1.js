const fs = require("node:fs");

const myReadFile = () => {
    try {
        const data = fs.readFileSync("dummy.txt");    //here we can also write fs.readFileSync("dummy.txt","UTF-8")
        console.log("File Data: ", data.toString()); 
      } catch (error) {
        console.log("Error is : ", error.message);
      }
}

const myWriteFile = (data) => {
    try{
        fs.writeFileSync("dummy.txt",data)
    }
    catch(err){
        console.log("file writing error: ", err.message);
    }
}

const myAppendFile = (data) => {
    try {
        fs.appendFileSync("dummy.txt", data);
        console.log("Append data successfully");
    }
    catch (err) {
        console.log("File Appending Error: ", err.message);
    }
}

const myDeleteFile = (filename) => {
    try {
        fs.unlinkSync(filename)
        console.log("Successfully Deleted file", filename)
    } catch (error) {
        console.log("File Deletion error: ", error.message);
    }
}

module.exports={
    myReadFile: myReadFile,
    myWriteFile : myWriteFile,
    myAppendFile : myAppendFile,
    myDeleteFile : myDeleteFile,
    username : "Tushar",
}