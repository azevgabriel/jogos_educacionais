import { WordsKey } from "../components/LessonOneWrapper";
import { ReportProps } from "../interfaces/reports";

const saveAs = (blob: Blob, fileName: string) => {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

const convertToCsv = (reports: ReportProps[], animal: WordsKey)=> {
    const delimiter = ';'
    const breakLine = '\n'

    let allText: string = ''

    const animalStr = animal as string

    reports.forEach((report) => {
        const headerOne = [`Animal: ${animal}`, delimiter, `Letra: ${report.letter}`, delimiter, report.totalTime, breakLine]
        const headerTwo = [`Eixo X`, delimiter, `Eixo Y`, delimiter, 'Tempo', breakLine]
        const body = report.positions.map((position, index) => {
            return [
                String(position.x),
                delimiter, 
                String(position.y), 
                delimiter, 
                String(position.time), 
                breakLine
            ]
        })
        const bodyFlat = body.flat()
        const text = [...headerOne, ...headerTwo, ...bodyFlat].join('')
        allText += text
    })

    var blob = new Blob([allText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${animalStr}.csv`);
}

export { convertToCsv }