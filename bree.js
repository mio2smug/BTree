class Node{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    };
};

class BinarySearchTree{
    constructor(){
      this.root = null      
    };

    isEmpty(){
        return this.root === null
    };

    insert(data){
        const newNode = new Node(data)
        if (this.isEmpty() === true){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
        
    };

    insertNode(root, newNode){
         if (newNode.data < root.data){
             if(root.left === null){
                 root.left = newNode
             }else{
                 this.insertNode(root.left, newNode)
             }
         }
            else{
             if  (root.right === null){
                 root.right = newNode
             } else{
                 this.insertNode(root.right, newNode)
             } 
         }   
    };

    search(root, value){
        if(!root){
            return false
        }
        else{
            if (root.data === value){
                return true
            }
            if (root.data > value){
                return this.search(root.left, value)
            }
            else{
                return this.search(root.right, value)
            }
        }
    };


    ////DFS TRAVERSAL
    
    preorder(root){
        if (root){
            console.log(root.data)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    };

    inorder(root){
        if (root){
            this.inorder(root.left)    //visit left subtree
            console.log(root.data)     //log data
            this.inorder(root.right)    //visit right subtree
        }
    };

    postorder(root){
        if (root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.data)
            
        }
    };


    ////     BFS  Traversal

    levelOrder(){
        const queue = [] //Optimized queue is ideal 
        queue.push(this.root)
        while (queue.length){
            let curr = queue.shift()
            console.log(curr.data)
            if (curr.left){
                queue.push(curr.left)   
            }
            if (curr.right){
                queue.push(curr.right)
            }
        }
    };

    min(root){
        if (!root.left){
            return root.data
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if (!root.right){
            return root.data
        } else{
            return this.max(root.right)
        }
    };

    deleteNode(root, value){
         if (root === null ){
             return root
         }else if (value < root.data){
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.data){
            root.right = this.deleteNode(root.right, value)
        } else{
            if (!root.left && !root.right){
                return null
            }
            if(!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;  
    };
}; 

const bst = new BinarySearchTree();  //create new tree
console.log("Is BST empty?", bst.isEmpty())  //is tree empty   //Working
bst.insert(10)
bst.insert(5)  
bst.insert(15)   ///Working
bst.insert(3)
// bst.insert(7)
// console.log(bst.search(bst.root, 5))
// console.log(bst.search(bst.root, 10))   //working
// console.log(bst.search(bst.root, 14))  //working
// bst.preorder(bst.root)   //working
// bst.inorder(bst.root)   //working
// bst.postorder(bst.root)   //working
// bst.levelOrder();
// console.log(bst.min(bst.root), bst.max(bst.root))
bst.levelOrder();
bst.deleteNode(bst.root, 3)
bst.levelOrder();
