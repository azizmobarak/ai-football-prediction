import { Sequential } from "@tensorflow/tfjs";

export interface MatchData {
    date: string;
    home_team: string;
    away_team: string;
    home_score: number;
    away_score: number;
    tournament: string;
    city: string;
    country: string;
    neutral: boolean | string;
}


export interface Result {
    model: Sequential;
    dataLoaded: MatchData[];
}

export interface RequestResult {
    home_team: string;
    away_team: string;
}