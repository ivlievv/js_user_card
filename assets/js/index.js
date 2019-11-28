'use strict';

const users = [
    {
        id:  1,
        name: 'Dwayne',
        surname: 'Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at eius, eos est impedit quia quod rem! Accusamus ad adipisci aspernatur commodi, corporis cum cumque deleniti distinctio dolorem eligendi est eum fugit ipsa ipsum iusto magnam magni minima molestiae neque nisi nulla numquam officia omnis quisquam repellat repudiandae rerum tenetur unde voluptate voluptatibus? Cupiditate dolore exercitationem, magnam nobis nostrum officiis sapiente tenetur. Aspernatur commodi dolorem esse laudantium nesciunt nostrum nulla, quam voluptates. A amet aut consequuntur eligendi eos error et ex exercitationem fugit iusto, maxime minima molestiae mollitia nam nemo nesciunt non numquam odio officia omnis perspiciatis porro quaerat qui quia quis quisquam reiciendis soluta, unde ut veniam? Blanditiis, enim explicabo quam quia repellat ullam unde vel veritatis voluptates. Accusantium autem consectetur culpa delectus dolorum eos fuga minus quis soluta! Amet assumenda at autem beatae consequuntur deserunt distinctio, eligendi eum facilis impedit ipsum nostrum nulla officiis perferendis quibusdam ratione, repellat vero vitae, voluptas voluptatem? A asperiores ducimus illum mollitia nesciunt quibusdam, reprehenderit rerum similique. Est facilis nobis placeat! Aperiam autem blanditiis corporis cum dolor dolore expedita facilis fuga illum in iste labore maiores minima molestiae necessitatibus, obcaecati porro repellendus totam ullam veniam vero vitae voluptas voluptates? Adipisci aperiam distinctio explicabo!',
        profilePicture: 'https://pmcdeadline2.files.wordpress.com/2018/08/dwayne-johnson.jpg?w=681&h=383&crop=1',
        contacts: [
            'https://www.instagram.com/therock/',
            'https://ru-ru.facebook.com/DwayneJohnson',
            'https://www.skype.com/ru/get-skype/',
            'https://twitter.com/therock',
        ],
    },
    {
        id: 2,
        name: 'John',
        surname: 'Cena',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at eius, eos est impedit quia quod rem! Accusamus ad adipisci aspernatur commodi, corporis cum cumque deleniti distinctio dolorem eligendi est eum fugit ipsa ipsum iusto magnam magni minima molestiae neque nisi nulla numquam officia omnis quisquam repellat repudiandae rerum tenetur unde voluptate voluptatibus? Cupiditate dolore exercitationem, magnam nobis nostrum officiis sapiente tenetur. Aspernatur commodi dolorem esse laudantium nesciunt nostrum nulla, quam voluptates. A amet aut consequuntur eligendi eos error et ex exercitationem fugit iusto, maxime minima molestiae mollitia nam nemo nesciunt non numquam odio officia omnis perspiciatis porro quaerat qui quia quis quisquam reiciendis soluta, unde ut veniam? Blanditiis, enim explicabo quam quia repellat ullam unde vel veritatis voluptates. Accusantium autem consectetur culpa delectus dolorum eos fuga minus quis soluta! Amet assumenda at autem beatae consequuntur deserunt distinctio, eligendi eum facilis impedit ipsum nostrum nulla officiis perferendis quibusdam ratione, repellat vero vitae, voluptas voluptatem? A asperiores ducimus illum mollitia nesciunt quibusdam, reprehenderit rerum similique. Est facilis nobis placeat! Aperiam autem blanditiis corporis cum dolor dolore expedita facilis fuga illum in iste labore maiores minima molestiae necessitatibus, obcaecati porro repellendus totam ullam veniam vero vitae voluptas voluptates? Adipisci aperiam distinctio explicabo!',
        profilePicture: 'https://articlebio.com/uploads/bio/2018/01/16/john-cena.jpg',
        contacts: [
            'https://www.instagram.com/johncena/?hl=ru',
            'https://uk-ua.facebook.com/johncena',
            'https://www.skype.com/ru/get-skype/',
            'https://twitter.com/johncena',
        ],
    },
];



function createUserListItem(user) {
    const userListItemElem = document.createElement('li');
    userListItemElem.appendChild( createUserCardItem(user));

    return userListItemElem;
}

function createUserCardItem(user) {
    const userCardElem = document.createElement('li');
    userCardElem.classList.add('userCardWrapper', 'flexContainer', 'flexDirectionColumn', 'alignItemCenter',);
    userCardElem.appendChild(createUserPictureContainerElem(user));
    userCardElem.appendChild(createUserfullNameElem(user));
    userCardElem.appendChild(createUserDescriptionElem(user));
    userCardElem.appendChild(createUserContactsElem(user));
    userCardElem.appendChild(createUserListItemRemoveButton(user));

    return userCardElem;
}
function createUserPictureContainerElem(user) {
    const userPictureContainerElem = document.createElement('div');
    userPictureElem.classList.add('userPictureContainer');

    return userListItemElem;
}

function createUserPictureElem({profilePicture}) {
    const userPictureElem = document.createElement('img');
    userPictureElem.setAttribute('src', profilePicture? profilePicture: '../img/icons/610qnH4W4LL.jpg')

}
function createUserfullNameElem(user) {
    const userListItemElem = document.createElement('li');


    return userListItemElem;
}
function createUserDescriptionElem(user) {
    const userListItemElem = document.createElement('li');


    return userListItemElem;
}
function createUserContactsElem(user) {
    const userListItemElem = document.createElement('li');


    return userListItemElem;
}
function createUserListItemRemoveButton(user) {
    const userListItemElem = document.createElement('li');


    return userListItemElem;
}