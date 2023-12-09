const accountNumber = process.env.accNum;
const apiID = process.env.api;
const region = process.env.region;

function auth(event) {
  let auth;

  if (event["authorizationToken"] == "abc123") {
    auth = "Allow";
  } else {
    auth = "Deny";
  }

  const authResponse = {
    principalId: "abc123",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: auth,
          Resource: `arn:aws:execute-api:${region}:${accountNumber}:${apiID}/*/*`,
        },
      ],
    },
  };

  return authResponse;
}

export const handler = async (event) => {
  const authResponse = auth(event);

  return authResponse;
};
