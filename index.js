import {MailosaurClient} from 'mailosaur';

const {Helper} = codeceptjs;


class Mailosaur extends Helper {
  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  getMessage(filter) {
    const client = new MailosaurClient(this.helpers.Mailosaur.key);
    const serverId = this.helpers.Mailosaur.serverId;
    return client.messages.get(serverId, filter);
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

export default Mailosaur;
