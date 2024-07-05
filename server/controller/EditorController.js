const axios=require('axios');
const cors=require('cors')

const Compiler=async(req,res)=>{
    let code= req.body.code;
    let language= req.body.language;
    let input= req.body.input;
    if(language==='python'){
        language="py"
    }
    let data=({
        "code":code,
        "language":language,
        "input":input
    })

    let config={
        method:"post",
        url:
        'https://codexweb.netlify.app/.netlify/functions/enforceCode',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    try{
    const response=await axios(config);
    return res.send(response.data);
    }catch(err){
        console.log(err);
    }
};
module.exports={Compiler};
