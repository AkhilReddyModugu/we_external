const fs= require('fs');

async function copy(src,dest){
    try{
        const data= await fs.readFileSync(src,'utf8');
        await fs.writeFileSync(dest,data);
        console.log("Data copied Successfully");
    }
    catch(err){
        console.error("Error while copying data");
    }
}

copy("input.txt","output.txt");