interface Comparable2<T> { // interface é como um contrato
    compareTo(b:T):number;
}

class MyObject2 implements Comparable2<MyObject2> { // podemos passar como parâmetro o <tipo de argumento>
    compareTo(b: MyObject2): number {
        throw new Error("Method not implemented.");
    }
}