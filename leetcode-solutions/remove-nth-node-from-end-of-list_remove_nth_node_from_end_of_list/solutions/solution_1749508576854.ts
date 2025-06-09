        for(let i = 1; i < idx; ++i){
            before = newNext;
            newNext = before.next;
        }
        before.next = newNext;
        return head;
    }
        newNext = newNext.next;
};