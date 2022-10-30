/*
  Definition of the abstract type of data structure : Stack
*/

export const nil = {};

//Creates a stack

export function StackCons(head, tail){
    return { head: head, tail: tail };
}

//Test if a stack is empty

export function StackisEmpty(s){
    return (s===nil);
}

//Returns the head of the stack if not empty

export function StackHead(s){
    if(StackisEmpty(s)){
        alert("The stack is empty");
    }
    return s['head'];
}

//Returns the tail of the stack if not empty

export function StackTail(s){
    if(StackisEmpty((s))){
        alert("The stack is empty");
    }
    return s['tail'];
}

//Stacks "element" in "stack"

export function StackElement(stack, element){
    return StackCons(element, stack);
}

//Unstacks the head of the stacks then returns it if not empty

export function UnstackElement(stack){
    if(StackisEmpty(stack)){
        alert("The stack is empty");
    }
    return StackTail(stack);
}

export function listDisp(l){
    function listDispRec(l){
        if (StackisEmpty(l)){
            return "";
        }
        else if (StackisEmpty(StackTail(l))){
            return `(${StackHead(l)})`;
        }
            else {
                return `(${listDispRec(StackTail(l))}),(${StackHead(l)})`;
        }
    }
    return `[${listDispRec(l)}]`;
}

export function displayStack(stack){
    console.log("Beginnig of stack\n");
    while(!(StackisEmpty(stack))){
        console.log(StackHead(stack));
        console.log("\n");

    }
    console.log("End of stack\n");

}
