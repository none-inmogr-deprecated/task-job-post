export interface IJobItem {
    id: number;
    title: string;
    companyName: string;
    companyLogo: string;
    location: string;
    shortDesc: string;
    fullDesc: string;
    applied?: boolean;
}
