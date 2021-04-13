const trackerURL = 'https://www.cloudflare.com/cdn-cgi/trace';
const dbURL = 'https://my-gh-page-default-rtdb.europe-west1.firebasedatabase.app/';
const storeVisitor = () => {
    fetch(trackerURL)
        .then(res => res.text())
        .then((visitorData: String) => {
            fetch(dbURL+`${new Date().getTime()}.json`, {
                method: "POST",
                headers: {
                    "Application": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({visitorData: visitorData, date: new Date()})
            })
                .then(res => res)
        });
};



export default storeVisitor;