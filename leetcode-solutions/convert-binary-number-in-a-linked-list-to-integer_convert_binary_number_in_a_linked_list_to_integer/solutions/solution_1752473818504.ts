 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
    const val = [];
    if(!head) return 0;
    let walker = head;
    while(walker){
        val.push(walker.val);
    };
    let out = 0;
    for(let i = 0; i < val.length; ++i){
        if(val[i]) out += Math.pow(2, val.length-i-1);
    }
    return out;
        walker = walker.next;