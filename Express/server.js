const express=require("express")
const expressGraphQL=require("express-graphql").graphqlHTTP

 const app=express();

 app.use("/graphql", expressGraphQL({
    graphiql:true // use to make query against over develpoment server;
 }))
 app.listen(4000, ()=>{
    console.log("Listening")
 })