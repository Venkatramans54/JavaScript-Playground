const posts=[
    {title:"Post 1", body:"This is Post One"},
    {title:"Post 2", body:"This is Post Two"},
    {title:"Post 3", body:"This is Post Three"},
    {title:"Post 4", body:"This is Post Four"}
];

//adds a fifth post after 3 seconds

function getPosts(){
    setTimeout(function(){
        let output="";
        posts.forEach((post)=>{
            output+=`<li>The Title is ${post.title}. Its body contains ${post.body}</li>`
        })
        document.getElementById("division").innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            posts.push(post);
            const err=false;
            if(err){
                reject("Error Occured during this Operation");
            }
            else{
                resolve();
            }
        },3000);
    });
}
function endOfProgram(){
    console.log("This is the End of Program")
}
getPosts();
createPost({title:"Post 5", body:"This is Post Five"})
    .then(getPosts)
    .then(endOfProgram)
    .catch(err=> console.log(err));


//Promise All

const promise1= Promise.resolve("hello");
const promie2= 10;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'goodbye');
});
const promise4=fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())

Promise.all([promise1,promie2,promise3,promise4]).then((result)=>{
    console.log(result);
});














