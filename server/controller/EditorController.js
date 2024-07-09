const axios=require('axios');
const cors=require('cors')

const Compiler=async(req,res)=>{
    let code= req.body.code;
    let language= req.body.language;
    let input= req.body.input;
    if(language==='python'){
        language="python3"
    }
    let data=({
        script: code,
        language: language.toLowerCase(),
        stdin: input
    })

    let config={
        method:"post",
        url:
        'https://api.jdoodle.com/v1/execute',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            ...data,
            clientId: '8d55963f5c9d7f62835013864d576da1',
            clientSecret: '6f76871084592905b16ef81ab302dfa7427f72c7fb1432cb828f40a18c549cd2'
        }
    };
    try{
    const response=await axios(config);
    return res.send(response.data);
    }catch(err){
        console.log(err);
        return res.status(500).send('Error executing the code');
    }
};
module.exports={Compiler};
