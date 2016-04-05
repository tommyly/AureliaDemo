import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SurveyCount {
    
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.surveyCount = 0;

        this.eventAggregator.subscribe('surveyCreated', survey => {
            this.surveyCount++;
        });
    }
}
