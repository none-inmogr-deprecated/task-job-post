import { ICandidateItem } from "../models";

export const CandidateList: ICandidateItem[] = [];

for (let count = 1; count < 10; count++) {
    CandidateList.push({
        id: count,
        jobId: 1,
        name: `Candidate Name ${count}`,
        email: `example${count}@email.com`,
        mobile: "0123456789",
    });
}
