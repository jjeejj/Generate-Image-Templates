const PGI = require('puppeteer-generate-image');
const path = require('path');

async function genera(){
    let pgi = new PGI({path:'./concise.png'});
    try{
        await pgi.init();
        await pgi.generateImage(path.join(__dirname,'./concise.html'));
    }catch(err){
        throw err;
    }finally{
        await pgi.destroy();
    };
};
genera();