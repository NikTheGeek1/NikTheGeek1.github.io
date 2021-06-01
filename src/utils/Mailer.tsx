import emailjs, { init } from 'emailjs-com';

const mailerUserID: string = "user_gLqOarVJxNZUu3inoikJg";
init(mailerUserID);

class Mailer {
    private oldTime: string | null;
    private timeOffset: number = 600000; // 10 minutes
    private dataToSend: string;
    private visitorToken: string;
    private mailerUserID: string = mailerUserID;
    private mailerAccessToken: string = "fe82af662cae294ec7f2a6e552ba451a";
    private mailerServiceID: string = "service_5qy5wpa";
    private mailerTemplateID: string = "template_hznu29r";

    constructor(oldTime: string | null, dataToSend: string, visitorToken: string) {
        this.oldTime = oldTime;
        this.dataToSend = dataToSend;
        this.visitorToken = visitorToken;
    }

    private shouldSendEmail(): boolean {
        if (this.oldTime === null) {
            return true; // that's the first time the visitor visits
        }
        if ((new Date().getTime() - +this.oldTime ) > this.timeOffset) {
            return true; // the visitor wasn't here before timeOffset minutes
        }
        return false; // the visitor was here in the past timeOffset 
    }

    public sendEmail(): void {
        if (this.shouldSendEmail()) {
            emailjs.send(
                this.mailerServiceID,
                this.mailerTemplateID,
                {
                    visitor_token: this.visitorToken,
                    data: this.dataToSend,
                    date_and_time: new Date().toTimeString().slice(0, 17) + " " + new Date().toDateString().slice(0, 17)
                },
                this.mailerUserID
            );
        }
    }
}


export default Mailer;