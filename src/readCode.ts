export default function readCode(code: string): string {
    const symbols = ['>', '<', '+', '-', '.', ',', '[', ']']

    const pointers: number[] = []
    for(let i = 0; i<(2**15); i++) pointers.push(0)
    let currentPointer = 0

    const loops: number[] = []
    let jumping = false
    let jumpedLoops = 0

    let input = ''
    let output = ''

    for(let i = 0; i <= code.length - 1; i++) {
        if(!symbols.includes(code[i])) continue
        else switch(code[i]) {
            case ">":
                if(jumping) break
                currentPointer++ // Moves to the next pointer
                if(currentPointer >= pointers.length) currentPointer = pointers.length - currentPointer
                break
            case "<":
                if(jumping) break
                currentPointer-- // Moves to the previous pointer
                if(currentPointer < 0) currentPointer = pointers.length + currentPointer
                break
            case "+":
                if(jumping) break
                pointers[currentPointer]++ // Increments the byte at the pointer
                break
            case "-":
                if(jumping) break
                pointers[currentPointer]-- // Decrements the byte at the pointer
                break
            case ".":
                if(jumping) break
                output = output + String.fromCharCode(pointers[currentPointer]) // Gets the char of the code at the pointer
                break
            case ",": 
                if(jumping) break
                input = prompt("Write a character to be stored: ") as string // Asks for input
                pointers[currentPointer] = input.charCodeAt(0) // Saves its charCode as the current pointer
                break;
            case "[":
                if(jumping) {
                    jumpedLoops++
                    break
                }
                if(pointers[currentPointer] == 0) jumping = true // If the value at the pointer is 0, jump to the matching ]
                else loops.push(i) // If it is not 0, enter the loop
                break
            case "]":
                if(jumping) {
                    if(jumpedLoops == 0) jumping = false
                    else jumpedLoops--
                    break
                }
                if(pointers[currentPointer] != 0) i = loops[loops.length - 1] // If the pointer isn't 0, return to the beginning of the loop (stored as the last object in the array)
                else loops.pop() // If it is 0, get out of the loop
        }
    }
    return output
}