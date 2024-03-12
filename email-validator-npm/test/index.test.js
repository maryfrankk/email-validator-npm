
5. **test/index.test.js (Test Dosyası):**

```javascript
const chai = require('chai');
const validateEmail = require('../index');

const expect = chai.expect;

describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
        expect(validateEmail('example@email.com')).to.equal(true);
    });

    it('should return false for an invalid email address', () => {
        expect(validateEmail('invalid_email.com')).to.equal(false);
    });
});