import { template } from 'lodash';

export default template(`
  <div>
    <div>You've received an invite to be an admin at <a href="<%- baseUrl %>">kylejohnson.xyz</a></div>
    <div>Please follow <a href="<%- signupLink %>">this link</a> to signup</div>
  </div>
`);
