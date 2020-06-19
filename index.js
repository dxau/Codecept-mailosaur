const MailosaurClient = require('mailosaur')
const { Helper } = codeceptjs;

class Mailosaur extends Helper {

  constructor(config) {
    super(config)
    this.client = new MailosaurClient(this.config.key);
  }

  _init() {
    if (!this.config.key) {
      throw new Error('Missing mailosaur API key from config. Set it as "key:<API_KEY>"');
    } else if (!this.config.serverId) {
      throw new Error('Missing mailosaur Server ID from config. Set it as "serverId:<SERVER_ID>"');
    }
  }

  /*
  * @summary Retrieve a message using search criteria
  *
  * Returns as soon as a message matching the specified search criteria is
  * found. This is the most efficient method of looking up a message.
  * 
  * @param {object} criteria The search criteria to use in order to find a
  * match.
  *
  * @param {string} [criteria.sentTo] The full email address to which the target
  * email was sent.
  *
  * @param {string} [criteria.subject] The value to seek within the target
  * email's subject line.
  *
  * @param {string} [criteria.body] The value to seek within the target email's
  * HTML or text body.
  *
  * @param {object} [options] Optional Parameters.
  *
  * @param {number} [options.timeout] Specify how long to wait for a matching
  * result (in milliseconds).
  *
  * @param {date} [options.receivedAfter] Limits results to only messages
  * received after this date/time (default 20 seconds ago).
  */
  async getMessages(criteria, options={}) {
    return await this.client.messages.get(this.config.serverId, criteria, options);
  }
}

module.exports = Mailosaur;
