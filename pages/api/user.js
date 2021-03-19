import * as uuid from 'uuid';
import dynamoDB from "../../lib/api/dbConfig";
import {
    insertDataintoDatabase,
    fetchDatafromDatabase1,
    fetchDatafromDatabase3,
    fetchDatafromDatabase2,
    updateDatafromDatabase,
    deleteDatafromDatabase
}   from "../../lib/api/db";

import HttpError from "../../lib/error";
const User_Table = process.env.USER_TABLE;
console.log(User_Table);
export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const item = {
      user_id: uuid.v4(),
      user_name:req.body.user_name,
      createdAt: Date.now()
    };
   
   
     var result =  await insertDataintoDatabase(User_Table,item);  
   
    console.log(result);

   return res.status(201).json(item);
  }

  if (req.method === 'GET') {
    // const { Item } = await dynamoDb.get({
    //   Key: {
    //     id: req.query.id
    //   }
    // });

    var params = {
        TableName:User_Table
    };

    var result  = await fetchDatafromDatabase1(params);
    console.log(result);

    return res.status(200).json(result);
  }

  if (req.method === 'POST') {
    // const { Attributes } = await dynamoDb.update({
    //   Key: {
        // id: req.body.id
    //   },
    //   UpdateExpression: 'SET content = :content',
    //   ExpressionAttributeValues: {
    //     ':content': req.body.content || null
    //   },
    //   ReturnValues: 'ALL_NEW'
    // });
    
    var params = {
        TableName:User_Table,
        Key:{
            user_id: req.body.id
        },
        UpdateExpression: "set "+req.body.fieldName+" = :r",
        ExpressionAttributeValues:{
            ":r": req.body.fieldValue
        },
        ReturnValues:"UPDATED_NEW"
    };

    var result = await updateDatafromDatabase(params);

   return  res.status(200).json(result);
  }

  if (req.method === 'DELETE') {

     var params = {
        TableName:User_Table,
        Key: {
            user_id: req.body.id
        },
      
    };

    // await dynamoDb.delete({
    //   Key: {
    //     id: req.query.id
    //   }
    // });
   
    var result = await deleteDatafromDatabase(params);
    res.status(204).json({message:"Item Deleted Sucessfully"});
  }
}