const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (!this.length){
            this._head = node;
            this._tail = node;
            this._head.next = node;
            this._tail.prev = node;
        }
        else {
            node.prev = this._tail;
            this._tail = node;
            node.prev.next = node;
        }
        this.length ++;
       return this;
    }

    head() {
        return (this.length) ? this._head.data : null;
    }

    tail() {
        return (this.length) ? this._tail.data : null;
    }

    at(index) {
        let tmp = this._head;
        for (let i=0; i!=index; i++){
            tmp = tmp.next;
        }
        return tmp.data;
    }

    insertAt(index, data) {
        if (index === this.length)
            this.append(data);
        else {
            let tmp = this._head;
            const node = new Node(data);
            for (let i=0; i!=index; i++){
                tmp = tmp.next;
            }
            tmp.prev.next = node;
            node.prev = tmp.prev;
            node.next = tmp;
            tmp.prev = node;
        }
        return this;
    }

    isEmpty() {
        if (!this.length) return true;
        else return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let tmp = this._head;
        for (let i=0; i!=index; i++){
            tmp = tmp.next;
        }
        tmp.data = null;
        tmp.prev.next = tmp.next;
        tmp.next.prev = tmp.prev;
        tmp.next = null;
        tmp.prev = null;
        return this;
    }

    reverse() {
        let tmp  = this._head;

        for (let i=0; i<this.length; i++){
            let temp = tmp.next;
            tmp.next = tmp.prev;
            tmp.prev = temp;
            tmp = tmp.prev;
        }
        tmp = this._tail;
        this._tail = this._head;
        this._head = tmp;

        return this;
    }

    indexOf(data) {
        let tmp = this._head;
        let index;
        let flag = false;
        for (let i=0; i<this.length; i++) {
            if(tmp.data===data){
                index = i;
                flag = true;
                break;
            }
            else {
                tmp = tmp.next;
            }
        }
        if (flag){
            return index;
        }
        else return -1;
    }
}

module.exports = LinkedList;