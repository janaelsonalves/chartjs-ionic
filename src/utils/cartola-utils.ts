export class CartolaUtils {
   
    static getArrayFrom(bject) {
        let array = [];
        for (const key in bject) {
            if (bject.hasOwnProperty(key)) {
                array.push(bject[key]);
            }
        }
        return array;
    }
}