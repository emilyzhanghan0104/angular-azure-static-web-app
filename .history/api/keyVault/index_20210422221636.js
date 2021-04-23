const main = require("../functions/services/keyVault");

module.exports = async function (context) {
  try {
    // const sendGrid = await SendGrid.createInstance(false);
    // await sendGrid.sendEmail('<h1>Text</h1>', 'Subject', 'thiago@hesper.io');

    const result = await main();
    context.res = {
      body: result,
    };
  } catch (error) {
    console.error(error);

    context.res = {
      body: false,
    };
  }
};
