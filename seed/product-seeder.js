const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

const products = [
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eb1248f153f1fe243de6e216303be95&auto=format&fit=crop&w=750&q=80',
        title: 'product1',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eb1248f153f1fe243de6e216303be95&auto=format&fit=crop&w=750&q=80',
        title: 'product2',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eb1248f153f1fe243de6e216303be95&auto=format&fit=crop&w=750&q=80',
        title: 'product3',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e4bd9adcc099aae35262514583fbbf7&auto=format&fit=crop&w=750&q=80',
        title: 'product4',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e4bd9adcc099aae35262514583fbbf7&auto=format&fit=crop&w=750&q=80',
        title: 'product5',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e4bd9adcc099aae35262514583fbbf7&auto=format&fit=crop&w=750&q=80',
        title: 'product6',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93c6352ff24d8874f5c6d82ce29cb39d&auto=format&fit=crop&w=750&q=80',
        title: 'product7',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93c6352ff24d8874f5c6d82ce29cb39d&auto=format&fit=crop&w=750&q=80',
        title: 'product8',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93c6352ff24d8874f5c6d82ce29cb39d&auto=format&fit=crop&w=750&q=80',
        title: 'product9',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1538605847029-d191c340aaf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19dfbb58121d20f03782b2d1484650ac&auto=format&fit=crop&w=750&q=80',
        title: 'product10',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1538605847029-d191c340aaf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19dfbb58121d20f03782b2d1484650ac&auto=format&fit=crop&w=750&q=80',
        title: 'product11',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    new Product({
        imageUrl: 'https://images.unsplash.com/photo-1538605847029-d191c340aaf7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19dfbb58121d20f03782b2d1484650ac&auto=format&fit=crop&w=750&q=80',
        title: 'product12',
        description: 'Praesent finibus dictum orci a convallis. Etiam sed molestie nisl. Aenean fringilla dolor interdum sem iaculis fringilla. Nunc venenatis ante et odio porta, nec aliquam purus posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas feugiat sodales mollis. Donec nec massa tortor. Sed non eros in tellus vulputate elementum nec ut ipsum. Praesent cursus quam quam, id sollicitudin nunc imperdiet nec. Integer dignissim neque ut luctus consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit leo sit amet risus vulputate, et mattis mauris vehicula. Sed consectetur condimentum urna id convallis. Praesent suscipit tellus ac justo pulvinar, vel cursus dolor ultrices. Proin pulvinar lacus et mi vulputate suscipit.',
        price: 10
    }),
    
];

for (var i = 0; i < products.length; i++) {
    products[i].save();
}

mongoose.disconnect();