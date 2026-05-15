export type TutorialStepStatus = 'completed' | 'in-progress' | 'pending';

export class TutorialStep {
    constructor(
        public readonly id: number,
        public readonly number: number,
        public readonly title: string,
        public readonly description: string,
        public readonly status: TutorialStepStatus,
        public readonly route?: string
    ) {}
}