import Mailer from './Mailer';
import { getVisitTime } from '../visitor-cookies/visitor-cookies';
const trackerURL = 'https://www.cloudflare.com/cdn-cgi/trace';
const dbURL = 'https://my-gh-page-default-rtdb.europe-west1.firebasedatabase.app/';
interface DemographicEntry { [key: string]: string }

export const storeVisitorDemographics = (visitorToken: string) => {
    const oldTime = getVisitTime();
    fetch(trackerURL)
        .then(res => res.text())
        .then((visitorData: string) => {
            const dataParsed = visitorDemographicParser(visitorData);
            const dataToSend = JSON.stringify({ ...dataParsed, date: new Date().toTimeString().slice(0, 17) + " " + new Date().toDateString().slice(0, 17) });
            emailSenderHelper(oldTime, dataToSend, visitorToken);
            fetch(dbURL + `${visitorToken}.json`, {
                method: "POST",
                headers: {
                    "Application": "application/json",
                    'Content-Type': 'application/json',
                },
                body: dataToSend
            })
                .then(res => res);
        });
};


export const storeVisitorLocation = (visitorToken: string, location: string) => {
    const dataToSend = JSON.stringify({ location, date: new Date().toTimeString().slice(0, 17) + " " + new Date().toDateString().slice(0, 17) });
    const oldTime = getVisitTime();
    emailSenderHelper(oldTime, dataToSend, visitorToken);
    fetch(dbURL + `${visitorToken}.json`, {
        method: "POST",
        headers: {
            "Application": "application/json",
            'Content-Type': 'application/json',
        },
        body: dataToSend
    })
        .then(res => res);
};

const visitorDemographicParser = (dems: string) => {
    const entriesArray = dems.split("\n");
    const results: DemographicEntry = {};
    for (let entry of entriesArray) {
        const keyValueArray = entry.split("=");
        const key = keyValueArray[0];
        const value = keyValueArray[1];
        results[key] = value;
    }
    return results;
};

const emailSenderHelper = (oldTime: string | null, dataToSend: string, visitorToken: string) => {
    const mailer = new Mailer(oldTime, dataToSend, visitorToken);
    mailer.sendEmail();
};