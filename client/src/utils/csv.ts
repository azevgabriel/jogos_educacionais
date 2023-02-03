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

    const header = ['Animal', delimiter, 'Letra', delimiter, 'x', delimiter, 'y', delimiter, 'Tempo', breakLine]
    const body: string[] = []

    const animalStr = animal as string

    console.log(animalStr);
    console.log(reports);

    reports.forEach((report) => {
        report.positions.forEach((position, index) => {
            const line = [
                animalStr, 
                delimiter, 
                report.letter,
                delimiter, 
                String(position.x),
                delimiter, 
                String(position.y), 
                delimiter, 
                String(report.time), 
                breakLine
            ]
            body.push(line.join(''))
        })
    })

    const text = [...header, ...body].join('')
    console.log(text, body)

    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dados.csv");
}

export { convertToCsv }