const readlineSync = require('readline-sync');
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

class arvoreBinariaBusca extends Tree{
    constructor(data = null){
        super(data);
        if(data){
            var node = new Node(data);
            this.root = node;
        }else{
            this.root = null;
        }
    }

     insert(value){
         var parent = null;
         var x = this.root;
         while(x){
             parent = x;
             if(value < x.data){
                  x = x.left;  
             }else{
                 x = x.right;
             }
         }
         if(parent == null){
             this.root = new Node(value);
         }else if (value < parent.data){
             parent.left = new Node(value);
         }else{
             parent.right = new Node(value);
         }

    }

    InOrder(node=null){
        if (node == null){
            node = this.root;
            console.log('\nIn order:');
        }
        if (node.left){
            this.InOrder(node.left);
        }
        process.stdout.write(`${node.data},`);
        if (node.right){
            this.InOrder(node.right);
        }
        
    }

    search(value){
        return this._search(value,this.root);
    }

    _search(value,node){
        if(node == null){
            return node;
        }
        if (node.data == value) {
            return new arvoreBinariaBusca(node);
        }
        if(value < node.data){
            return this._search(value,node.left);
        }
        return this._search(value,node.right);
    }
}


function Start(){
    //tree = new Tree();
    //n1 = new Node('a');
    //n2 = new Node('+');
    //n3 = new Node('*');
    //n4 = new Node('b');
    //n5 = new Node('-');
   // n6 = new Node('/');
    //n7 = new Node('c');
    //n8 = new Node('d');
    //n9 = new Node('e');

    //n6.left = n7;
   // n6.right = n8;
    //n5.left = n6;
    //n5.right = n9;
    //n3.left = n4;
    //n3.right = n5;
   // n2.left =  n1;
   // n2.right =  n3;
    //tree.root = n2;

    //tree.inOrder();
    //tree.postOrder();
    //console.log("\nAltura:",tree.height());

    bst = new arvoreBinariaBusca();
    var values = [10,40,2,30,90,82,200,110,14,24,23,55,320,41,78,73]
    for (var v of values){
    bst.insert(v);
}
bst.InOrder();
   
console.log('\n');
var itens = [10,666,200,99]
for (item of itens){
    r = bst.search(item);
    if (r == null){
        console.log(item, 'não encontrado');
    }else{
        console.log(r.root.data.data, "encontrado!")
    }
}
}

Start();

