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

function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000);
}
getPosts();
createPost({title:"Post 5", body:"This is Post Five"},getPosts)