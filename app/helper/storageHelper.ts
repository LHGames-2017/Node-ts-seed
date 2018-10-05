import * as fs from 'fs';

export class StorageHelper {
    private static documents: { [name: string]: string } = null;

    public static write(key: string, data: object) {
        this.init();
        this.documents[key] = JSON.stringify(data);
        this.store();
    }

    public static read(key: string): object {
        this.init();
        if (!this.documents[key]) {
            return null;
        }

        return JSON.parse(this.documents[key]);
    }

    private static init(): void {
        if (!this.documents) {
            try {
                const data = fs.readFileSync('/data/document.json');
                this.documents = JSON.parse(data.toString());
            } catch (e) {
                this.documents = {};
                console.log(e);
            }
        }
    }

    private static store(): void {
        try {
            fs.writeFileSync('/data/document.json', JSON.stringify(this.documents));
        } catch (e) {
            console.log(e);
        }
    }
}
