export type TutorialStepStatusResource = 'completed' | 'in-progress' | 'pending';

export interface TutorialStepResource {
    id: number;
    number: number;
    title: string;
    description: string;
    status: TutorialStepStatusResource;
    route?: string;
}