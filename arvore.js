
//       +
//      / \ 
//     /   \
//   'a'   '*'
//         /  \
//        /    \
//      'b'    '-'
//             /  \
//            /    \
//          '/'    'e'
//         /   \
//        /     \
//     'c'      'd'
//      
const readlineSync = require('readline-sync');

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(data = null){
        if (data){
            var node = new Node(data);
            this.root = node;
        }else{
            this.root = null;
        }  
    }

     inOrder(node=null){
        if (node == null){
            node = this.root;
            console.log('\nIn Order:');
        }
        if (node.left){
            process.stdout.write('(');
            this.inOrder(node.left);
        }
        process.stdout.write(`${node.data}`);
        if (node.right){
            this.inOrder(node.right);
            process.stdout.write(')');
        }
        
    }

    postOrder(node=null){
        if(node==null){
            node = this.root;
            console.log('\n\nPost Order:')
        }

        if(node.left){
            this.postOrder(node.left);
        }

        if(node.right){
            this.postOrder(node.right);
        }
        process.stdout.write(` _ ${node.data}`);
    } 

    height(node=null){
        if(node==null){
            node = this.root;
        }
        var hLeft = 0;
        var hRight = 0;

        if(node.left){
           hLeft = this.height(node.left);
        }

        if(node.right){
          hRight = this.height(node.right);
        }
        if (hLeft > hRight){
            hLeft +=1;
        }

        return hRight +=1 

        
    } 
}

function Start(){
    tree = new Tree();
    n1 = new Node('a');
    n2 = new Node('+');
    n3 = new Node('*');
    n4 = new Node('b');
    n5 = new Node('-');
    n6 = new Node('/');
    n7 = new Node('c');
    n8 = new Node('d');
    n9 = new Node('e');

    n6.left = n7;
    n6.right = n8;
    n5.left = n6;
    n5.right = n9;
    n3.left = n4;
    n3.right = n5;
    n2.left =  n1;
    n2.right =  n3;
    tree.root = n2;

    tree.inOrder();
    tree.postOrder();
    console.log("\nAltura:",tree.height());
}   

Start();