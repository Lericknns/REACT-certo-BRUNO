import {con} from './connection.js'


export  async  function  login (email,senha){
    console.log(email);
    console.log(senha);
    const comando =  
    `select id_usuario 		id,
           nm_usuario		    nome,
           ds_email			email
      from tb_usuario
     where ds_email 		    = ?
       and ds_senha			= ? `

       const [linhas] =  await con.query(comando, [email,senha])
       console.log(linhas)
       return linhas[0];
       


}