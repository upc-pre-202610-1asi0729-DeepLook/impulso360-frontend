export class HelpGuide {
    constructor(
        public readonly id: number,
        public readonly icon: string,
        public readonly title: string,
        public readonly description: string,
        public readonly route?: string
    ) {}
}