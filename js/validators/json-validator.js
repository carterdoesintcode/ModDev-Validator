class JSONValidator {
    constructor(json) {
        this.json = json;
    }

    validate() {
        try {
            JSON.parse(this.json);
            return true;
        } catch (e) {
            return this.handleError(e);
        }
    }

    handleError(error) {
        const errorMessage = error.message;
        const errorPosition = error.message.match(/at position (\d+)/);
        const lineNumber = this.getLineNumber(errorPosition ? parseInt(errorPosition[1]) : -1);
        return `Error: ${errorMessage} at line ${lineNumber}`;
    }

    getLineNumber(errorIndex) {
        const lines = this.json.split('\n');
        let totalChars = 0;

        for (let i = 0; i < lines.length; i++) {
            totalChars += lines[i].length + 1; // +1 for the newline character
            if (totalChars > errorIndex) {
                return i + 1; // +1 for 0-based index
            }
        }
        return -1;
    }

    prettyPrint() {
        try {
            const jsonObject = JSON.parse(this.json);
            return JSON.stringify(jsonObject, null, 4);
        } catch (e) {
            return this.handleError(e);
        }
    }
}

module.exports = JSONValidator;
