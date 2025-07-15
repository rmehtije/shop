import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function AuthControl({ action, actions, handleOnSelect }) {

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={action}
      onSelect={handleOnSelect}
      className="mb-3"
    >
        <Tab eventKey={actions.SignIn} title={actions.SignIn} />
        <Tab eventKey={actions.SignUp} title={actions.SignUp} />
    </Tabs>
  );
}

export default AuthControl;
