const dialogflow = require("dialogflow");
const credentials = require("./credentials.json");

async function main() {
	const client = new dialogflow.SessionsClient({ credentials });
	const results1 = await client.detectIntent({
		session: client.sessionPath(credentials.project_id, "id2"),
		queryInput: {
			text: {
				text: "hi",
				languageCode: "en"
			}
		}
	});

	const results2 = await client.detectIntent({
		session: client.sessionPath(credentials.project_id, "id2"),
		queryInput: {
			text: {
				text: "test",
				languageCode: "en"
			}
		}
	});
}

main();

