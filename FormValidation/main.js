let createPost = document.forms.createPost;
let submitPost = document.getElementById('submitPost');

class Post {
    constructor(title, content, author, category) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.category = category;
    }
}

posts = {}

submitPost.addEventListener('click', function(e) {
    e.preventDefault();
    let title = createPost.title.value;
    let content = createPost.content.value;
    let author = createPost.author.value;
    let category = createPost.category.value;
    let post = new Post(title, content, author, category);
    console.log(post);
    if (validatePost(post)) {
        console.log('Post is valid');
        posts[post.title] = post;
    }
});

function popError(message) {
    alert('Please fill out all fields correctly '+ message);
}

function validatePost(post) {
    if (post.title.length < 5) {
        popError("Title must be at least 5 characters long");
        return false;
    }
    if (post.content.length < 10) {
        popError("Content must be at least 10 characters long");
        return false;
    }
    if (post.author.length < 5) {
        popError("Author must be at least 5 characters long");
        return false;
    }
    if (post.category.length < 5) {
        popError("Category must be at least 5 characters long");
        return false;
    }
    return true;
}