class Email {
	constructor(subject, body) {
		this.subject = subject;
		this.body = body;
	}
}

class SpamDetector {
	percentageUpperCase(email) {
		const bodyString = email.body.replace(/\s/g, "");
		const bodyCharacters = bodyString.split("");
		const upperCaseCharactors = bodyCharacters.filter((char) => {
			return char === char.toUpperCase();
		});
		return (upperCaseCharactors.length * 100) / bodyCharacters.length > 60;
	}

	checkSpamWords(email) {
		const bodyWords = email.body.split(" ");
		const spamWords = ["viagra", "offer", "free", "business proposal"];
		const emailHasSpamWords = bodyWords.filter((word) => {
			return spamWords.includes(word.toLowerCase());
		});
		return emailHasSpamWords.length > 0;
	}
	helloInSubject(email) {
		const subjectWord = email.subject;
		return subjectWord.toLowerCase() === "hello";
	}

	isSpam(email) {
		if (
			this.percentageUpperCase(email) === true ||
			this.checkSpamWords(email) === true ||
			this.helloInSubject(email) === true
		) {
			return true;
		} else {
			return false;
		}
	}
}

const emailFromOldFriend = new Email(
	"Hello old friend",
	"Long time no see, offer when should we hang out again??"
);

const emailFromKaleb = new Email(
	"Confirmation",
	"I have finalized the the offer, find attached here with"
);
const emailFromSomeOne = new Email(
	"Hi there",
	"There is a work shope on JS this coming Sunday. It is free entrance."
);

const spamDetector = new SpamDetector();
const result = spamDetector.isSpam(emailFromOldFriend);
console.log(result);
console.log(spamDetector.isSpam(emailFromKaleb));
console.log(spamDetector.isSpam(emailFromSomeOne));
