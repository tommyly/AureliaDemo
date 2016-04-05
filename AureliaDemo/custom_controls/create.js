import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Create {

    constructor (eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.surveyName = '';
    }

    addSurvey() {

        var survey = { 
            name: this.surveyName, 
            recipients: 0
        };

        this.eventAggregator.publish('surveyCreated', survey);
        this.surveyName = '';
    }
}