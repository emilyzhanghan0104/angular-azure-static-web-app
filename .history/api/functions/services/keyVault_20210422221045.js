const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const vaultName = "dcbelTest111";
const url = `https://${vaultName}.vault.azure.net`;
const credential = new DefaultAzureCredential();
const client = new SecretClient(url, credential);
const secretName = "sendGrid-emailFrom-development";

export default async function main() {
  try {
    const latestSecret = await client.getSecret(secretName);
    console.log(`Latest version of the secret ${secretName}: `, latestSecret);

    return latestSecret;
  } catch (error) {
    console.log(error);
  }

  return null;
}
