document.addEventListener('DOMContentLoaded', function () {
    const createPostButton = document.getElementById('createPost');
    const addImageButton = document.getElementById('addImage');
    const postList = document.getElementById('postList');
    const openTodoPopupButton = document.getElementById('openTodoPopup');
    const todoPopup = document.getElementById('todoPopup');
    const closeTodoPopupButton = document.getElementById('closeTodoPopup');

    // Sample data for initial blog posts
    const initialPosts = [
        {
            title: 'WPM LAB',
            content: 'WPM Lab Internal',
            image: 'https://anurag.edu.in/wp-content/uploads/2020/02/logo-1.png'
        },
        { title: 'Second Post', content: 'Another post with some content.', image: null }
    ];

    // Function to display blog posts
    function displayPosts() {
        postList.innerHTML = ''; // Clear the existing posts

        initialPosts.forEach((post, index) => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            
            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;
            
            const postContent = document.createElement('p');
            postContent.textContent = post.content;

            // Display the uploaded image if available
            if (post.image) {
                const postImage = document.createElement('img');
                postImage.src = post.image;
                postDiv.appendChild(postImage);
            }
            
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editPost(index));

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postContent);
            postDiv.appendChild(editButton);

            postList.appendChild(postDiv);
        });
    }

    function createPost() {
        const title = prompt('Enter the post title:');
        const content = prompt('Enter the post content:');
        const image = prompt('Enter the URL of the image (optional):');

        if (title && content) {
            const newPost = { title, content, image };
            initialPosts.push(newPost);
            displayPosts(); 
        }
    }

    function editPost(index) {
        const post = initialPosts[index];

        const newTitle = prompt('Edit the post title:', post.title);
        const newContent = prompt('Edit the post content:', post.content);
        const newImage = prompt('Edit the URL of the image:', post.image);

        if (newTitle !== null && newContent !== null) {
            post.title = newTitle;
            post.content = newContent;
            post.image = newImage;
            displayPosts(); 
        }
    }

    function openTodoPopup() {
        todoPopup.style.display = 'block';
    }

    function closeTodoPopup() {
        todoPopup.style.display = 'none';
    }

    createPostButton.addEventListener('click', createPost);
    addImageButton.addEventListener('click', createPost);
    openTodoPopupButton.addEventListener('click', openTodoPopup);
    closeTodoPopupButton.addEventListener('click', closeTodoPopup);

    displayPosts();
});
