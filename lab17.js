
    class calculation{
    #calculationLine
        constructor(calculationLine) {
        this.#calculationLine = calculationLine;
 }
    setterCalculationLine(calculationLine){
        this.#calculationLine = calculationLine;
}
    setLastSymbolCalculationLine(symbol){
    this.#calculationLine = this.#calculationLine+symbol
    console.log(this.#calculationLine);
}
    lastSymbol(){
        this.#calculationLine.slice(this.#calculationLine.length - 1);
        console.log(this.#calculationLine.slice(this.#calculationLine.length - 1));
    }
    deleteLastSymbol(){
        this.#calculationLine = this.#calculationLine.slice(0, -1);
        console.log(this.#calculationLine);
    }
    gettercalCulationLine(){
        return this.#calculationLine;

    }

}
let calculation1 = new calculation('Ahuet');
calculation1.setLastSymbolCalculationLine('AnalKerovaPopuschen');
calculation1.lastSymbol();
calculation1.deleteLastSymbol();