'use strict';

module.exports.notify = async (event) => {
  try {
    console.log("event: ", event);
    return {
      statusCode: 200,
      body: "Oops! it workedp ;)"
    };
  }
  catch (err) {
    console.log("Handler:: Exception:  ", err)
  }
};
