const readlineSync = require('readline-sync');

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(data){
        var node = new Node(data);
        this.root = node;
    }
}

function Start(){
    var raiz = readlineSync.question('Defina o valor da raiz:');
    var left = readlineSync.question('Defina o valor da  direita:');
    var right = readlineSync.question('Defina o valor da  folha esquerd:');
    tree = new Tree(raiz);
    tree.root.left = new Node(left);
    tree.root.right = new Node(right);
    console.log(tree.root);
}

Start();