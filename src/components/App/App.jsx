import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contscts } from 'components/Contacts/Contacts';

import { Component } from 'react';

export class App extends Component {
  state = {
    contscts: [],
  };

  render() {
    return <Form />;
  }
}
