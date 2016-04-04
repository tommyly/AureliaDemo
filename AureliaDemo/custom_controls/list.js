import { inject } from 'aurelia-framework';
import { SurveyRetriever } from '../services/SurveyRetriever';

@inject(SurveyRetriever)
export class List {
    surveys = [];
    
    constructor(surveyRetriever) {

        this.surveyRetriever = surveyRetriever;

        this.surveyRetriever.getAll()
                            .then(surveys => { 
                                this.surveys = surveys; 
                            });
    }
}
