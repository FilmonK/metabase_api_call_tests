const API_KEY = "your_api_key";
const BASE_URL = "your_metabase_base_url";
const NODE_API_URL = "http://localhost:3000/api/collection"; 


const makeDirectApiCall = async () => {
    try {
        const header = {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY
        };

        let collectionResponse = await fetch(`${BASE_URL}/collection`, {
            headers: header
        });

        const collectionInfo = await collectionResponse.json();
        document.getElementById('directApiMessage').textContent = JSON.stringify(collectionInfo);

    } catch (error) {
        document.getElementById('directApiMessage').textContent = 'Error: ' + error.message;
    }
};

// Call Node server (/api/collection)
const makeNodeApiCall = async () => {
    try {
        let nodeResponse = await fetch(NODE_API_URL);
        const nodeInfo = await nodeResponse.json();
        document.getElementById('nodeApiMessage').textContent = JSON.stringify(nodeInfo);

    } catch (error) {
        document.getElementById('nodeApiMessage').textContent = 'Error: ' + error.message;
    }
};


document.getElementById('directApiCallButton').addEventListener('click', makeDirectApiCall);
document.getElementById('nodeApiCallButton').addEventListener('click', makeNodeApiCall);
