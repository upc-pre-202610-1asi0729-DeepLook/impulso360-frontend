import { HelpFaq } from '../domain/model/help-faq.entity';
import { HelpGuide } from '../domain/model/help-guide.entity';
import { TutorialStep } from '../domain/model/tutorial-step.entity';
import { HelpFaqResource } from './help-faq.resource';
import { HelpGuideResource } from './help-guide.resource';
import { TutorialStepResource } from './tutorial-step.resource';

export class HelpAssembler {
    static toFaqEntity(resource: HelpFaqResource): HelpFaq {
        return new HelpFaq(
            resource.id,
            resource.question,
            resource.answer
        );
    }

    static toFaqEntities(resources: HelpFaqResource[]): HelpFaq[] {
        return resources.map((resource) => this.toFaqEntity(resource));
    }

    static toGuideEntity(resource: HelpGuideResource): HelpGuide {
        return new HelpGuide(
            resource.id,
            resource.icon,
            resource.title,
            resource.description,
            resource.route
        );
    }

    static toGuideEntities(resources: HelpGuideResource[]): HelpGuide[] {
        return resources.map((resource) => this.toGuideEntity(resource));
    }

    static toTutorialStepEntity(resource: TutorialStepResource): TutorialStep {
        return new TutorialStep(
            resource.id,
            resource.number,
            resource.title,
            resource.description,
            resource.status,
            resource.route
        );
    }

    static toTutorialStepEntities(resources: TutorialStepResource[]): TutorialStep[] {
        return resources.map((resource) => this.toTutorialStepEntity(resource));
    }
}