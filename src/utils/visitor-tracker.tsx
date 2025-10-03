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
            const currentURL = window.location.href;
            const dataParsed = visitorDemographicParser(visitorData);
            const dataToSend = JSON.stringify({ ...dataParsed, visitorToken, currentURL,date: new Date().toTimeString().slice(0, 17) + " " + new Date().toDateString().slice(0, 17) });
            emailSenderHelper(oldTime, dataToSend, visitorToken);
            const newTime = new Date().toISOString().slice(0, 10).replace(/:/g, '-').replace(/\./g, '-');
            fetch(dbURL + `${newTime}/${visitorToken}.json`, {
                method: "PUT",
                headers: {
                    "Application": "application/json",
                    'Content-Type': 'application/json',
                },
                body: dataToSend
            })
                .then(res => res).catch(err => console.log(err));
        });
};


export const storeVisitorLocation = (visitorToken: string, location: string) => {
    const currentURL = window.location.href;
    const dataToSend = JSON.stringify({ location, currentURL, date: new Date().toTimeString().slice(0, 17) + " " + new Date().toDateString().slice(0, 17) });
    const oldTime = getVisitTime();
    emailSenderHelper(oldTime, dataToSend, visitorToken);
    const newTime = new Date().toISOString().slice(0, 10).replace(/:/g, '-').replace(/\./g, '-');
    fetch(dbURL + `${newTime}/${visitorToken}.json`, {
        method: "POST",
        headers: {
            "Application": "application/json",
            'Content-Type': 'application/json',
        },
        body: dataToSend
    })
        .then(res => res).catch(err => console.log(err));
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
    const mailer = new Mailer(oldTime, beautifyJSON(dataToSend), visitorToken);
    mailer.sendEmail();
};

const beautifyJSON = (jsonString: string) => {
    try {
        const jsonObj = JSON.parse(jsonString);
        return JSON.stringify(jsonObj, null, 2);
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return jsonString; // Return the original string if parsing fails
    }
};