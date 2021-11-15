export default function readCode(code: string) {
    const codeToCompile = code.split('')

    const allowedSymbols = ['>', '<', '+', '-', '.', ',', '[', ']']

    let cells: number[] = [0]
    let currentCell = 0

    let output = ''

    for(let i = 0; i <= codeToCompile.length - 1; i++) {
        if(!allowedSymbols.includes(codeToCompile[i])) break

        switch(codeToCompile[i]) {
            case ">":
                currentCell++
                if(!cells[currentCell]) cells.push(0)
                console.log(currentCell)
                break
            case "<":
                currentCell--
                if(currentCell < 0) { reset(); return 'Error: You can\'t go back with "<" before the first cell.' }
                console.log(currentCell)
                break
            case "+":
                cells[currentCell]++
                if(cells[currentCell] > 255) { reset(); return 'Cells can\'t have a value higher value than 255' }
                break
            case "-":
                cells[currentCell]--
                if(cells[currentCell] < 0) { reset(); return 'Cells can\'t have a value lower value than 0' }
                break
            case ".":
                output = output + String.fromCharCode(cells[currentCell])
        }
    }

    function reset() {
        currentCell = 0
        cells = [0]
    }

    console.log(cells)
    return output
}