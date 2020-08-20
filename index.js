const dialogflow = require("@google-cloud/dialogflow");
//TODO: Remember to download the credentials.
const credentials = require("./credentials.json");

async function main() {
	const client = new dialogflow.SessionsClient({ credentials });

	const results1 = await client.detectIntent({
		session: client.projectAgentSessionPath(credentials.project_id, "id2"),
		queryInput: {
			text: {
				text: "hi",
				languageCode: "en"
			}
		}
	});
	console.log(`${results1[0].queryResult.intent.displayName} output contexts: ${JSON.stringify(results1[0].queryResult.outputContexts)}`);

	const results2 = await client.detectIntent({
		session: client.projectAgentSessionPath(credentials.project_id, "id2"),
		queryInput: {
			text: {
				text: "test",
				languageCode: "en"
			}
		}
	});
	// Here it should appear the input context names of the intent, yet there is not output.
	console.log(`${results2[0].queryResult.intent.displayName} input contexts: ${results2[0].queryResult.intent.inputContextNames}`);
}

main();

