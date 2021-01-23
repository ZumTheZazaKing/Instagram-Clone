let postSystemHeart = document.getElementById('systemHeart');

let AmountOfLike = document.getElementById('likesAmount');

let save = document.getElementById('systemSave');


/*Liking the post*/

function likePost(){

    postSystemHeart.src = 'Images/red\ heart.jpg';

    postSystemHeart.removeEventListener('click', likePost);

    postSystemHeart.addEventListener('click', dislikePost);

    AmountOfLike.innerHTML = '1,000,001 likes';

}

function dislikePost(){

    postSystemHeart.src = 'Images/heart.jpg';

    postSystemHeart.removeEventListener('click', dislikePost);

    postSystemHeart.addEventListener('click', likePost);

    AmountOfLike.innerHTML = '1,000,000 likes';

}



/*Saving the post*/

function savePost(){

    save.src = 'Images/black\ save.png';

    save.removeEventListener('click', savePost);

    save.addEventListener('click', unsavePost);

}

function unsavePost(){

    save.src = 'Images/save icon.png';

    save.removeEventListener('click', unsavePost);

    save.addEventListener('click', savePost);

}