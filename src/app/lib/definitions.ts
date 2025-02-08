export interface PlanCardProps {
    planName: string;
    planType: string;
    planPrice: string;
    planBackground: string;
    planFeatures: Array<string>;
}


export interface MovieMapped {
    title: string;
    year: string;
    imdbID: string;
    type: string;
    poster?: string;
}

export interface MovieNonMapped {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster?: string;
}