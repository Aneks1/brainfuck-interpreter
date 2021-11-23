export default function readCode(code: string): string {
    const allowedSymbols = ['>', '<', '+', '-', '.', ',', '[', ']']

    let cells: number[] = [0]
    let currentCell = 0

    const loops: number[] = []
    let innerLoops = 0

    let isLooping = false

    let output = ''

    for(let i = 0; i <= code.length - 1; i++) {

        if(isLooping) {
            if (code[i] == "[") innerLoops++
            if (code[i] == "]") {
                if (innerLoops == 0) isLooping = false;
                else innerLoops--;
            }
        }

        if(!allowedSymbols.includes(code[i])) break

        switch(code[i]) {
            case ">":
                currentCell++
                if(!cells[currentCell]) cells.push(0)
                break
            case "<":
                currentCell--
                if(currentCell < 0) { reset(); return 'Error: You can\'t go back with "<" before the first cell.' }
                break
            case "+":
                cells[currentCell]++
                if(cells[currentCell] > 255) { reset(); return 'Cells can\'t have a value higher value than 255' }
                break
            case "-":
                cells[currentCell]--
                break
            case ".":
                output = output + String.fromCharCode(cells[currentCell])
                break
            case ",":
                cells[currentCell] = prompt()!.charCodeAt(1);
                break;
            case "[":
                if(cells[currentCell] == 0) {
                    isLooping = true
                } else {
                    loops.push(i);
                }
                break
            case "]":
                if(cells[currentCell] != 0) {
                    i = loops[loops.length - 1]
                } else {
                    loops.pop()
                }
        }
    }

    function reset() {
        currentCell = 0
        cells = [0]
    }

    return output
}