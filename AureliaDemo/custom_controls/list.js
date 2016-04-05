import { inject } from 'aurelia-framework';
import { SurveyRetriever } from '../services/SurveyRetriever';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(SurveyRetriever, EventAggregator)
export class List {
    surveys = [];
    
    constructor(surveyRetriever, eventAggregator) {
        this.surveyRetriever = surveyRetriever;
        this.eventAggregator = eventAggregator;

        this.surveyRetriever.getAll()
                            .then(surveys => { 
                                this.surveys = surveys; 
                            });

        this.eventAggregator.subscribe('surveyCreated', survey => {
            this.surveys.push(survey);
        });
    }
}
